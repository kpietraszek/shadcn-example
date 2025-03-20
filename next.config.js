/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    // INFO: temporary solution, will be swapped to remotePatterns
    domains: [
      'ucarecdn.com',
      '127.0.0.1',
      'localhost',
      'https://cms.cf-systems.org',
      'https://staging.cms.webdev.cf-systems.org',
      'https://production.cms.webdev.cf-systems.org',
    ],
    // TODO: make remotePatterns work
    // remotePatterns: [
    //   {
    //     protocol: 'http',
    //     hostname: "127.0.0.1",
    //     port: "1337",
    //     pathname: '/uploads/*',
    //   },
    // ],
  },
  async rewrites() {
    return [
      {
        source: '/terms-and-conditions',
        destination: '/policy/terms-and-conditions',
      },
      { source: '/privacy', destination: '/policy/privacy' },
      {
        source: '/responsible-disclosure-policy',
        destination: '/policy/responsible-disclosure-policy',
      },
      { source: '/trademark-policy', destination: '/policy/trademark-policy' },
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
