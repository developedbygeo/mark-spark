import Layout from 'src/components/modules/Layout';
import PreviewView from 'src/components/modules/PreviewView';
import MarkdownEditor from 'src/components/modules/MarkdownEditor';

const App = () => {
  return (
    <>
      <Layout>
        <div className="w-full px-6 py-12 grid grid-cols-2 gap-8">
          <MarkdownEditor />
          <PreviewView />
        </div>
      </Layout>
    </>
  );
};

export default App;
