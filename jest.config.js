module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['index.js'],
  coverageDirectory: './coverage',
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/__mocks__/svg.js',
    "\\.(css|less|sass|scss)$": "<rootDir>/src/__mocks__/fileMock.js",
  },
  "testEnvironment": "jsdom"
};
