export default ({ config }) => ({
  ...config,
  name: 'SecureShare',
  slug: 'secureshare',
  scheme: 'secureshare',
  version: '0.1.0',
  orientation: 'portrait',
  icon: './assets/icon.png', // You'll need to add this
  splash: {
    image: './assets/splash.png', // You'll need to add this
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  ios: { 
    supportsTablet: true,
    bundleIdentifier: 'com.sidharth2829.secureshare'
  },
  android: {
    package: 'com.sidharth2829.secureshare',
    versionCode: 1,
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png', // You'll need to add this
      backgroundColor: '#FFFFFF'
    },
    permissions: [
      'USE_BIOMETRIC',
      'USE_FINGERPRINT'
    ]
  },
  extra: {
    API_URL: process.env.API_URL || 'https://your-production-server.com',
    eas: {
      projectId: '8d743fc4-555b-4cdc-b260-ae7e9c0ac46e'
    }
  }
})
