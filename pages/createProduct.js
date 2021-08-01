import React, { useState } from 'react';

import { Grid, useMediaQuery, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Header from '../src/resusable/header';
import Footer from '../src/resusable/footer';
const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: '2em',
    paddingRight: '2em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1em',
      paddingRight: '1em',
    },
  },

  label: {
    ...theme.typography.label,
  },
  input: {
    '&::placeholder': {
      fontFamily: 'Averta',
      fontWeight: 400,
      fontSize: '1.1rem',
    },
  },
}));

export default function CreateShop(props) {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Header {...props} />
      </Grid>
      <Grid
        item
        style={{ marginTop: matchesSM ? '2em' : '5em' }}
        className={classes.root}
      >
        Work Here
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
}
