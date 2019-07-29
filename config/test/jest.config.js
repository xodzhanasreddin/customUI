module.exports = {
  rootDir: "../../",
  globals: {
    'ts-jest': {
      tsConfig: "<rootDir>/config/typescript/tsconfig.jest.json"
    }
  },
  setupFiles: ["<rootDir>/config/test/enzyme.config.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/src/mocks/styleMock.ts",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/src/mocks/assetsMock.ts"
  },
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ]
};