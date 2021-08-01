import React from 'react';
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  label: {
    ...theme.typography.label,
  },
}));
export default function RenderProducts(props) {
  const classes = useStyles();

  return (
    <Grid container justify="center" spacing={2}>
      {props.products.map((item, i) => (
        <Grid item md={3} key={i} sm={6} xs={10}>
          <Card elevation={0}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={item.title}
                image={item.image}
                title={item.title}
                style={{
                  height: 'calc(100% + 2px)',
                  width: 'calc(100% + 2px)',
                  margin: '-1px',
                  zIndex: 1,
                }}
              />

              <CardContent style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Grid container justify="space-between">
                  <Grid item>
                    <Typography
                      variant="h1"
                      component="h1"
                      style={{ fontSize: '1rem', fontFamily: 'Averta' }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      component="p"
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'Averta',
                        color: '#949291',
                        textOverflow: 'ellipsis',
                        lineHeight: 1.3,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      by{' '}
                      <a style={{ textDecoration: 'none', color: '#615f5c' }}>
                        {item.shopOwner}
                      </a>{' '}
                      in{' '}
                      <a style={{ textDecoration: 'none', color: '#615f5c' }}>
                        {item.category}
                      </a>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <div
                      style={{
                        fontWeight: 700,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '6px 5px',
                        minWidth: '40px',
                        minHeight: '25px',
                        borderRadius: '3px',
                        backgroundColor: '#dff8f6',
                      }}
                    >
                      <label className={classes.label}>{item.price}$</label>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
