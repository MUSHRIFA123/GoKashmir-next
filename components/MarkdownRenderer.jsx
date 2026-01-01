import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const MarkdownRenderer = ({ markdown }) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      components={{
        ol: ({ node, start, ...props }) => {
          if (node.properties && node.properties.start) {
            return <ol start={node.properties.start} {...props} />;
          }
          return <ol {...props} />;
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;