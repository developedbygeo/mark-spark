export type OnSelectedFileCb = (content: string, filePath: string) => void;

export type MarkdownFile = {
  content?: string;
  filePath?: string;
};
