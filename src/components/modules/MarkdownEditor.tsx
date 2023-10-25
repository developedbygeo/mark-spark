import { useState } from 'react';

import { WithClassName } from 'src/types/UI';

import { Label } from 'src/components/Label';
import { Textarea } from 'src/components/Textarea';

const MarkdownEditor = ({ className }: WithClassName) => {
  const [input, setInput] = useState<null | string>(null);

  window.ipcRenderer.on('selected-file', async (_, content: string, filepath: string) => {
    setInput(content);
  });

  return (
    <section className={className}>
      <h2 className="sr-only">HTML View</h2>
      <Label htmlFor="markdown-view">Markdown</Label>
      <Textarea
        value={input || ''}
        className="h-[80vh] overflow-y-auto resize-none c-scrollbar mt-8"
        id="markdown-view"
      />
    </section>
  );
};

export default MarkdownEditor;
