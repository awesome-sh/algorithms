module.exports = {
  verbose: true,
  collectCoverage: false,
  coverageDirectory: '<rootDir>/.coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
}
