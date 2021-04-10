const { injectBabelPlugin } = require('react-app-rewired');

const rootImportConfig = [
    "root-import",{
        rootPathPrifix:"~",
        rootPathSuffix:"src"
    }
];

module.exports = config => injectBabelPlugin(rootImportConfig, config);