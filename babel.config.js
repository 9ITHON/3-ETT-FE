module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@": "./src",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        },
      ],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          safe: false,
          allowUndefined: true,
        },
      ],
      "nativewind/babel",
      "react-native-reanimated/plugin",
    ],
  };
};
