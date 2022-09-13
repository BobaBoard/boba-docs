import { THEME, exportToClipboard, exportToSvg } from "@excalidraw/excalidraw";

import React from "react";

export const ExcalidrawComponent = (props: { fileContent: string }) => {
  return (
    <span className="excalidraw-embed">
      <span
        key={props.fileContent}
        ref={(ref) => {
          exportToSvg({
            ...JSON.parse(props.fileContent),
            appState: {
              theme: THEME.DARK,
              viewBackgroundColor: "transparent",
              exportWithDarkMode: true,
            },
            type: "png",
          }).then((svg) => {
            if (!ref || ref.hasChildNodes()) {
              return;
            }
            svg.style.maxWidth = "100%";
            svg.style.height = "auto";
            ref.appendChild(svg);
          });
        }}
      />
      <span
        className="excalidraw-links"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => {
            exportToClipboard({
              ...JSON.parse(props.fileContent),
              appState: {
                theme: THEME.DARK,
                viewBackgroundColor: "transparent",
                exportWithDarkMode: true,
              },
              type: "png",
            });
          }}
        >
          Copy image
        </button>
        <a
          href={`https://excalidraw.com/#json=${encodeURIComponent(
            props.fileContent
          )}`}
        >
          Open in Excalidraw
        </a>
      </span>
    </span>
  );
};
