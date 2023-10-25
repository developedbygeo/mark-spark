import { useState } from 'react';
import Markdown from 'markdown-to-jsx';

import { Label } from 'src/components/Label';
import { WithClassName } from 'src/types/UI';

import options from 'src/lib/htmlViewParserOpts';
import { preprocessHtml } from 'src/lib/data';

const PreviewView = ({ className }: WithClassName) => {
  const [parsedHtml, setParsedHtml] = useState<null | string>(null);

  window.ipcRenderer.on('selected-file', async (_, content: string, filepath: string) => {
    const preprocessed = preprocessHtml(content);
    setParsedHtml(preprocessed);
  });

  return (
    <section className={className}>
      <h2 className="sr-only">Preview</h2>
      <Label>Preview</Label>
      <div className="h-[80vh] c-scrollbar overflow-y-auto mt-8">
        {parsedHtml && <Markdown options={options}>{parsedHtml}</Markdown>}
      </div>
    </section>
  );
};

export default PreviewView;
