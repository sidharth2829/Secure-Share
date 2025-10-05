export default ({ config }) => ({
  ...config,
  name: 'SecureShare',
  slug: 'secureshare',
  scheme: 'secureshare',
  version: '0.1.0',
  orientation: 'portrait',
  ios: { supportsTablet: true },
  android: {},
  extra: {
    API_URL: process.env.API_URL || 'http://localhost:4000'
  }
})
