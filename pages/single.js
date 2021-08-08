import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  Typography,
  Paper,
  Divider,
  Box,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Container from "@material-ui/core/Container";
import CommentExampleMetadata from "../src/components/singleproduct/CommentSection";
import ImageCarousel from "../src/components/singleproduct/ImageCarousel";
import DateRangeIcon from "@material-ui/icons/DateRange";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";
import Chip from "@material-ui/core/Chip";
import html_Parser from "html-react-parser";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
// Radio button
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Header from "../src/resusable/header";
import Footer from "../src/resusable/footer";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid(props) {
  const [images, setImages] = useState("");
  const [value, setValue] = useState(3);
  const [count, setCounter] = useState(1);
  const [com, setCom] = useState("Commercial");

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const handleChange = (event) => {
    setCom(event.target.value);
  };
  const handleAdd = () => {
    setCounter(count + 1);
  };
  const handleSub = () => {
    setCounter(count - 1);
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
        message:
          "You can see how they are implementing desktop and mobile view.You can see how they are implementing desktop and mobile view",
        rating: 3,
        date: new Date(), //should be in format 1 min ago
      },
    ],
  };
  const classes = useStyles();

  return (
    <Grid direction="column" spacing={3}>
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
              Graphics
            </Link>
            <Link
              color="inherit"
              href="/getting-started/installation/"
              onClick={handleClick}
            >
              PhotoShop
            </Link>
          </Breadcrumbs>
          <Typography>$67</Typography>
        </Grid>
        <Grid item container>
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <ImageCarousel />
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
            }}
          >
            <Paper
              style={{
                padding: "20px",
                marginLeft: "0px",
              }}
            >
              <Typography variant="h2" style={{ fontWeight: "600" }}>
                {sample.title}
              </Typography>
              <Box borderColor="transparent" style={{ display: "flex" }}>
                <Rating
                  style={{ fontSize: "16px" }}
                  name="read-only"
                  value={value}
                  readOnly
                />
                <div style={{ color: "#32a889", marginLeft: "5px" }}>
                  {Object.keys(sample.reviews).length} Review
                </div>
              </Box>
              <Typography variant="body2">
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
              <Box>
                <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
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
                <Box style={{ display: "flex", alignItems: "center" }}>
                  {count !== 0 ? (
                    <RemoveIcon
                      onClick={handleSub}
                      style={{ color: "#32a889" }}
                    />
                  ) : null}
                  <Typography variant="h6">{count} seat</Typography>
                  <AddIcon onClick={handleAdd} style={{ color: "#32a889" }} />
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
              <div style={{ margin: "10px 0px" }}>
                <Divider />
              </div>
              <Grid
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Grid style={{ display: "flex", justifyContent: "center" }}>
                  <Typography variant="body2">Personal Project?</Typography>
                  <Typography variant="body2">
                    <Link href="/" style={{ color: "#32a889" }}>
                      Get a Personal License
                    </Link>
                  </Typography>
                </Grid>
                <Typography variant="body2">
                  ${sample.personalLicence}
                </Typography>
              </Grid>
              <Box m={2}>
                <Box my={1}>
                  <Button
                    style={{
                      backgroundColor: "#32a889",
                      color: "white",
                      margin: "10px 0px",
                    }}
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

        <Grid item direction="row" container style={{ marginTop: "100px" }}>
          <Grid
            item
            xl={8}
            lg={8}
            md={8}
            sm={8}
            xs={12}
            justifyContent="center"
          >
            <div>
              <Typography variant="h4" style={{ fontWeight: "700" }}>
                About the Product
              </Typography>
              <p>
                All my new collections related to other the bundle{" "}
                <Link href="/">this is a link</Link>
              </p>
              <div style={{ width: "80%" }}>
                <Divider />
              </div>

              <p>{html_Parser(sample.details)}</p>
            </div>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
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
                Moment.js is a legacy project, now in maintenance mode. In most
                cases, you should choose a different library.
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
          container
          item
          xl={6}
          lg={6}
          md={6}
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
        <Grid container item style={{ display: "block", margin: "100px 0px" }}>
          <Typography style={{ fontWeight: "600" }}>Keep Exploring</Typography>
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
      </Container>

      {/* <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>xs=6 sm=3</Paper>
      </Grid> */}
      <Grid>
        <Footer />
      </Grid>
    </Grid>
  );
}
