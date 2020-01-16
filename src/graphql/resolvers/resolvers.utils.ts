export const mapSingleVersion = version => {
  let clock;
  let title;
  let duration;

  version.fields.some(field => {
    if (field.name === "Name") clock = { ...field, value: version.name };
    if (field.name === "VersionTitle") title = field;
    if (field.name === "VersionDuration") duration = field;
    return clock && title && duration;
  });

  return {
    id: version.id,
    clock,
    title,
    duration
  };
};

export const mapVersions = versions => versions.map(mapSingleVersion);

export const mapSingleOrder = order => {
  let advertiser;
  let brand;

  order.fields.some(field => {
    if (field.name === "Client-Lookup") advertiser = field;
    if (field.name === "Brand-Lookup") brand = field;
    return advertiser && brand;
  });

  return {
    id: order.id,
    reference: order.name,
    advertiser,
    brand: brand || {}
  };
};

export const mapOrders = orders => orders.map(mapSingleOrder);
