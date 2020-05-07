module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@app/config': './app/config',
          '@app/navigation': './app/navigation',
          '@app/screens': './app/screens',
          '@app/theme': './app/theme',
          '@app/utils': './app/utils',
          '@app/assets': './assets',
        },
      },
    ],
  ],
};
