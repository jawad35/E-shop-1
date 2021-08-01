import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import RenderProducts from '../../resusable/renderProducts';
const sampleData = [
  {
    id: '1',
    title: 'Love and Beach Family',
    shopOwner: 'KetteCreate',
    category: 'Fonts',
    price: '18$',
    image: '/products/11-.jpg',
  },
  {
    id: '2',
    title: 'Love and Beach Family',
    shopOwner: 'Bramcreative',
    category: 'Fonts',
    price: '10$',
    image: '/products/01_preview1-.jpg',
  },
  {
    id: '3',
    title: 'Doodle Flowers Logo',
    shopOwner: 'KetteCreate',
    category: 'Templates',
    price: '10$',
    image:
      '/products/animated-canva-backgrounds-instagram-stories-beige-organic-sand-tones-ana-yvy-11-.webp',
  },
  {
    id: '4',
    title: 'Love and Beach Family',
    shopOwner: 'KetteCreate',
    category: 'Fonts',
    price: '18$',
    image: '/products/11-.jpg',
  },
];

export default function PopularProducts() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="h2">Popular Graphics</Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="caption"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              component="a"
              href="#"
            >
              {' '}
              Explore Graphics <ChevronRightIcon />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <RenderProducts products={sampleData} />
      </Grid>
    </Grid>
  );
}
