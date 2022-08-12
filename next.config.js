const nextTranslate = require('next-translate');
const withSvgr = require("next-svgr");
module.exports = {
  ... nextTranslate(),
  ...withSvgr(),
  trailingSlash: false,
}