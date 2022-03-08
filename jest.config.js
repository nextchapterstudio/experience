module.exports = {
  preset: 'ts-jest',
  verbose: true,
  collectCoverage: true,
  rootDir: './src',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  resetMocks: true,
}
