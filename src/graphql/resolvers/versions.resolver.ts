import axios from "axios";
import { mapVersions } from "./resolvers.utils";

export default async function versionsResolver(parent) {
  const { data } = await axios.get(
    `https://db-api.imdcloud.net/v2/orders/${parent.id}/versions?Sort_by=Created_On.desc`
  );
  return {
    campaignId: parent.id,
    count: data.data.versions.length,
    versions: mapVersions(data.data.versions)
  };
}
