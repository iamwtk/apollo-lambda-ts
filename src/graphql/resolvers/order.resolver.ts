import axios from "axios";
import { mapSingleOrder } from "./resolvers.utils";

export default async function orderResolver(_, args) {
  const { data } = await axios.get(
    `https://db-api.imdcloud.net/v2/orders/${args.campaignId}`
  );
  return mapSingleOrder(data);
}
