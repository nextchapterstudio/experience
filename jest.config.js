module.exports = {
    preset: 'ts-jest',
    verbose: true,
    collectCoverage: true,
    rootDir: './src',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
    moduleNameMapper: {

    },
    resetMocks: true,
  }
  