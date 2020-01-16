import ordersResolver from "./resolvers/orders.resolver";
import orderResolver from "./resolvers/order.resolver";
import versionResolver from "./resolvers/version.resolver";
import versionsResolver from "./resolvers/versions.resolver";

const resolvers = {
  Query: {
    orders: ordersResolver,
    order: orderResolver,

    version: versionResolver
  },
  Order: {
    versions: versionsResolver
  }
};

export default resolvers;
