module.exports = {
  environment: {
    local: {
      launch_url: 'http://localhost:8080',
      headless: false,
    },
    staging: {
      launch_url: 'http://staging-environment.com',
      headless: false,
    },
  },
};
