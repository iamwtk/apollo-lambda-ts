import axios from "axios";
import { mapOrders } from "./resolvers.utils";

export default async function ordersResolver() {
  const { data } = await axios.get("https://db-api.imdcloud.net/v2/orders");
  return mapOrders(data.data.orders);
}
