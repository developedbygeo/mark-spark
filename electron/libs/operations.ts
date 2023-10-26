import { BrowserWindow, ipcMain } from 'electron';
import { readFile } from 'node:fs/promises';

export const handleOpenDialog = async (dialog: Electron.Dialog, browserWindow: BrowserWindow) => {
  const result = await dialog.showOpenDialog(browserWindow, {
    properties: ['openFile'],
    filters: [{ name: 'Markdown File', extensions: ['md'] }],
  });

  if (result.canceled) return;

  const [filePath] = result.filePaths;
  openFile(browserWindow, filePath);

  return result;
};

export const openFile = async (browserWindow: BrowserWindow, filePath: string) => {
  const content = await readFile(filePath, { encoding: 'utf-8' });

  //   sends the selected file content to the renderer process
  browserWindow.webContents.send('selected-file', content, filePath);
};
