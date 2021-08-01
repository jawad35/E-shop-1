import React, { useState } from 'react';

import {
  Grid,
  Typography,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Header from '../src/resusable/header';
import Footer from '../src/resusable/footer';
import RenderProducts from '../src/resusable/renderProducts';
const categorySample = {
  name: 'Fonts',
  title: 'Stunning Display Fonts',
  details:
    'Browse over 15,000 display fonts to use for eye-catching signs, posters, and headers. These display font sets include serif, sans serif, and script fonts in vintage, retro, and modern styles to improve legibility in large formats.',
  created: new Date(),
  products: [
    {
      id: '1',
      title: 'Love and Beach Family',
      shopOwner: 'KetteCreate',
      category: 'Fonts',
      price: '18',
      image: '/products/11-.jpg',
    },
    {
      id: '2',
      title: 'Love and Beach Family',
      shopOwner: 'Bramcreative',
      category: 'Fonts',
      price: '10',
      image: '/products/01_preview1-.jpg',
    },
    {
      id: '3',
      title: 'Doodle Flowers Logo',
      shopOwner: 'KetteCreate',
      category: 'Templates',
      price: '10',
      image:
        '/products/animated-canva-backgrounds-instagram-stories-beige-organic-sand-tones-ana-yvy-11-.webp',
    },
    {
      id: '4',
      title: 'Love and Beach Family',
      shopOwner: 'KetteCreate',
      category: 'Fonts',
      price: '18',
      image: '/products/11-.jpg',
    },
  ],
};
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
    fontWeight: '300',
  },
  input: {
    fontFamily: 'Averta',
    fontWeight: 300,
    fontSize: '1.1rem',
    '&::placeholder': {
      fontFamily: 'Averta',
      fontWeight: '300',
      fontSize: '1.1rem',
    },
  },
}));

export default function Category(props) {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const [category, setCategory] = useState(categorySample);
  const [filterCategoryProducts, setFilterCaregoryProducts] =
    useState('popular');
  const filterCategoryProductsList = [
    {
      value: 'newest',
      label: 'Newest',
    },
    {
      value: 'popular',
      label: 'Popular',
    },
    {
      value: 'price>',
      label: 'Price: Low to High',
    },
    {
      value: 'price<',
      label: 'Price: High to Low',
    },
  ];
  const classes = useStyles();
  return (
    <Grid container direction="column">
      {/* Header display here */}
      <Grid item>
        <Header {...props} />
      </Grid>
      {/* category name cober */}
      <Grid
        item
        style={{
          backgroundImage: 'url(/dev/category.webp)',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          padding: '40px 0',
        }}
      >
        <div style={{ width: '60%' }}>
          <Typography
            variant="h1"
            style={{ marginBottom: '0.35em', textAlign: 'center' }}
          >
            {category.title}
          </Typography>
          <Typography className={classes.label} align="center">
            {category.details}
          </Typography>
        </div>
      </Grid>
      {/* category filter */}
      <Grid item style={{ marginTop: '2em' }} className={classes.root}>
        <Grid container justify="space-between">
          <Grid item>
            <Button
              variant="outlined"
              style={{
                backgroundColor: 'transparent',
                borderColor: theme.palette.common.primary,
                padding: '10px 20px',
              }}
            >
              <label
                className={classes.label}
                style={{ color: theme.palette.common.primary }}
              >
                {' '}
                Filter
              </label>
            </Button>
          </Grid>
          <Grid item>
            <TextField
              id="filterCategoryProducts"
              select
              size="small"
              style={{ width: '15em' }}
              value={filterCategoryProducts}
              onChange={(e) => setFilterCaregoryProducts(e.target.value)}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              InputProps={{
                classes: {
                  input: classes.input,
                },
              }}
            >
              {filterCategoryProductsList.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className={classes.label}
                >
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Grid>
      {/* products */}
      <Grid item style={{ marginTop: '2em' }} className={classes.root}>
        <RenderProducts products={category.products} />
      </Grid>
      {/* Open a shop card */}
      <Grid item>
        <Grid
          container
          style={{
            backgroundImage: 'url(/dev/categorybottom.webp)',

            padding: '80px 0',
            marginTop: '2em',
          }}
        >
          <Grid
            item
            md={6}
            xs={12}
            style={{ borderRight: matchesSM ? 0 : '1px solid #ccd4da' }}
          >
            <Grid container direction="column" alignItems="center">
              <Typography
                variant="subtitle2"
                style={{
                  marginBottom: '0.1em',
                  textAlign: 'center',
                  fontWeight: '700',
                }}
              >
                Share Creative Market & Earn Cash
              </Typography>
              <Typography className={classes.label} align="center">
                Start sharing to earn 15% on all new customer orders.
              </Typography>
              <Button
                variant="outlined"
                style={{
                  backgroundColor: '#4b5258',

                  marginTop: '1em',
                }}
              >
                <Typography variant="subtitle2" style={{ color: '#fff' }}>
                  {' '}
                  Become an Affiliate
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Grid container direction="column" alignItems="center">
              <Typography
                variant="subtitle2"
                style={{
                  marginBottom: '0.1em',
                  textAlign: 'center',
                  fontWeight: '700',
                }}
              >
                Sell Your Designs
              </Typography>
              <Typography className={classes.label} align="center">
                Open your shop and reach millions of buyers.
              </Typography>
              <Button
                variant="outlined"
                style={{
                  backgroundColor: '#4b5258',

                  marginTop: '1em',
                }}
              >
                <Typography variant="subtitle2" style={{ color: '#fff' }}>
                  {' '}
                  Open a Shop
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
}
