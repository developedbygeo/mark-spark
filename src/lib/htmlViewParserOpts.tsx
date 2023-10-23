import { WithChildren } from 'src/types/UI';

const options = {
  overrides: {
    h1: {
      component: ({ children }: WithChildren) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
    },
    h2: {
      component: ({ children }: WithChildren) => <h2 className="text-3xl font-bold my-3">{children}</h2>,
    },
    h3: {
      component: ({ children }: WithChildren) => <h3 className="text-2xl font-bold my-2">{children}</h3>,
    },
    h4: {
      component: ({ children }: WithChildren) => <h4 className="text-xl font-bold my-2">{children}</h4>,
    },
    h5: {
      component: ({ children }: WithChildren) => <h5 className="text-lg font-bold my-2">{children}</h5>,
    },
    h6: {
      component: ({ children }: WithChildren) => <h6 className="text-base font-bold my-2">{children}</h6>,
    },
    p: {
      component: ({ children }: WithChildren) => <p className="text-base my-2">{children}</p>,
    },
    strong: {
      component: ({ children }: WithChildren) => <strong className="font-semibold">{children}</strong>,
    },
    em: {
      component: ({ children }: WithChildren) => <em className="italic">{children}</em>,
    },
    blockquote: {
      component: ({ children }: WithChildren) => (
        <blockquote className="border-l-4 border-gray-500 pl-4 italic">{children}</blockquote>
      ),
    },
    ul: {
      component: ({ children }: WithChildren) => <ul className="list-disc list-inside">{children}</ul>,
    },
    ol: {
      component: ({ children }: WithChildren) => <ol className="list-decimal list-inside">{children}</ol>,
    },
    li: {
      component: ({ children }: WithChildren) => <li className="my-1">{children}</li>,
    },
    a: {
      component: ({ children, ...props }: WithChildren) => (
        <a className="text-blue-500 underline" {...props}>
          {children}
        </a>
      ),
    },
    // ... any other elements you want to customize
  },
};

export default options;
