module.exports = {
  apps: [
    {
      name: 'test-nuxt', // Name of your application
      exec_mode: 'fork', // Or 'cluster' for multiple instances (with caution for Nuxt)
      instances: '1', // Number of instances, typically 1 for Nuxt's server
      script: './.output/server/index.mjs', // Path to the Nuxt 3 server entry point
      env: {
        NODE_ENV: 'production',
        // Add any other environment variables your Nuxt app needs
      },
    },
  ],
};