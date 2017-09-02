import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/styles";
import striptags from "striptags";
import textile from "textile-js";

const Textile = ({ text }) => {
  const regex = /([\s\S]*)(<pre>\n?<code class="(.*?)">)([\s\S]*)(<\/code>\n?<\/pre>)([\s\S]*)/g;

  let m;

  while ((m = regex.exec(text)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    const language = m[3];
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: textile(m[1]) }} />
        <SyntaxHighlighter language={language} style={dracula}>
          {striptags(m[4])}
        </SyntaxHighlighter>
        <div dangerouslySetInnerHTML={{ __html: textile(m[6]) }} />
      </div>
    );
  }
  return <div dangerouslySetInnerHTML={{ __html: textile(text) }} />;
};

export default Textile;
