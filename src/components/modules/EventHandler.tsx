import { preprocessHtml } from 'src/lib/data';
import { useAppDispatch } from 'src/store/hooks';
import { setMarkdown, setPreview } from 'src/store/slices/markdownSlice';

const EventHandler = () => {
  const dispatch = useAppDispatch();

  window.ipcRenderer.on('selected-file', async (_, content: string, filepath: string) => {
    const preprocessedHTML = preprocessHtml(content);

    dispatch(setMarkdown(content));
    dispatch(setPreview(preprocessedHTML));
  });

  return null;
};

export default EventHandler;
