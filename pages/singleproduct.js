import React, { useEffect, useState } from "react";
import Header from "../src/resusable/header";
import Footer from "../src/resusable/footer";
import { Button, Grid, Typography, Paper, Divider } from "@material-ui/core";
import ImageCarousel from "../src/components/singleproduct/ImageCarousel";
import Box from "@material-ui/core/Box";
import ShareIcon from "@material-ui/icons/Share";
import Rating from "@material-ui/lab/Rating";
import AddIcon from "@material-ui/icons/Add";
import CommentExampleMetadata from "../src/components/singleproduct/CommentSection";
// icons
import DateRangeIcon from "@material-ui/icons/DateRange";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";
import Chip from "@material-ui/core/Chip";
import Link from "next/link";
import html_Parser from "html-react-parser";
// Radio button
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import {
  AddBoxRounded,
  TextRotationAngledownOutlined,
} from "@material-ui/icons";

export default function shopsetup(props) {
  const [images, setImages] = useState("");
  const [value, setValue] = useState(3);
  const [count, setCounter] = useState(0);
  const [com, setCom] = useState("Commercial");

  const handleChange = (event) => {
    setCom(event.target.value);
  };
  const handleCounter = () => {
    setCounter(count + 1);
  };

  const sample = {
    title: "new bundle 38 in 1 -9000 graphics",
    productCategory: "Graphics",
    shop: {
      id: "1",
      shopName: "Graphics guro",
      shopDescription: "Some best selling things",
    },
    videoUrl: "", //if there is video url show video instead of images
    images: ["anyimage..png", "anyimage.png"],
    description: "",
    details: "<div >hi,<h1 >hello</h1><div>",
    file: "",
    fileSize: "591KB",
    personalLicence: "49",
    commercialLicence: "59",
    extendedCommercialLicence: "69",
    date: Date.now(),
    compatibleWith: [
      "Adobe PhotoShop",
      "Illustrator",
      "After effect",
      "Adobe XD",
    ],
    layered: false, //if true display it in product specs
    tileable: false, //if true display it in product specs
    vector: true, //if true display it in product specs
    tags: ["Bundle", "Whole Shop", "Gradient"],
    reviews: [
      {
        name: "Jem Thamos",
        profile:
          "https://1.bp.blogspot.com/-2rmt55p4Jgc/XmSUgHGmaaI/AAAAAAAAPRw/rF-e1cRuLEI7AnWw-gMsMsEc1irlJuhWwCLcBGAsYHQ/s1600/Lovely%2BDP%2BFor%2BWhatsapp%2BProfile%2B%2B%252823%2529.jpg", //if there is no photo use any sample user photo
        message: "Perfect",
        rating: 4,
        date: new Date(), //should be in format 1 min ago
      },
      {
        name: "Jem Thamos",
        profile:
          "https://1.bp.blogspot.com/-2rmt55p4Jgc/XmSUgHGmaaI/AAAAAAAAPRw/rF-e1cRuLEI7AnWw-gMsMsEc1irlJuhWwCLcBGAsYHQ/s1600/Lovely%2BDP%2BFor%2BWhatsapp%2BProfile%2B%2B%252823%2529.jpg", //if there is no photo use any sample user photo
        message: "Perfect",
        rating: 3,
        date: new Date(), //should be in format 1 min ago
      },
    ],
  };
  // const returnAggregate = () => {
  //   sample.reviews.reduce((review, total) => {
  //     return total.rating + review.rating;
  //   }) / sample.reviews.length;
  // };
  // useEffect(() => {
  //   console.log(returnAggregate());
  // });

  return (
    <Grid container direction="column">
      <Grid item>
        <Header {...props} />
      </Grid>
      <Box item mx={8}>
        <Grid item>
          <Typography align="right">Starting At $50</Typography>
        </Grid>
        <Box
          py={2}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography>Graphics PhotoShop</Typography>
          <Grid
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* <ShareIcon fontSize="small">Share</ShareIcon>
            <Typography style={{ marginLeft: "10px" }}>Share</Typography> */}
          </Grid>
        </Box>
        <Grid container direction="row">
          <Grid item xl={8} lg={8} sm={12} xs={12} md={12}>
            <ImageCarousel images={images} />
          </Grid>
          <Grid item xl={4} lg={4} sm={12} xs={4} md={12}>
            <Paper style={{ marginLeft: "20px" }}>
              <Box p={2}>
                <Typography style={{ fontWeight: "600" }}>
                  {sample.title}
                </Typography>
                {/* <Typography style={{ fontWeight: "500" }}>graphics</Typography> */}
              </Box>
              <Box
                component="fieldset"
                borderColor="transparent"
                display="flex"
                alignItems="center"
              >
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <Box style={{ color: "#32a889" }} pl={2}>
                  1 Review
                </Box>
              </Box>
              <Box display="flex" mx={2}>
                By
                <Box style={{ color: "#32a889" }} pl={2}>
                  Sami Karachi
                </Box>
              </Box>
              <Box px={2}>
                <Divider />
              </Box>
              <Box display="flex" justifyContent="space-between" px={2}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h6">License Type</Typography>
                  <Typography
                    variant="h6"
                    style={{ color: "#32a889", marginLeft: "5px" }}
                  >
                    what
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h6">{count} seat</Typography>
                  <div onClick={handleCounter} style={{ display: "flex" }}>
                    <AddIcon style={{ color: "#32a889" }} />
                  </div>
                </Box>
              </Box>
              <Box mx={2}>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={com}
                    onChange={handleChange}
                  >
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <FormControlLabel
                        value="Commercial"
                        control={<Radio style={{ color: "#32a889" }} />}
                        label={
                          <span
                            style={{
                              fontSize: "16px",
                              fontWeight: "600",
                              display: "flex",
                            }}
                          >
                            Commercial
                          </span>
                        }
                      />
                      <Box style={{ fontWeight: "600" }}>
                        ${sample.commercialLicence}
                      </Box>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      alignContent="center"
                    >
                      <FormControlLabel
                        value="Extended Commercial"
                        control={<Radio style={{ color: "#32a889" }} />}
                        label={
                          <span
                            style={{
                              fontSize: "16px",
                              fontWeight: "600",
                              display: "flex",
                            }}
                          >
                            Extended Commercial
                          </span>
                        }
                      />
                      <Box style={{ fontWeight: "600" }}>
                        ${sample.extendedCommercialLicence}
                      </Box>
                    </Box>
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box px={2}>
                <Divider />
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                m={2}
              >
                <Box display="flex" justifyContent="center">
                  <Box>Personal Project?</Box>
                  <Box variant="subtitle1">
                    <span style={{ color: "#32a889" }}>
                      <Link href="/">Get a Personal License</Link>
                    </span>
                  </Box>
                </Box>
                <Box>${sample.personalLicence}</Box>
              </Box>
              <Box m={2}>
                <Box my={1}>
                  <Button
                    style={{ backgroundColor: "#32a889", color: "white" }}
                    fullWidth={true}
                    variant="contained"
                  >
                    Add to Cart
                  </Button>
                </Box>
                <Box my={3}>
                  <Button
                    fullWidth={true}
                    style={{
                      border: "2px solid #32a889",
                      backgroundColor: "white",
                      marginBottom: "20px",
                      color: "#32a889",
                    }}
                    variant="contained"
                  >
                    Buy Now
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box m={8}>
        <Grid container direction="row">
          <Grid
            item
            xl={8}
            lg={8}
            md={12}
            sm={4}
            xs={4}
            justifyContent="center"
          >
            <Box>
              <Typography style={{ fontWeight: "600" }}>
                About the Product
              </Typography>
              <p>
                All my new collections related to other the bundle{" "}
                <Link href="/">this is a link</Link>
              </p>
              <Box mr={2}>
                <Divider />
              </Box>

              <p>{html_Parser(sample.details)}</p>
            </Box>
          </Grid>

          <Grid spacing={4} item xl={4} lg={4} md={12} sm={12} xs={12}>
            <Box mx={2}>
              <Box mb={2}>
                <Typography style={{ fontWeight: "600" }}>
                  Product Specs
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <DateRangeIcon />
                <Box ml={2} width="70%">
                  {sample.date}
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <SwapHorizIcon />
                <Box ml={2} width="70%">
                  text here
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <InsertDriveFileIcon />
                <Box ml={2} width="70%">
                  File Size {sample.fileSize}
                </Box>
              </Box>
              {sample.vector ? (
                <Box display="flex" alignItems="center">
                  <DeviceHubIcon />
                  <Box ml={2} width="70%">
                    Vector
                  </Box>
                </Box>
              ) : null}
            </Box>
          </Grid>
          <Grid
            container
            item
            lg={4}
            xl={4}
            sm={4}
            md={4}
            xs={4}
            justifyContent="center"
          >
            <Typography>Meet The Shop</Typography>
            <Paper>
              <Box m={6}>
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src="https://1.bp.blogspot.com/-2rmt55p4Jgc/XmSUgHGmaaI/AAAAAAAAPRw/rF-e1cRuLEI7AnWw-gMsMsEc1irlJuhWwCLcBGAsYHQ/s1600/Lovely%2BDP%2BFor%2BWhatsapp%2BProfile%2B%2B%252823%2529.jpg"
                    alt="profile"
                    width="60px"
                    height="60px"
                    style={{ marginTop: "30px" }}
                  />
                </div>
                <h4 style={{ textAlign: "center" }}>Text hello</h4>
                <p>
                  Moment.js is a legacy project, now in maintenance mode. In
                  most cases, you should choose a different library.
                </p>
                <Box display="flex" justifyContent="center" p={2}>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#32a889",
                      fontSize: "15px",
                      marginRight: "5px",
                      color: "white",
                    }}
                  >
                    + Follow
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      border: "1px solid #32a889",
                      fontSize: "15px",
                      backgroundColor: "white",
                      color: "#32a889",
                    }}
                  >
                    Message
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid
            container
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            style={{ marginTop: "20px" }}
          >
            {sample.reviews.map((review) => (
              <CommentExampleMetadata
                image={review.profile}
                name={review.name}
                rating={review.rating}
                message={review.message}
                date={review.date}
              />
            ))}
          </Grid>

          <Grid container item style={{ display: "block" }}>
            <Typography style={{ fontWeight: "600" }}>
              Keep Exploring
            </Typography>
            <Box>
              {sample.tags.map((tag) => (
                <span style={{ margin: "3px" }}>
                  <Chip
                    style={{ backgroundColor: "#cce0ff", border: "none" }}
                    label={tag}
                    variant="outlined"
                  />
                </span>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
}
