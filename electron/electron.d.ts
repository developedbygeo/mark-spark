/// <reference types="vite/client" />
/// <reference types="electron" />

declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
declare const MAIN_WINDOW_VITE_NAME: string;

declare interface Window {
  actionsApi: {
    showOpenDialog: () => void;
    onSelectedFile: (callback: (content: string, filePath: string) => void) => void;
    onExportHtml: (htmlString: string) => void;
    onSaveFile: (content: string) => void;
  };
}
