const tsConfig = require('./packages/lambda-b/tsconfig.json');
const tsConfigPaths = require('tsconfig-paths');

const baseUrl = './packages/lambda-b/'; // Either absolute or relative path. If relative it's resolved to current working directory.
const cleanup = tsConfigPaths.register({
  baseUrl,
  paths: tsConfig.compilerOptions.paths,
});

// When path registration is no longer needed
cleanup();
