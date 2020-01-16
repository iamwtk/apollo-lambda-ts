"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders_resolver_1 = require("./resolvers/orders.resolver");
const order_resolver_1 = require("./resolvers/order.resolver");
const version_resolver_1 = require("./resolvers/version.resolver");
const versions_resolver_1 = require("./resolvers/versions.resolver");
const resolvers = {
    Query: {
        orders: orders_resolver_1.default,
        order: order_resolver_1.default,
        version: version_resolver_1.default
    },
    Order: {
        versions: versions_resolver_1.default
    }
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map