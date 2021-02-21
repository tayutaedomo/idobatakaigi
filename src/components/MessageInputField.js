import React from 'react';
import { Grid, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { gravatarPath } from '../gravatar';

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px',
  },
});

const MessageInputField = ({ name }) => {
  const classes = useStyles();
  const avatarPth = gravatarPath(name);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={1}>
          <Avatar src={avatarPth} />
        </Grid>
        <Grid xs={10}>Input</Grid>
        <Grid xs={1}>Button</Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;
