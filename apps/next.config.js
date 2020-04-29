const assetPrefix = process.env.BUILDING_FOR_NOW ? "/apps" : "";

module.exports = {
  assetPrefix,
  env: {
    ASSET_PREFIX: assetPrefix,
  },
};
