module.exports = {
  branches: { name: "main" },
  repositoryUrl: "https://github.com/amiros89/react-app",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
};
