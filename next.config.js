/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNextIntl = require('next-intl/plugin')();

const nextConfig = {};

module.exports = withNextIntl(nextConfig);
