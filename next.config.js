// origin-when-cross-origin
// style-src 'self' example.com;
// child-src example.com;
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  font-src 'self';  
`

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  { key: 'Feature-Policy', value: 'geolocation ' + '\'none\'' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' }
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // security
  async headers() {
    return [{
      source: '/:path*',
      headers: securityHeaders,
    }]
  },
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
}

module.exports = nextConfig
