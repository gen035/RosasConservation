
/**
 * @type {import('next').NextConfig}
 */
const nextTranslate = require('next-translate');
const nextConfig = {
  /* config options here */
  ... nextTranslate()
}
 
module.exports = nextConfig