"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const resolvers_utils_1 = require("./resolvers.utils");
function versionsResolver(parent) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield axios_1.default.get(`https://db-api.imdcloud.net/v2/orders/${parent.id}/versions?Sort_by=Created_On.desc`);
        return {
            campaignId: parent.id,
            count: data.data.versions.length,
            versions: resolvers_utils_1.mapVersions(data.data.versions)
        };
    });
}
exports.default = versionsResolver;
//# sourceMappingURL=versions.resolver.js.map