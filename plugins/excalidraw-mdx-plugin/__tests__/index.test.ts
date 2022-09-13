import { describe, it } from "vitest";
import { read, toVFile } from "to-vfile";

import excalidrawPlugin from "../src";
import fs from "fs";
import { remark } from "remark";

// TODO: actually turn this into a test rather than just have it to
// test the plugin without reloading docusaurus.
it("will find file", async () => {
  const vfile = await read(__dirname + "/page.mdx");
  const result = await remark().use([excalidrawPlugin]).process(vfile);
  //   console.log(String(result));
});
