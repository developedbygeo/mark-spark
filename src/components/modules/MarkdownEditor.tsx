import { useCallback } from 'react';
import { debounce } from 'lodash';

import { setMarkdown } from 'src/store/slices/markdownSlice';
import { WithClassName } from 'src/types/UI';
import { useAppSelector, useAppDispatch } from 'src/store/hooks';

import { Textarea } from 'src/components/Textarea';
import { Label } from 'src/components/Label';

const MarkdownEditor = ({ className }: WithClassName) => {
  const markdownText = useAppSelector((state) => state.data.markdown);
  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    debounce((e: React.ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(setMarkdown(e.target.value));
    }, 250),
    []
  );

  return (
    <section className={className}>
      <h2 className="sr-only">HTML View</h2>
      <Label htmlFor="markdown-view">Markdown</Label>
      <Textarea
        onChange={handleChange}
        defaultValue={markdownText || ''}
        className="h-[80vh] overflow-y-auto resize-none c-scrollbar mt-8"
        id="markdown-view"
      />
    </section>
  );
};

export default MarkdownEditor;
