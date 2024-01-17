import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const RichText = ({ richText }) => {
  const options = {
    renderNode: {
      paragraph: (node, children) => (
        <p className='mt-3 text-gray-600 dark:text-gray-400'>{children}</p>
      ),
      'heading-1': (node, children) => (
        <h1 className='my-4 mb-3 text-lg'>{children}</h1>
      ),

      'unordered-list': (node, children) => (
        <ul className='ml-5 text-gray-600 dark:text-gray-400'>{children}</ul>
      ),
      'ordered-list': (node, children) => (
        <ol className='ml-5 text-gray-600 dark:text-gray-400'>{children}</ol>
      ),
    },
  };

  return <div>{documentToReactComponents(richText, options)}</div>;
};

export default RichText;
