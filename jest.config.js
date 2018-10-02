let baseConfig = {
  testEnvironment: 'node',
  bail: false,
  verbose: true,
  testMatch: [
    '**/__tests__/**/*.test.js'
  ],
  moduleFileExtensions: [
    'js',
    'json'
  ],
  collectCoverage: false,
  coverageDirectory: '<rootDir>/.coverage',
  collectCoverageFrom: [
    'packages/**/lib/**/*.js',
    '!**/node_modules/**'
  ],
  watchman: false,
  setupTestFrameworkScriptFile: 'jest-extended'
}

if (process.env.APPTEST_ENV === "ci") {
  module.exports = { ...baseConfig, bail: true }
}
else if (process.env.APPTEST_ENV === "test") {
  module.exports = baseConfig
}
