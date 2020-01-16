import axios from "axios";
import { mapSingleVersion } from "./resolvers.utils";

export default async function versionResolver(_, args) {
  const { data } = await axios.get(
    `https://db-api.imdcloud.net/v2/versions/${args.versionId}`
  );
  return mapSingleVersion(data);
}
