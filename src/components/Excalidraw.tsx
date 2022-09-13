import { THEME, exportToSvg } from "@excalidraw/excalidraw";

import React from "react";

export const Excalidraw = (props: { src: string }) => {
  console.log(JSON.parse(props.src));
  return (
    <>
      <div
        key={props.src}
        style={{ maxWidth: "100%" }}
        ref={(ref) => {
          console.log({
            ...JSON.parse(props.src),
            appState: { theme: THEME.DARK, viewBackgroundColor: "transparent" },
            type: "png",
          });
          exportToSvg({
            ...JSON.parse(props.src),
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
    </>
  );
};
