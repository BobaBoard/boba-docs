import { SKIP, visitParents } from "unist-util-visit-parents";

import type { Image } from "mdast";
import type { Parent } from "unist";
import type { VFile } from "vfile";

const plugin = () => {
  const transformer = async (
    ast: Parameters<typeof visitParents>[0],
    vfile: VFile
  ) => {
    let foundExcalidrawImport = false;
    visitParents(ast, { type: "image" }, (node, parents: Parent[]) => {
      const imageNode = node as Image;
      if (imageNode.url.endsWith(".excalidraw")) {
        // Parents are in reverse order, with the direct parent being
        // the last one in the array
        const directParent = parents[parents.length - 1];
        const nodeIndex = directParent.children.findIndex(
          (childNode) => childNode === node
        );
        directParent.children[nodeIndex] = {
          type: "jsx",
          // TODO: add accessibility settings
          value: `<ExcalidrawComponent fileContent={require("${imageNode.url}").default} />`,
        } as any;
        foundExcalidrawImport = true;
        return SKIP;
      }
    });

    if (foundExcalidrawImport) {
      (ast as Parent).children.unshift({
        type: "import",
        value:
          'import { ExcalidrawComponent } from "excalidraw-mdx-plugin/component";',
      } as any);
    }
  };
  return transformer;
};

export default plugin;
