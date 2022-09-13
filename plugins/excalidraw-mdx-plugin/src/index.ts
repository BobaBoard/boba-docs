// import Excalidraw, {
//   THEME,
//   exportToBlob,
//   exportToSvg,
//   getSceneVersion,
//   loadFromBlob,
//   serializeAsJSON,
// } from "@excalidraw/excalidraw";
import { THEME, exportToSvg } from "@excalidraw/excalidraw";

import type { Image } from "mdast";
import type { VFile } from "vfile";
import canvas from "canvas";
import path from "path";
import { readFileSync } from "fs";
import { visit } from "unist-util-visit";

const plugin = () => {
  const transformer = async (
    ast: Parameters<typeof visit>[0],
    vfile: VFile
  ) => {
    if (!vfile.history.length) {
      console.error(
        "Tried toget excalidraw image out of vfile without history."
      );
    }
    if (vfile.history.some((name) => name.endsWith("page.mdx"))) {
      console.log(ast);
      console.log("*****");
    } else {
      return;
    }
    visit(ast, { type: "image" }, (node) => {
      const imageNode = node as Image;
      if (imageNode.url.endsWith(".excalidraw")) {
        // console.log(imageNode);
        const buffer = readFileSync(
          path.join(path.dirname(vfile.history[0]), imageNode.url),
          "utf8"
        );
        console.log(globalThis);
        // global.window = {};
        // global.window.document = {};
        // global.document = {};
        // const x = require("@excalidraw/excalidraw");
        // console.log(x);
        exportToSvg({
          ...JSON.parse(buffer),
          appState: {
            theme: THEME.DARK,
            viewBackgroundColor: "transparent",
            exportWithDarkMode: true,
          },
        });
        // console.log(String(buffer).substring(0, 200));
      }
    });
    console.log("*****");
  };
  return transformer;
};

export default plugin;
