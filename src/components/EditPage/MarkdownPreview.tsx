import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const MarkdownPreview = ({ markdown }: { markdown: string }) => {

    return (
      <div 
      className="w-full items-center">
      <ReactMarkdown 
      remarkPlugins={[remarkGfm]} 
      rehypePlugins={[rehypeRaw]}
      components={{
        table({ children }) {
          return <table className="table">{children}</table>;
        },
        th({ children }) {
          return <th className="th">{children}</th>;
        },
        td({ children }) {
          return <td className="td">{children}</td>;
        },
        tr({ children }) {
          return <tr>{children}</tr>;
        },
      }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
    );
  
}

export default MarkdownPreview;