import React, { useState } from 'react';
import { Grid, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { gravatarPath } from '../gravatar';
import MessageField from './MessageField';

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px',
  },
});

const MessageInputField = ({ name }) => {
  const [text, setText] = useState('');
  const classes = useStyles();
  const avatarPth = gravatarPath(name);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarPth} />
        </Grid>
        <Grid item xs={10}>
          <MessageField name={name} setText={setText} text={text} />
        </Grid>
        <Grid item xs={1}>
          Button
        </Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;
