export default ({ config }) => ({
  ...config,
  name: 'SecureShare',
  slug: 'secureshare',
  scheme: 'secureshare',
  version: '0.1.0',
  orientation: 'portrait',
  splash: {
    resizeMode: 'contain',
    backgroundColor: '#6750A4'
  },
  ios: { 
    supportsTablet: true,
    bundleIdentifier: 'com.sidharth2829.secureshare'
  },
  android: {
    package: 'com.sidharth2829.secureshare',
    versionCode: 1,
    splash: {
      backgroundColor: '#6750A4',
      resizeMode: 'contain'
    },
    permissions: [
      'USE_BIOMETRIC',
      'USE_FINGERPRINT',
      'INTERNET',
      'ACCESS_NETWORK_STATE'
    ],
    usesCleartextTraffic: true,
    networkSecurityConfig: {
      'domain-config': [
        {
          domain: 'secure-share-production-38a5.up.railway.app',
          'trust-anchors': ['system']
        }
      ]
    }
  },
  plugins: [
    'expo-font'
  ],
  extra: {
    API_URL: process.env.API_URL || 'https://secure-share-production-38a5.up.railway.app',
    eas: {
      projectId: '8d743fc4-555b-4cdc-b260-ae7e9c0ac46e'
    }
  }
})
