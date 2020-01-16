"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
function handleContext(context) {
    const { event } = context;
    axios_1.default.defaults.headers.common.authorization =
        event.headers.authorization || "";
    return event;
}
exports.default = handleContext;
//# sourceMappingURL=handleContext.js.map