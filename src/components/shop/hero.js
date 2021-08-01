import React from 'react';
import {
  Button,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
export default function Hero(props) {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <img
          src="/dev/heroShop.png"
          style={{ width: '30em', height: '10em' }}
        />
      </Grid>
      <Grid item>
        <Typography
          variant="h1"
          align="center"
          style={{ fontSize: '4rem', fontWeight: 500 }}
        >
          Power to the creators!
        </Typography>
      </Grid>
      <Grid
        item
        style={{ width: matchesSM ? '80%' : '65%', marginBottom: '1em' }}
      >
        <Typography
          vairent="h2"
          align="center"
          style={{
            fontWeight: 400,
            lineHeight: 1.5,
            textShadow: ' 0 1px 0 rgb(0 0 0 / 25%)',
          }}
        >
          Welcome to the marketplace built to support amazing creative content
          producers like you.
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          style={{
            background: theme.palette.common.primary,
            padding: '7px 20px',
          }}
        >
          <Typography
            variant="h6"
            style={{ color: '#fff' }}
            onClick={props.openModal}
          >
            Open a Shop
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
}
