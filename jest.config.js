module.exports = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', 'lib'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ["node_modules", "lib"],
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
    '.(otf|ttf|woff)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};
