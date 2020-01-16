"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapSingleVersion = version => {
    let clock;
    let title;
    let duration;
    version.fields.some(field => {
        if (field.name === "Name")
            clock = Object.assign(Object.assign({}, field), { value: version.name });
        if (field.name === "VersionTitle")
            title = field;
        if (field.name === "VersionDuration")
            duration = field;
        return clock && title && duration;
    });
    return {
        id: version.id,
        clock,
        title,
        duration
    };
};
exports.mapVersions = versions => versions.map(exports.mapSingleVersion);
exports.mapSingleOrder = order => {
    let advertiser;
    let brand;
    order.fields.some(field => {
        if (field.name === "Client-Lookup")
            advertiser = field;
        if (field.name === "Brand-Lookup")
            brand = field;
        return advertiser && brand;
    });
    return {
        id: order.id,
        reference: order.name,
        advertiser,
        brand: brand || {}
    };
};
exports.mapOrders = orders => orders.map(exports.mapSingleOrder);
//# sourceMappingURL=resolvers.utils.js.map