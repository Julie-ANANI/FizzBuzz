module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "../src",
  globals: {
    "ts-jest": {
      tsconfig: {
        esModuleInterop: true
      }
    }
  },
};
