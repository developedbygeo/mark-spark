import { BrowserWindow, ipcMain } from 'electron';
import { handleOpenDialog } from '../libs/operations';

const handleEvents = (dialog: Electron.Dialog) => {
  ipcMain.on('show-open-dialog', (e) => {
    const browserWindow = BrowserWindow.fromWebContents(e.sender);
    console.log(e.sender);

    if (!browserWindow) return;

    handleOpenDialog(dialog, browserWindow);
  });
};

export default handleEvents;
