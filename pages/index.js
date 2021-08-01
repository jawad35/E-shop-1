import React, { useState } from "react";
import Head from "next/head";

import {
  Grid,
  Typography,
  Hidden,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import TopBanner from "../src/components/Home/topBanner";
import StaffPicks from "../src/components/Home/staffPicks";
import PopularProducts from "../src/components/Home/popularProducts";
import TrendingCategories from "../src/components/Home/trendingCategories";
import Footer from "../src/resusable/footer";
import Header from "../src/resusable/header";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "2em",
    paddingRight: "2em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1em",
      paddingRight: "1em",
    },
  },
}));

export default function Home(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Head>
        <title>Home</title>
      </Head>
      <Grid item>
        <Header {...props} />
      </Grid>
      {/* For Home Banner */}
      <Grid
        item
        style={{ marginTop: matchesSM ? "1em" : "5em" }}
        className={classes.root}
      >
        <TopBanner />
      </Grid>
      <Grid item style={{ marginTop: "5em" }} className={classes.root}>
        <StaffPicks />
      </Grid>
      <Grid item style={{ marginTop: "5em" }} className={classes.root}>
        <PopularProducts />
      </Grid>
      <Grid item style={{ marginTop: "5em" }} className={classes.root}>
        <TrendingCategories />
      </Grid>
      <Grid item style={{ marginTop: "2em" }}>
        <Footer />
      </Grid>
    </Grid>
  );
}
