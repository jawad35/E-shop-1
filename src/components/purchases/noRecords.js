import React from 'react';
import { Grid, Typography } from '@material-ui/core';
export default function noRecords() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={{ marginTop: '5em' }}
    >
      <Grid item>
        <Typography
          variant="subtitle2"
          component="h1"
          style={{
            textAlign: 'center',
            fontWeight: 700,
          }}
        >
          NO PURCHASE FOUND
        </Typography>
        <Grid item style={{ marginTop: '2em' }}>
          <Typography
            variant="h1"
            style={{
              textAlign: 'center',
            }}
          >
            More Products You'll Love
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="subtitle1"
            style={{
              textAlign: 'center',
            }}
          >
            Didn't find what you are looking for?
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              textAlign: 'center',
            }}
          >
            Check out these popular products.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
