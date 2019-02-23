import React from 'react';
import logo from './logo.svg';
import { withStyles, WithStyles } from '@material-ui/core/styles';

const styledSplashScreen = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100vh',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    animation: 'SplashScreen-spin infinite 20s linear',
    height: '40vmin',
    pointerEvents: 'none',
  },

  '@keyframes SplashScreen-spin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
}))(SplashScreen);

function SplashScreen({ classes }: WithStyles) {
  return (
    <div className={classes.root}>
      <img src={logo} className={classes.logo} alt="logo" />
    </div>
  );
}

export { styledSplashScreen as SplashScreen };
