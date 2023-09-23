import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
     ...DefaultTheme.colors,
  // Specify custom property in nested object
  colors: {
    "primary": "rgb(0, 109, 61)",
    "onPrimary": "rgb(255, 255, 255)",
    "primaryContainer": "rgb(95, 254, 164)",
    "onPrimaryContainer": "rgb(0, 33, 15)",
    "secondary": "rgb(0, 109, 60)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(90, 255, 162)",
    "onSecondaryContainer": "rgb(0, 33, 14)",
    "error": "rgb(192, 1, 0)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 212)",
    "onErrorContainer": "rgb(65, 0, 0)",
    "background": "rgb(54, 57, 62)",
    "onBackground": "rgb(220, 220, 220)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(46, 49, 46)",
    "inverseOnSurface": "rgb(240, 241, 236)",
    "inversePrimary": "rgb(58, 225, 138)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(238, 246, 239)",
      "level2": "rgb(231, 242, 233)",
      "level3": "rgb(223, 237, 227)",
      "level4": "rgb(221, 236, 226)",
      "level5": "rgb(216, 233, 222)"
    },
    "surfaceDisabled": "rgba(25, 28, 26, 0.12)",
    "onSurfaceDisabled": "rgba(25, 28, 26, 0.38)",
    "backdrop": "rgba(43, 50, 44, 0.4)",
    "backgroundContainer": "rgb(0, 101, 139)",
    "onBackgroundContainer": "rgb(255, 255, 255)",
    "backgroundContainerContainer": "rgb(196, 231, 255)",
    "onBackgroundContainerContainer": "rgb(0, 30, 45)"
  }
};

export { theme }