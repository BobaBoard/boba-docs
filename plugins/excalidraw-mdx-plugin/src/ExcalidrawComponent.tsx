import BrowserOnly from "@docusaurus/BrowserOnly";
import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

export const ExcalidrawComponent = (props: {
  fileContent: string;
  alt: string;
}) => {
  const { colorMode } = useColorMode();
  const dialog = React.useRef<HTMLDialogElement>(null);

  return (
    <BrowserOnly>
      {() => {
        const {
          THEME,
          exportToClipboard,
          exportToSvg,
        } = require("@excalidraw/excalidraw");

        return (
          <div className="excalidraw-embed" aria-label={props.alt}>
            <dialog
              ref={dialog}
              onClick={(event) => {
                if (!dialog.current) {
                  return;
                }
                var rect = dialog.current.getBoundingClientRect();
                var isInDialog =
                  rect.top <= event.clientY &&
                  event.clientY <= rect.top + rect.height &&
                  rect.left <= event.clientX &&
                  event.clientX <= rect.left + rect.width;
                if (!isInDialog) {
                  dialog.current.close();
                }
              }}
            >
              <div
                key={props.fileContent + colorMode}
                ref={async (ref) => {
                  const svgImage = await exportToSvg({
                    ...JSON.parse(props.fileContent),
                    appState: {
                      theme: colorMode == "dark" ? THEME.DARK : THEME.LIGHT,
                      exportWithDarkMode: colorMode == "dark",
                      exportBackground: false,
                    },
                    type: "png",
                  });
                  if (!ref || ref.hasChildNodes()) {
                    return;
                  }
                  svgImage.style.maxWidth = "max(100%, 500px)";
                  svgImage.style.height = "auto";
                  ref.appendChild(svgImage);
                }}
              />
              <form
                method="dialog"
                onSubmit={() => {
                  document.body.style.overflow = "visible";
                }}
              >
                <button>Close dialog</button>
              </form>
            </dialog>
            <div
              key={props.fileContent + colorMode}
              ref={async (ref) => {
                const svgImage = await exportToSvg({
                  ...JSON.parse(props.fileContent),
                  appState: {
                    theme: colorMode == "dark" ? THEME.DARK : THEME.LIGHT,
                    exportWithDarkMode: colorMode == "dark",
                    exportBackground: false,
                  },
                  type: "png",
                });
                if (!ref || ref.hasChildNodes()) {
                  return;
                }
                svgImage.style.maxWidth = "100%";
                svgImage.style.height = "auto";
                ref.appendChild(svgImage);
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
              <button
                onClick={() => {
                  dialog.current?.showModal();
                  document.body.style.overflow = "hidden";
                }}
              >
                Show full page
              </button>
            </span>
            <style>
              {`
              .excalidraw-embed dialog::backdrop {
                background-color: rgba(0,0,0, 0.7);
              }
            `}
            </style>
          </div>
        );
      }}
    </BrowserOnly>
  );
};
