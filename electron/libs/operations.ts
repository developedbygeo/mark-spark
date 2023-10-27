import { BrowserWindow } from 'electron';
import { readFile } from 'node:fs/promises';
import { addStyling, exportHtml, saveFile } from '../libs/data-utils';

export const handleOpenDialog = async (dialog: Electron.Dialog, browserWindow: BrowserWindow) => {
  const result = await dialog.showOpenDialog(browserWindow, {
    properties: ['openFile'],
    filters: [{ name: 'Markdown File', extensions: ['md'] }],
  });

  if (result.canceled) return;

  const [filePath] = result.filePaths;
  handleOpenFile(browserWindow, filePath);

  return result;
};

export const handleOpenFile = async (browserWindow: BrowserWindow, filePath: string) => {
  const content = await readFile(filePath, { encoding: 'utf-8' });

  browserWindow.webContents.send('selected-file', content, filePath);
};
export const handleSaveHtmlDialog = async (
  dialog: Electron.Dialog,
  browserWindow: BrowserWindow,
  htmlString: string
) => {
  const styledHtmlString = await addStyling(htmlString);

  const result = await dialog.showSaveDialog(browserWindow, {
    title: 'Export as HTML',
    defaultPath: 'export.html',
    filters: [{ name: 'HTML', extensions: ['html'] }],
  });

  const { filePath } = result;

  if (!filePath) return;

  await exportHtml(filePath, styledHtmlString);
};
