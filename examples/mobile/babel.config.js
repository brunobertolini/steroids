module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        cwd: "babelrc",
        root: ["./"],
        extensions: [".ios.js", ".android.js", ".js", ".json"],
        alias: {
          "@steroids/universal": "@steroids/native"
        }
      }
    ]
  ]
};
