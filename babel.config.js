module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@screens': './src/screens/index.tsx',
          '@routes': './src/navigation/routes/index.ts',
        },
      },
    ],
  ],
};
