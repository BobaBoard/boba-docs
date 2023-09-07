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

      // This image node has nothing to do with excalidraw files
      if (!imageNode.url.endsWith(".excalidraw")) {
        return;
      }
      // Parents are in reverse order, with the direct parent being
      // the last one in the array
      const directParent = parents[parents.length - 1];
      if (vfile.history[0].endsWith("boba-backend/APIs/smaller-doc.md")) {
        console.log(directParent);
      }
      const nodeIndex = directParent.children.findIndex(
        (childNode) => childNode === node
      );
      directParent.children[nodeIndex] = {
        type: "jsx",
        value: `<ExcalidrawComponent fileContent={require("${imageNode.url}").default} alt={"${imageNode.alt}"} />`,
      } as any;

      foundExcalidrawImport = true;
      return SKIP;
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
