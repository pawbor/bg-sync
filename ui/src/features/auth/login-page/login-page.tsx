import React from 'react';
import firebase from 'firebase/app';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles, WithStyles } from '@material-ui/core/styles';

const styledLoginPage = withStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
  },

  paper: {
    display: 'flex',
    flexFlow: 'column',
    padding: theme.spacing.unit * 3,
  },

  buttonsOutlet: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-end',
  },

  spaceTop: {
    marginTop: theme.spacing.unit * 2,
  },

  spaceLeft: {
    marginLeft: theme.spacing.unit * 2,
  },
}))(LoginPage);

function LoginPage({ classes }: WithStyles) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TextField
          label="Login"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          className={classes.spaceTop}
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className={[classes.buttonsOutlet, classes.spaceTop].join(' ')}>
          <Button
            variant="text"
            color="primary"
            onClick={() => {
              signIn(email, password);
            }}
          >
            Sign In
          </Button>

          <Button
            className={classes.spaceLeft}
            variant="text"
            color="secondary"
            onClick={() => {
              register(email, password);
            }}
          >
            Register
          </Button>
        </div>
      </Paper>
    </div>
  );
}

function signIn(email: string, password: string) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((e) => {
      console.log(e);
    });
}

function register(email: string, password: string) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((e) => {
      console.log(e);
    });
}

export { styledLoginPage as LoginPage };
