import { genModule } from "@proxtx/combine/combine.js";
import { genCombine } from "@proxtx/combine-rest/request.js";
import config from "@proxtx/config";

const logs = await genCombine(
  config.ServiceManagement.api + "/",
  "public/log.js",
  genModule
);

export class Info {
  name = "ServiceManagement";

  async info() {
    let fetchedLogs = await logs.getLogs(config.ServiceManagement.pwd);
    let returnObj = [];
    fetchedLogs = fetchedLogs.reverse();

    for (let log of fetchedLogs) {
      returnObj.push({
        element: "title-box-io",
        title: log.name,
        contains: {
          element: "box-io",
          contains: {
            element: "text-io",
            text: log.log,
            size: "90%",
            color: "var(--greyColor)",
          },
        },
      });
    }
    return returnObj;
  }
}
