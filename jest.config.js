const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: './',
});
const Config = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/\$1',
  },
};
module.exports = createJestConfig(Config);