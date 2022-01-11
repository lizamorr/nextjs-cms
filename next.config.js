const withFonts = require("next-fonts");
const withImages = require("next-images");
const withBunyan = require("next-bunyan");

module.exports = withBunyan(
  withImages(
    withFonts({
      enableSvg: true,
      webpack(config, options) {
        return config;
      },
    })
  )
);
