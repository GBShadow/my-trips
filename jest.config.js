module.exports = {
  testEnvironment: 'jsdom',
  testPastIgnorePatterns: ['/node_modules', './next', './.vscode'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
