const path = require('path')
// craco.config.js
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@(.*)$": "<rootDir>/src$1",
      },
    },
  },
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};