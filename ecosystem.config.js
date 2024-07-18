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
      script: "PORT=3001 src/backend/react-scripts start",
      watch: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
