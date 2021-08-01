import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';

import {
  Grid,
  Typography,
  IconButton,
  Divider,
  Button,
  TextField,
  Snackbar,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';
import { Search } from '@material-ui/icons';

import NoRecords from '../src/components/purchases/noRecords';
import Header from '../src/resusable/header';
import Footer from '../src/resusable/footer';
import Loading from '../src/resusable/spinner';
import CheckAuth from '../src/resusable/checkAuth';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: '2em',
    paddingRight: '2em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1em',
      paddingRight: '1em',
    },
  },
  alert: {
    padding: '4px 16px',
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

export default function Purchase(props) {
  const classes = useStyles();
  const [loading, setLoading] = useState({
    active: false,
    action: '',
  });
  const [showToast, setShowToast] = useState({
    active: false,
    message: '',
    severity: '',
  });
  const [error, setError] = useState({
    status: false,
    message: '',
  });
  const [searchPurchase, setSearchPurchase] = useState('');
  const [purchasings, setPurchasing] = useState([]);

  useEffect(() => {
    // setLoading({
    //   active: true,
    //   action: 'page',
    // });
    //do something
    // setLoading({
    //   active: false,
    //   action: '',
    // });
  }, []);

  const handleToastClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowToast({
      active: false,
      message: '',
      severity: '',
    });
  };

  if (loading.active && loading.action === 'page') {
    return <Loading />;
  }
  return (
    <CheckAuth {...props}>
      <Grid container direction="column">
        <Snackbar
          open={showToast.active}
          autoHideDuration={4000}
          onClose={handleToastClose}
        >
          <Alert onClose={handleToastClose} severity={showToast.active}>
            {showToast.message}
          </Alert>
        </Snackbar>
        <Head>
          <title>Purchase</title>
        </Head>
        <Grid item>
          <Header {...props} />
        </Grid>
        <Grid item style={{ marginTop: '2em' }} className={classes.root}>
          <Alert
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#DCEEFC',
            }}
            classes={{
              root: classes.alert,
            }}
            icon={
              <img
                src="/dev/annoucement.svg"
                style={{ width: '1em', height: '1em' }}
              />
            }
          >
            {' '}
            <Typography variant="subtitle2" style={{ fontWeight: 700 }}>
              {' '}
              <a href="#" style={{ color: '#303538' }}>
                Click here to connect Dropbox
              </a>{' '}
              and automatically sync purchases.
            </Typography>
          </Alert>
        </Grid>
        <Grid item style={{ marginTop: '2em' }} className={classes.root}>
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant="h1">Purchases</Typography>
            </Grid>
            <Grid item>
              <IconButton>
                <img
                  src="/dev/tile1.svg"
                  style={{
                    width: '1em',
                    height: '1em',
                    fill: '#000',
                  }}
                />
              </IconButton>
              <IconButton>
                <img
                  src="/dev/tile2.svg"
                  style={{ width: '1em', height: '1em' }}
                />
              </IconButton>
            </Grid>
          </Grid>
          <Divider />
        </Grid>
        <Grid item style={{ marginTop: '2em' }} className={classes.root}>
          <Grid container justify="space-between">
            <Grid item>
              <Button
                variant="outlined"
                style={{
                  backgroundColor: 'transparent',
                  padding: '10px 20px',
                }}
              >
                <label className={classes.label}> Filter Purchases</label>
              </Button>
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                fullWidth
                size="small"
                placeholder="Search"
                InputProps={{
                  classes: {
                    input: classes.input,
                  },
                  startAdornment: (
                    <Search style={{ fill: 'gray', fontSize: '1.1rem' }} />
                  ),
                }}
                value={searchPurchase}
                onChange={(e) => setSearchPurchase(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.root}>
          {purchasings.length > 0 ? null : <NoRecords />}
        </Grid>
        <Grid item style={{ marginTop: '2em' }}>
          <Footer />
        </Grid>
      </Grid>
    </CheckAuth>
  );
}
