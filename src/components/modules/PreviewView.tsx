import Markdown, { compiler } from 'markdown-to-jsx';
import ReactDOMServer from 'react-dom/server';

import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import options from 'src/lib/htmlViewParserOpts';

import { Label } from 'src/components/Label';
import { WithClassName } from 'src/types/UI';
import { useEffect } from 'react';
import { setParsed } from 'src/store/slices/markdownSlice';

const PreviewView = ({ className }: WithClassName) => {
  const previewText = useAppSelector((state) => state.data.preview);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (previewText) {
      const element = compiler(previewText, options);
      dispatch(setParsed(ReactDOMServer.renderToString(element)));
    }
  }, [previewText]);

  return (
    <section className={className}>
      <h2 className="sr-only">Preview</h2>
      <Label>Preview</Label>
      <div className="h-[80vh] c-scrollbar overflow-y-auto mt-8">
        {previewText && <Markdown options={options}>{previewText}</Markdown>}
      </div>
    </section>
  );
};

export default PreviewView;
