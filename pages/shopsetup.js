import React, { useState } from "react";
import Header from "../src/resusable/header";
import Footer from "../src/resusable/footer";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, useTheme } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import Dialog from "../src/components/shopsetup/Dialog";
import ShopNameDialog from "../src/components/shopsetup/ShopNameDialog";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function shopsetup(props) {
  const [Bunner, setBunner] = useState("");
  const [Profile, setProfile] = useState(
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QDw8NEBAODw8OEA0PDw0QFRAQDQ4NFREWFhUSFxUYHSggGBolGxcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0gHyUtKy0tLS0tLS0rKy0rLS0tLS0tLS0tLS0tLS0tLS0rLS0tLTctLS0tKy0tLS03LS0tLf/AABEIAOYA2wMBEQACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQMEBQIGB//EADQQAAIBAgQFAQYGAQUAAAAAAAABAgMRBBIhMQUTQVFhcSIyUoGRsRVCYqHB0fEGIzNDU//EABsBAQACAwEBAAAAAAAAAAAAAAACBAEDBQYH/8QAKhEBAAICAQQCAQMEAwAAAAAAAAECAwQRBRIhMRNBUSIjYRQygZFicaH/2gAMAwEAAhEDEQA/AP23moBzUA5qAc1AOagHNQDmoBzUA5qAc1AOagHNQDmoBzUA5qAc1AOagHNQDmoBzUA5qAc1AOagHNQDmoBzUA5qAc1Aa4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAACAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAFAAAAACgAAACAAAACAAAAAAAAAAAAAAAAKAAAUAAAAAAAAAAgAAAAgAAAAAAAAAAAAUAAAoACgAAHipVUXFPebsvpc0ZM9aWis/aVazMTL2b0QBYCAAAEAAQAAAAAAAAAAAUAAAoACgDFvQ0cFi7zlSl70W8r7q+3qcXS6hzlthv7+lrLh/TF4b521Vx+LV7VYJf9dpfP8AweS6vuTXarEfTo62PnHLrxd0n31PU4r99Ilz7RxPDFiq6pxcn8l1bK29uV1sc2lPFjm88PGAnKVNSlvJyf7kOm5LZcPfb7ZzVituIbB0GpAAACAAIAAAAAAAAAAUABQAB7d/BC9u2JlmHihXjPZ69Y9UVsG7izeInz+ErY5qylxB87xJONebWjumvofP+qTOHcm1XY1+LYuJdjh+LVSP6l7y/k9T03qNc+LmfcOfnwzSzhYqrnnOXdu3p0PG71r5c9rcfbp4YitIh2+HV1yVJv3Lpv0PYdN2ojUi1/pzc2P9ziHKxuK5kr9FsvB5PqO9bay/x9L+HF2VdzCRtTgv0o9x0+nbr1j+HLyzzeXuckldtJLq9izky0xxzaeEK1mZ4hjw9dTu43yp2zd34NWvs1z8zX0lek08SyFlAAgAABAAAAAAAAKgAACgUAPY43F6Tg+ZG6zPdaNSPF9Y1b62X5sfiJdLVvF47bLhOMNaVNV8a3+aN+h1y3MUyxyZtP7q9cSowz8yc1GLjGyXvyfoZ6nrYb5flvbiPwjgveK9tYa9PGwh/wAUFfbNLWVjn16jj1/GGv8AtunXtf8AvlPxCp0yLwoqxpnqt+f7Y/0z/TV/Mr+JNrLKEJRe6tlNter247LVjhidX7ifLGqVKo/Yk6cvhnrF+jJUw62xMTSe2f5Zm2THH6o5h1MbxGNK0LXkkvEUd3b6nXUxxSI5nhTxa85Z5caeIqV5qN73ei/KvNjzsZs+9mitpdD46YacvpKNJQiorZKx7nWwRhxxSHHvebW5ezeggACAAIAAAAAAABQAFAAeKteMbZna/V3sVs+3jw/3p1pNvSwrwe0o/VEKb+C3qxOO0fSYilGpBwutdn2fRkNumLZxTTmEsc2pblwZxWHWaaTqu+SHSP62eWjBXQibX82+nSibZ54j19ufKrKbcpNtvqzlZ898tubSu1x1pHECZXZmGeGqIT4a58SNDk5YG2bKzx6bOImG5h8QqiVGq9PyVOsJefB2NfYrnr8Wb/EqmTFOOe+jpcG4e6Wac7KTbjHtl7/M7fStCNfm9/f0qbWx8nEVdGdeC3lFfNHZttYo92U4x2n6YfxCjdRU1JvZRu3+xrjfw2t21nmU5wXiOZhslxpQCAAIAAAAAAABQAFAoEnBSVmrp9DTmwUzV7bQlW01nmHIxmAcPajrH94ni+p9IyYJ78fmHQw7EW8S18LC8rttRgs8rdl0K3TO+cndM+I8tmaY44j7czFV5VJynLeT+i6I07Wec2SbSvYccUpEQ8QepWlsllSIIMtN6EJa7e1ZiCGE2NiOJmJmJ5G5Vm6tBSu89B5ZavWD2Z3bZb7GrzE+aqdaRjzcfUtTCYSdWWWKv3k9o+rKWrq5dm/bVZy5aYo8vpsBw+FJaaye83u/6PZ6XT6a9fzLi5ti2Sf4bZ0VdAAEAMCAAAAABQAACgUCoxMxAx1cRCPvSS8dSnn3dekcXtDZXHeZ8Q5uLlT5c5U9M8lF9vkee3b4I17XwfcreKtu+It9OFVp2fhnmYl1q25h7pUOrI2uja/1DLyUQ7kO9eXYc8sd3LzIzCTCTbBiBtcHs6jg/dqQlF/c7XSLROSaW9Srbkfpi0fTs4HGYZJQhJRtpZ6O/k9Lq7WpSOyk8OblxZp/VZvJp6rXyjp1vW3qVaYmAmwgBgQAwIAAAAAFAAAKAZG0TMcQy0sTha0tql12937Hnt3p+5kn9N+VnHlxx7hzK2FqR3i/XdHms/T9qk/qiZXqZcc+mZU26Eentv7FjLE10fMfbV3fuscaEeuvk4U3lum8vE4W9BE8pRbl5MpAYYasbE6y2VlhSJ8tnL1kMcscs/C6f+9G3S/2Z1el8zm/xKvtT+21pYaUpPLGUrt7LyRtr5smWeyJba5qVrHMt/B8LxKs1LlfO7+iOvq9O3Innu4Vcuzhnxxy7mHpzirTnzH3so/Y9Lr470rxe3Lm3tWZ8RwyFhrGBADAgAAAAAAKAAoFAqA8zqKKu3ZFbZz4sNJtkSrWbT4aFSuqkZpK2W0l3a6nlc+3TdxXpSOOPK3FJxzEy1EeSmPK0jAxTh2+hKJTizGySYzIxyiSiU4l5Mwy2eGvLnrdIRdr7OT2R2+lftRbNPqFbZ/VxSHX4fjoVFZWjJbw/lHpun9Qw544jxKhnwXx/wDTcOurIBADAgBgQAAAAAAFAAUCoDDicSoLZtvaK1bKW5txgr4jmWzHj7nLca1WWZxl4WyR47bx7u5bmazwvxOPHHENnDYWpGSlbw/KNmj0vaxZO6Y8fbVky1tHDHiqOSXh7P8Ag5vVNKcGWZj1KeK/dDAzlt8PLMsvEkjMMwxydicQnHl4c13M8Slw83T0WreiS6s3YsVr2isEz2xzLo1sBU5UacEnrmqO+8+3yPT5enZf6euPH/lRrnr8k2s0nga8WnkkmtU10OXHTtvFburC18+K0cTLqYDHyfsVYyjLZTaaT9T0mhv5J4pmjiVDPhr7pLpHdU0AAQAwIAAAAAACgAKAApiaxPs5UdsQMOLrZIt9XojldX3Y18M8e5bcVO6znUqytknrF9esX3PHau38vOLN5iVy+PjzV4xGHlDXeL2ktjXudMyYJ5iOYTx5Ys13I5vbPpuiGpWxXSP1Ntcf5b64ufbWUnubeG7thmpQlN5Yptvojbh1smW3FYar3rT23KlsMn+au1v+Wmn92decddGvrm8/+KtZnYt/xev9PY1qTpSek22m/j6/Ut9G3575x3n2xva8cd1X0R6viHIQx21/DPMjJMIBAAEAAAAAAAAoAABQKAuRtMRHMsxHLi1J1a9R5EuWnZSfu27+Tx+5r5uo5/Efph0afHip59ulhsHGOr9qXfp8kdfR6Jh145nzKpkzzb05/FOIunVaXRJZd0zkdU3MmPZ7a+vwt62t8lOWLCKGKunTlDKruUH7N+1u5PV18O5EzNOOPwlk78Ex55aMoYX/ANaq8OGpUtr6cTMd0rEZM8x6ht0cFQdKVaKq1VF2s7Qvbcu4tDX+KctYmzRfPl7+yeIadXiUrZYRjSj2ju/VlC3UJi0Vxx2wsRqxxzaeZfSVMPCtTjnSd4xd+q07nrP6XHs4Ym8fTkxktjvPa4mL4NUpvPTedJ3Xxx/s8/s9Jy69vkxeYh0ce7XJHbfw7eAxPMpqXXaS6qSPR6Of5ccTPv7c3Nj7beGwXWlAAEAAQAAAAAAAABQAFAAGk009noyNqxaOJInhYq2i0XZbCtIr4iGZnn2plh8rjKUq2JnGO7lb0S0bPE7OC2zuTWrt4ckYsETL6TB4eNKChHpu+77nrdbWrhxxSHJy5Zvbul8nxejkrVI9G8y9HqeK6lh7NiY/Lu6uTuxcvqOF0clGnB75bv1erPYaGCKa8VcTYyTbJMuDx3h3LlzIL2JPVfDL+jzvVun/ABW+Snp1NLZ747be3d4VUzUKT/Sl9ND0nT7d2Crl7McZJbRdaHlQSbaSTe77kK461nmIZm0/ak2ACAAAEAAAAAAAAAUAAuY5DMORMxjkM47gzkZnwzDUwOHVPNLec23KXz0RS1dWuKZt9y3Zcs34j8NrmF3vaHI4xhs9Wi/ieWXotTg9R1vkz0tDo6ubtx2h11M7lZiIiHPn281bSi4yV4yVmvBHLWuWk1szW01nmGHAUuVDl3uk5Wfhs1auL4adqea/fbls5y33NRmHcLmM8hccgZACAAAAAAAAAAAAAsY4EsY4EsY4EymOBMpjhkymO0TKY7ZEdP8AbbwRnHEzyzEzC5CXawuURUMpKKi5TPDC2HAWJcC2M8C2AGQAAAAAAAAAAAACgAAAABbGAsOAsOAsOAsOAMiAAAACAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAoAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABt2AWAWAWAWAWAWAWAWAWAWAWAWAWAWAWAWAWAWAWAWAWAWAWAWAWAWAWA//2Q=="
  );
  const [shopname, setShopName] = useState("Shop Name here");
  const [desc, setDesc] = useState("user your description here");
  const [manager, setManager] = useState(false);
  const [user, setUser] = useState(false);
  // const [profileimg, setProfileImg] = useState(null);
  const [error, setError] = useState("");

  const BannerhandleImage = (e) => {
    const selected = e.target.files[0];
    console.log(selected);
    const AllowTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && AllowTypes.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setBunner(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError("File not Supported");
    }
  };
  const ProfilehandleImage = (e) => {
    const selected = e.target.files[0];
    console.log(selected);
    const AllowTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && AllowTypes.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setProfile(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError("File not Supported");
    }
  };
  const addProducts = () => {
    alert("Product has been added");
  };
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Header {...props} />
      </Grid>
      <Grid item xs={12} xl={12} lg={12} md={12} sm={12} container>
        <Paper
          // className={classes.paper}

          style={{
            backgroundImage: `url(${Bunner})`,
            backgroundColor: Bunner ? null : "#edf1f7",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "192px",
            width: "100%",
            marginBottom: "60px",
            // width: "1328px",
          }}
          xs={12}
          xl={12}
          lg={12}
          md={12}
          sm={6}
        >
          <Paper
            style={{
              height: "192px",
              width: "387px",
              margin: "0 auto",
              backgroundColor: "transparent",
              backgroundSize: "cover",
              border: "none",
            }}
          >
            <div
              // className={classes.paper}
              style={{
                position: "absolute",
                height: "113px",
                width: "358px",
                margin: "10px 15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
                opacity: 0.8,
              }}
            >
              <div>
                {manager ? (
                  <div>
                    <input
                      onChange={BannerhandleImage}
                      accept="image/*"
                      className={classes.input}
                      style={{ display: "none" }}
                      id="raised-button-file"
                      multiple
                      type="file"
                    />
                    <label htmlFor="raised-button-file">
                      <Button
                        variant="raised"
                        component="span"
                        className={classes.button}
                        style={{ backgroundColor: "#3d3030", color: "white" }}
                      >
                        Upload Banner
                      </Button>
                    </label>

                    <Typography variant="h6" align="center">
                      <Dialog />
                    </Typography>
                  </div>
                ) : null}
                <div style={{ position: "relative" }}>
                  <img
                    style={{
                      position: manager ? "absolute" : "relative",
                      borderRadius: "50%",
                      marginTop: manager ? "40px" : null,
                      marginLeft: manager ? "35px" : null,

                      top: manager ? null : "125px",
                      border: "1px solid gray",
                    }}
                    width="100px"
                    height="100px"
                    src={Profile}
                  />
                </div>

                {manager ? (
                  <div
                    style={{
                      position: "absolute",
                      marginTop: "100px",
                      marginLeft: "115px",
                    }}
                  >
                    <div style={{ display: "none" }}>
                      <input
                        onChange={ProfilehandleImage}
                        accept="image/*"
                        className={classes.input}
                        style={{ display: "none" }}
                        id="raised-button-file1"
                        multiple
                        type="file"
                      />
                    </div>
                    <label htmlFor="raised-button-file1">
                      <CreateIcon
                        style={{ color: "#305085", fontSize: "25px" }}
                      />
                    </label>
                  </div>
                ) : null}
              </div>
            </div>
          </Paper>
        </Paper>
      </Grid>
      <Grid item xs={12} xl={12} lg={12} md={12} sm={12}>
        <Typography variant="h5" component="h2" align="center">
          {shopname}
        </Typography>
        <Typography align="center">{desc}</Typography>
        <Typography>
          {manager ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "10px 0",
              }}
            >
              <CreateIcon style={{ color: "#305085", fontSize: "15px" }} />
              <ShopNameDialog />{" "}
            </div>
          ) : null}
        </Typography>
      </Grid>
      <Grid item xs={12} xl={12} lg={12} md={12} sm={12}>
        {manager ? (
          <Paper
            style={{
              height: "200px",
              margin: "20px 50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid grey",
            }}
            onClick={addProducts}
          >
            <Typography>Add Products</Typography>
          </Paper>
        ) : null}
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
}
