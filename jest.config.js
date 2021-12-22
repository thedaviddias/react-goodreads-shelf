// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
module.exports = {
  automock: false,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/*.d.ts", "!**/src/index.ts", "!**/src/types/**", "!**/node_modules/**"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
    "^.+\\.svg$": "jest-svg-transformer"
  },
  transformIgnorePatterns: ["/node_modules/"],
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "<rootDir>/src"]
};
