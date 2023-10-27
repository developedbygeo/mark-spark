import { BrowserWindow, ipcMain } from 'electron';
import { handleOpenDialog, handleSaveHtmlDialog } from '../libs/operations';
import { MarkdownFile } from '../types';
import { saveFile } from '../libs/data-utils';

// keeping track of the current file being edited
// so we can show the save dialog if any changes etc exist
// and so we can conditionally enable the button on the FE
const currentFile: MarkdownFile = {
  content: '',
  filePath: undefined,
};

const handleEvents = (dialog: Electron.Dialog) => {
  // opening files
  ipcMain.on('show-open-dialog', (e) => {
    const browserWindow = BrowserWindow.fromWebContents(e.sender);

    if (!browserWindow) return;

    handleOpenDialog(dialog, browserWindow);
  });

  // exporting to html
  ipcMain.on('export-html', async (e, htmlString) => {
    const browserWindow = BrowserWindow.fromWebContents(e.sender);
    if (!browserWindow) return;

    handleSaveHtmlDialog(dialog, browserWindow, htmlString);
  });

  // saving files
  ipcMain.on('save-file', async (e, htmlString) => {
    const browserWindow = BrowserWindow.fromWebContents(e.sender);
    if (!browserWindow) return;

    await saveFile(dialog, browserWindow, htmlString, currentFile);
  });
};

export default handleEvents;
