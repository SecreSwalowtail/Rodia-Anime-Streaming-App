import { StyleSheet } from "react-native";

const createStyles = (theme) => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    imageBackground: {
      flex: 1,
      backgroundColor: 'red',
    },
    startupView: {
      borderRadius: 12,
      position: 'absolute',
      top: '35%',
      width: '85%',
      left: '7.5%',
      padding: 16,
    },
    mainStartupText: {
      fontFamily: 'ralewaybold',
      fontSize: 28,
      letterSpacing: 1,
      lineHeight: 42,
      color: theme.colors.onSurface,
      textShadowColor: 'black',
      textShadowOffset: { width: 3, height: 3 },
      textShadowRadius: 2,
    },
    highlightedText: {
      fontFamily: 'ralewayblack',
      color: theme.colors.secondary,
      letterSpacing: 1,
      lineHeight: 42,
    },
    secondaryStartupText: {
      fontFamily: 'ralewaymedium',
      marginTop: 82,
      marginBottom: 16,
      alignSelf: 'center',
      color: theme.colors.onSurface,
      textShadowColor: 'black',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 4,
    },
    startupButton: {
      maxWidth: '40%',
      alignSelf: 'center',
    },
  });
};

export default createStyles;