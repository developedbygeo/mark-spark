import { writeFile } from 'node:fs/promises';
import getBuildStyles from '../libs/build-styles';
import { BrowserWindow } from 'electron';
import { MarkdownFile } from 'electron/types';

export const addStyling = async (htmlString: string) => {
  const styles = getBuildStyles();
  const styledHtmlString = htmlString.replace('</head>', `<style>${styles}</style></head>`);
  return styledHtmlString;
};

export const exportHtml = async (filePath: string, htmlString: string) => {
  await writeFile(filePath, htmlString, { encoding: 'utf-8' });
};

export const saveFile = async (
  dialog: Electron.Dialog,
  browserWindow: BrowserWindow,
  content: string,
  currentFile: MarkdownFile
) => {
  const filePath = currentFile.filePath ?? (await showSaveDialogWindow(dialog, browserWindow));

  if (!filePath) return;

  await writeFile(filePath, content, { encoding: 'utf-8' });
};

export const showSaveDialogWindow = async (dialog: Electron.Dialog, browserWindow: BrowserWindow) => {
  const result = await dialog.showSaveDialog(browserWindow, {
    title: 'Save Markdown',
    defaultPath: 'new.md',
    filters: [{ name: 'Markdown', extensions: ['md'] }],
  });

  if (result.canceled) return;

  const { filePath } = result;

  if (!filePath) return;

  return filePath;
};
