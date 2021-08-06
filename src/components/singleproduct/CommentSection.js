import { Grid } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import React, { useState, useEffect } from "react";
import { SmartphoneOutlined } from "@material-ui/icons";

const CommentSection = ({ image, name, rating, message, date }) => {
  const [value, setValue] = useState(rating);
  useEffect(() => {
    setValue(rating);
  }, []);
  return (
    <Grid xl={12} lg={12} md={12} sm={12} xs={12}>
      <div>
        <div
          style={{
            display: "flex",
          }}
        >
          <img width="50px" height="50px" src={image} alt="avatar" />
          <Box component="fieldset" borderColor="transparent">
            <span>{name}</span>
            <span style={{ fontSize: "10px", marginLeft: "15px" }}>
              {date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-" +
                date.getDate()}
            </span>
            <p>
              <Rating
                style={{ fontSize: "13px" }}
                name="read-only"
                value={value}
                readOnly
              />
            </p>
          </Box>
        </div>
        <p>{message}</p>
      </div>
    </Grid>
  );
};

export default CommentSection;
