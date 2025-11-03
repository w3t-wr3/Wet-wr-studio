import type { Message } from 'ai';
import { generateId } from './fileUtils';
import { detectProjectCommands, createCommandsMessage, escapeBoltTags } from './projectCommands';
import { autoFixProject, createAutoFixMessage } from './projectAutoFixer';

export const createChatFromFolder = async (
  files: File[],
  binaryFiles: string[],
  folderName: string,
): Promise<Message[]> => {
  const fileArtifacts = await Promise.all(
    files.map(async (file) => {
      return new Promise<{ content: string; path: string }>((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
          const content = reader.result as string;
          const relativePath = file.webkitRelativePath.split('/').slice(1).join('/');
          resolve({
            content,
            path: relativePath,
          });
        };
        reader.onerror = reject;
        reader.readAsText(file);
      });
    }),
  );

  // Auto-detect and fix project issues
  const autoFixResult = await autoFixProject(fileArtifacts);

  // Apply fixes to fileArtifacts
  const fixedFileArtifacts = fileArtifacts.map((file) => {
    const fix = autoFixResult.fixes.find((f) => f.path === file.path);
    return fix ? { ...file, content: fix.content } : file;
  });

  const commands = await detectProjectCommands(fixedFileArtifacts);

  // Use the auto-determined setup and start commands
  if (commands.setupCommand && autoFixResult.setupCommand) {
    commands.setupCommand = autoFixResult.setupCommand;
  }
  if (autoFixResult.startCommand) {
    commands.startCommand = autoFixResult.startCommand;
  }

  const commandsMessage = createCommandsMessage(commands);
  const autoFixMessage = createAutoFixMessage(autoFixResult);

  const binaryFilesMessage =
    binaryFiles.length > 0
      ? `\n\nSkipped ${binaryFiles.length} binary files:\n${binaryFiles.map((f) => `- ${f}`).join('\n')}`
      : '';

  const filesMessage: Message = {
    role: 'assistant',
    content: `I've imported the contents of the "${folderName}" folder.${binaryFilesMessage}

<boltArtifact id="imported-files" title="Imported Files" type="bundled" >
${fixedFileArtifacts
  .map(
    (file) => `<boltAction type="file" filePath="${file.path}">
${escapeBoltTags(file.content)}
</boltAction>`,
  )
  .join('\n\n')}
</boltArtifact>`,
    id: generateId(),
    createdAt: new Date(),
  };

  const userMessage: Message = {
    role: 'user',
    id: generateId(),
    content: `Import the "${folderName}" folder`,
    createdAt: new Date(),
  };

  const messages = [userMessage, filesMessage];

  // Add auto-fix message if there were any fixes applied
  if (autoFixMessage) {
    messages.push(autoFixMessage);
  }

  if (commandsMessage) {
    messages.push({
      role: 'user',
      id: generateId(),
      content: 'Setup the codebase and Start the application',
    });
    messages.push(commandsMessage);
  }

  return messages;
};
