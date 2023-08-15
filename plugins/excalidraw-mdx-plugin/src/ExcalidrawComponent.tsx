import BrowserOnly from "@docusaurus/BrowserOnly";
import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

export const ExcalidrawComponent = (props: { fileContent: string }) => {
  const { colorMode } = useColorMode();

  return (
    <BrowserOnly>
      {() => {
        const {
          THEME,
          exportToClipboard,
          exportToSvg,
        } = require("@excalidraw/excalidraw");

        return (
          <span className="excalidraw-embed">
            <span
              key={props.fileContent + colorMode}
              ref={(ref) => {
                exportToSvg({
                  ...JSON.parse(props.fileContent),
                  appState: {
                    theme: colorMode == "dark" ? THEME.DARK : THEME.LIGHT,
                    exportWithDarkMode: colorMode == "dark",
                    exportBackground: false,
                  },
                  type: "png",
                }).then((svg: any) => {
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
                key={"clipboard-copy" + colorMode}
                onClick={() => {
                  exportToClipboard({
                    ...JSON.parse(props.fileContent),
                    appState: {
                      theme: colorMode == "dark" ? THEME.DARK : THEME.LIGHT,
                      exportWithDarkMode: colorMode == "dark",
                    },
                    type: "png",
                  });
                }}
              >
                Copy image
              </button>
            </span>
          </span>
        );
      }}
    </BrowserOnly>
  );
};
