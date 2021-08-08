import React, { useEffect, useState } from "react";
import Header from "../src/resusable/header";
import Footer from "../src/resusable/footer";
import {
  Button,
  Grid,
  Typography,
  Paper,
  Divider,
  Container,
} from "@material-ui/core";
import ImageCarousel from "../src/components/singleproduct/ImageCarousel";
import Box from "@material-ui/core/Box";
import RemoveIcon from "@material-ui/icons/Remove";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
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
  const [value, setAgregate] = useState(3);
  const [count, setCounter] = useState(0);
  const [com, setCom] = useState("Commercial");

  const handleChange = (event) => {
    setCom(event.target.value);
  };
  const handleAdd = () => {
    setCounter(count + 1);
  };
  const handleSub = () => {
    setCounter(count - 1);
  };

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const CalAggregate = () => {
    return (
      sample.reviews.reduce((total, review) => total + review.rating, 0) /
      sample.reviews.length
    ).toFixed(2);
  };
  useEffect(() => {
    setAgregate(CalAggregate());
  }, []);
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
    tags: [
      "Bundle",
      "Whole Shop",
      "Gradient",
      "Whole Shop",
      "Gradient",
      "Whole Shop",
      "Gradient",
      ,
      "Whole Shop",
      "Gradient",
      ,
      "Whole Shop",
      "Gradient",
      ,
      "Whole Shop",
      "Gradient",
      "Whole Shop",
      "Gradient",
      "Whole Shop",
      "Gradient",
      ,
      "Whole Shop",
      "Gradient",
      ,
      "Whole Shop",
      "Gradient",
      ,
      "Whole Shop",
      "Gradient",
      ,
      "Whole Shop",
      "Gradient",
    ],
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

  return (
    <Grid container direction="column">
      <Grid item>
        <Header {...props} />
      </Grid>
      <Container>
        <Grid
          container
          item
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link color="inherit" href="/" onClick={handleClick}>
              {sample.productCategory}
            </Link>
            <Link
              color="inherit"
              href="/getting-started/installation/"
              onClick={handleClick}
            >
              PhotoShop
            </Link>
          </Breadcrumbs>
          <Typography>Starting At $67</Typography>
        </Grid>
        <Grid item container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={8}
            xl={8}
            style={{ paddingBottom: "40px" }}
          >
            <ImageCarousel images={images} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            xl={4}
            lg={4}
            style={{
              margin: "0px auto",
              paddingLeft: "10px",
            }}
          >
            <Paper>
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
                  style={{ fontSize: "16px" }}
                  name="read-only"
                  value={value}
                  readOnly
                />
                <Box style={{ color: "#32a889" }} pl={2}>
                  {Object.keys(sample.reviews).length} Review
                </Box>
              </Box>
              <Typography style={{ marginLeft: "15px" }} variant="body2">
                By
                <span
                  style={{
                    fontSize: "13px",
                    color: "#69bf93",
                    marginLeft: "5px",
                  }}
                >
                  Sami Karachi
                </span>
              </Typography>
              <Box px={2}>
                <Divider />
              </Box>
              <Box display="flex" justifyContent="space-between" px={2}>
                <Box>
                  <Typography variant="subtitle2">
                    License Type
                    <Link
                      href="/"
                      style={{
                        fontSize: "13px",
                        color: "#69bf93",
                        marginLeft: "5px",
                      }}
                    >
                      What are these?
                    </Link>
                  </Typography>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {count !== 0 ? (
                    <RemoveIcon
                      onClick={handleSub}
                      style={{ color: "#32a889", fontSize: "18px" }}
                    />
                  ) : null}
                  <Typography variant="body2">{count} seat</Typography>
                  <AddIcon
                    onClick={handleAdd}
                    style={{ color: "#32a889", fontSize: "18px" }}
                  />
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
                      <Typography variant="body2" style={{ fontWeight: "600" }}>
                        ${sample.extendedCommercialLicence}
                      </Typography>
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
        <Grid container direction="row">
          <Grid
            item
            xl={8}
            lg={8}
            md={8}
            sm={12}
            xs={12}
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

          <Grid spacing={4} item xl={4} lg={4} md={4} sm={12} xs={12}>
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
            sm={12}
            md={4}
            xs={12}
            style={{ marginTop: "50px" }}
          >
            <Typography variant="subtitle1" style={{ marginBottom: "10px" }}>
              Meet The Shop
            </Typography>
            <Paper>
              <Box justifyContent="center">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <img
                    src="https://1.bp.blogspot.com/-2rmt55p4Jgc/XmSUgHGmaaI/AAAAAAAAPRw/rF-e1cRuLEI7AnWw-gMsMsEc1irlJuhWwCLcBGAsYHQ/s1600/Lovely%2BDP%2BFor%2BWhatsapp%2BProfile%2B%2B%252823%2529.jpg"
                    alt="profile"
                    width="60px"
                    height="60px"
                  />
                </div>
                <h4 style={{ textAlign: "center" }}>Text hello</h4>
                <p style={{ textAlign: "center" }}>
                  Moment.js is a legacy project, now in maintenance mode. In
                  most cases, you should choose a different library.
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "50px",
                  }}
                >
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
                </div>
              </Box>
            </Paper>
          </Grid>
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            style={{ marginTop: "100px" }}
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

          <Grid
            container
            item
            style={{ display: "block", margin: "100px 0px" }}
          >
            <Typography style={{ fontWeight: "600" }}>
              Keep Exploring
            </Typography>
            <Box my={2}>
              {sample.tags.map((tag) => (
                <span>
                  <Chip
                    style={{
                      backgroundColor: "#cce0ff",
                      border: "none",
                      margin: "5px 2px",
                    }}
                    label={tag}
                    variant="outlined"
                  />
                </span>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
}
