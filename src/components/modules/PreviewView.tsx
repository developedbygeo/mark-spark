import Markdown from 'markdown-to-jsx';

import { useAppSelector } from 'src/store/hooks';
import options from 'src/lib/htmlViewParserOpts';

import { Label } from 'src/components/Label';
import { WithClassName } from 'src/types/UI';

const PreviewView = ({ className }: WithClassName) => {
  const previewText = useAppSelector((state) => state.data.preview);

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
