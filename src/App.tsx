import { useState } from 'react';
import Layout from 'src/components/modules/Layout';
import HtmlView from 'src/components/modules/HtmlView';
import MarkdownEditor from 'src/components/modules/MarkdownEditor';

const App = () => {
  return (
    <>
      <Layout>
        <div className="w-full px-6 py-12 flex gap-8">
          <MarkdownEditor className="flex-1 flex-grow" />
          <HtmlView className="flex-1 flex-grow" />
        </div>
      </Layout>
    </>
  );
};

export default App;
