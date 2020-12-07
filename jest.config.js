module.exports = {
  clearMocks: true,
  coverageDirectory: '.coverage',
  moduleNameMapper: {
    '^@/components(.*)$': '<rootDir>/components$1',
    '^@/features(.*)$': '<rootDir>/features$1',
    '^@/utils(.*)$': '<rootDir>/utils$1'
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js']
};
