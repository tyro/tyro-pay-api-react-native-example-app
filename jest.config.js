module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  coverageReporters: ['html', 'text'],
  collectCoverageFrom: ['src/**/*.{js,ts,tsx}'],
  coveragePathIgnorePatterns: ['@types/', './src/index.ts', './src/db-client.ts', './src/models/*', './src/tests/*'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  setupFiles: [],
};
