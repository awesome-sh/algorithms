module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: '<rootDir>/.coverage',
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
};
