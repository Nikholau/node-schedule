const { pathsToModuleNameMapper } = require("ts-jest");

module.exports = {
  preset: "ts-jest",
  testTimeout: 10000,
  testEnvironment: "node",
  moduleNameMapper: pathsToModuleNameMapper(
    {
      "@resources/*": ["/resources/*"],
      "@infra/*": ["/infra/*"],
      "@lib/*": ["/lib/*"],
      "@configs/*": ["/configs/*"],
      "@test/*": ["/test/*"],
    },
    { prefix: "<rootDir>/src" }
  ),
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 90,
      statements: 80,
    },
  },
  bail: false,
  clearMocks: true,
  collectCoverageFrom: [
    "<rootDir>/src/resources/**/services/*.ts",
    "<rootDir>/src/resources/**/infra/database/repositories/*.ts",
    "<rootDir>/src/lib/adapters/implementations/*.ts",
    "<rootDir>/src/lib/utils/*.ts",
  ],
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  coverageReporters: ["text", "lcov"],
  setupFiles: ["./jest-setup-file.ts"],
  testMatch: ["**/*.spec.ts"],
  testPathIgnorePatterns: ["<rootDir>/.stryker-tmp/"],
  modulePathIgnorePatterns: ["<rootDir>/.stryker-tmp"],
};
