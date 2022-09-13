import React from "react";
import styles from "./EditorPreview.module.css";
import Editor from "@bobaboard/boba-editor";
import Highlight, { defaultProps } from "prism-react-renderer";

export default function EditorPreview(props) {
  return (
    <div className={styles.editorContainer}>
      <h4>Delta:</h4>
      <Highlight {...defaultProps} code={props.text.trim()} language="json">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                <div>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              </div>
            ))}
          </pre>
        )}
      </Highlight>

      <h4>Output:</h4>
      <div className={styles.previewContainer}>
        <Editor initialText={JSON.parse(props.text)} forceSSR={true} />
      </div>
    </div>
  );
}
