import { preprocessHtml } from 'src/lib/data';
import { useAppDispatch } from 'src/store/hooks';
import { setMarkdown, setPreview } from 'src/store/slices/markdownSlice';

const EventHandler = () => {
  const dispatch = useAppDispatch();

  window.actionsApi.onSelectedFile((content: string, filePath: string) => {
    dispatch(setMarkdown(content));
    dispatch(setPreview(preprocessHtml(content)));
  });

  return null;
};

export default EventHandler;
