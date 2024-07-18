module.exports = {
  apps: [
    {
      name: "frontend",
      script: "cd src/frontend && yarn start",
      watch: true,
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "backend",
      script: "cd src/backend && yarn start",
      watch: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
