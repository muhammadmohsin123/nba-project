import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import {
  Card,
  CardActionArea,
  Typography,
  Box,
  CardMedia,
  AlertTitle,
  Container,
  Divider,
  Paper,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./App.css";

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
  },
  logo: {
    width: 40,
  },
  margin: {
    marginBottom: 120,
  },
  root: {
    maxWidth: 250,
  },
  media: {
    height: 140,
  },
});
const App = () => {
  const classes = useStyles();
  return (
    <>
      {/* /////////////////////APPBAR////////////////////// */}
      <Box>
        <AppBar>
          <Toolbar>
            <Grid container>
              <Grid item container xs={6} alignItems="center">
                <Grid item container xs={4} alignItems="center">
                  <Grid item>
                    <img
                      className={classes.logo}
                      src="https://tradenba.com/public/assets/images/tradenba-logo-orange.png"
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h5">TradeNBA </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={2}>
                  <Typography>TEAMS</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography>POSTS</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography>TOOLS</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography>RESOURSES</Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                xs={6}
                alignItems="center"
                justify="flex-end"
                spacing={2}
              >
                <Box bgcolor="text.disabled" border={1} borderRadius={6}>
                  <Box ml={3}>
                    <Grid item container spacing={3} alignItems="center">
                      <Grid item>
                        <SearchIcon />
                      </Grid>

                      <Grid item>
                        <InputBase
                          placeholder="Search…"
                          inputProps={{ "aria-label": "search" }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Box>

                <Grid item>
                  <Button variant="outlined" color="secondary">
                    Default
                  </Button>
                </Grid>
                <Grid item>
                  <Typography>LOGIN</Typography>
                </Grid>
                <Grid item>
                  <MoreVertIcon />
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <Toolbar />
      <Toolbar />
      {/* END Appbar */}

      {/* /////////////////////////MID////////////////////////////////// */}
      <Container>
        <div className="mid">
          <Grid container direction="column" spacing={5}>
            <Grid item xs={12}>
              <Typography variant="h3"> Trade season is upon us</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">
                The NBA season is heating up, see what draft and trade scenarios
                are possible to better your team.
              </Typography>
            </Grid>
            <Grid
              item
              container
              xs={12}
              justify="space-around"
              alignItems="center"
            >
              <Grid item>
                <Button variant="contained" color="secondary">
                  FIRE UP THE TRADE MACHINE
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary">
                  FIRE UP THE TRADE MACHINE
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary">
                  FIRE UP THE TRADE MACHINE
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>

        {/* ////////////////////////////MID END/////////////////////// */}

        {/* //////////////////////////AVATARS//////////////////////////////// */}

        <Typography>Active members</Typography>

        <hr />
        <div
          style={{
            display: "flex",
            alignContent: "space-around",
            width: "100%",
            marginBottom: "20px",
            overflowX: "scroll",
            whiteSpace: "no-wrap",
          }}
        >
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
          <Grid item>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
            />
          </Grid>
        </div>

        {/* ///////////////////////////////////END AVATAR///////////////////////////// */}
        {/* ///////////////////////////////////////CARD//////////////////////////////////// */}
        <div style={{ marginBottom: "20px" }}>
          <Grid container>
            <Grid item xs={3}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://res.cloudinary.com/djcqmdgda/image/upload/f_auto,o_60/h_40,l_teams:logos:primary:30/fl_layer_apply,g_north_west,o_80,x_15/h_40,l_teams:logos:primary:9/fl_layer_apply,g_north_west,o_80,x_100/h_40,l_teams:logos:primary:28/fl_layer_apply,g_north_west,o_80,x_180/h_40,l_teams:logos:primary:10/fl_layer_apply,g_north_east,o_80,x_96/h_40,l_teams:logos:primary:15/fl_layer_apply,g_north_east,o_80,x_15/e_trim,l_prospects:headshots:105027/c_fill,co_rgb:E3183790,e_outline:3,g_face,h_160,w_96/c_crop,g_north,h_160,w_75/fl_layer_apply,g_south_west/e_trim,l_prospects:headshots:105028/c_fill,co_rgb:006BB690,e_outline:3,g_face,h_160,w_96/c_crop,g_north,h_160,w_74/fl_layer_apply,g_south_west,x_82/e_trim,l_prospects:headshots:105041/c_fill,co_rgb:00000090,e_outline:3,g_face,h_160,w_96/c_crop,g_north,h_160,w_73/fl_layer_apply,g_south_west,x_164/e_trim,l_prospects:headshots:105030/c_fill,co_rgb:12173F90,e_outline:3,g_face,h_160,w_96/c_crop,g_north,h_160,w_74/fl_layer_apply,g_south_east/e_trim,l_prospects:headshots:105029/c_fill,co_rgb:FDB92790,e_outline:3,g_face,h_160,w_96/c_crop,g_north,h_160,w_75/fl_layer_apply,g_south_east,x_81/b_rgb:002B5C99,co_white,g_south_west,h_20,l_text:Roboto_12_bold:%20,r_0:0:0:0,w_75/b_rgb:C8102E99,co_white,g_south_west,h_20,l_text:Roboto_12_bold:%20,r_0:0:0:0,w_74,x_82/b_rgb:CE114199,co_white,g_south_west,h_20,l_text:Roboto_12_bold:%20,r_0:0:0:0,w_72,x_164/b_rgb:006BB699,co_white,g_south_east,h_20,l_text:Roboto_12_bold:%20,r_0:0:0:0,w_74,x_82/b_rgb:5D76A999,co_white,g_south_east,h_20,l_text:Roboto_12_bold:%20,r_0:0:0:0,w_74/co_white,g_south_west,l_text:Roboto_12_bold:Cunningham,x_13,y_4/co_white,g_south_west,l_text:Roboto_12_bold:Mobley,x_94,y_4/co_white,g_south_west,l_text:Roboto_12_bold:Kuminga,x_180,y_4/co_white,g_south_east,l_text:Roboto_12_bold:Green,x_94,y_4/co_white,g_south_east,l_text:Roboto_12_bold:Suggs,x_13,y_4/b_rgb:002B5C99,co_white,g_south_west,h_28,l_text:Roboto_12_bold:%20,r_0:14:14:0,w_28,y_22/co_white,g_south_west,l_text:Roboto_15_bold:%231%20,x_3,y_31/b_rgb:C8102E99,co_white,g_south_west,h_28,l_text:Roboto_12_bold:%20,r_0:14:14:0,w_28,x_82,y_22/co_white,g_south_west,l_text:Roboto_15_bold:%232%20,x_86,y_31/b_rgb:CE114199,co_white,g_south_west,h_28,l_text:Roboto_12_bold:%20,r_0:14:14:0,w_28,x_164,y_22/co_white,g_south_west,l_text:Roboto_15_bold:%233%20,x_168,y_31/b_rgb:006BB699,co_white,g_south_east,h_28,l_text:Roboto_12_bold:%20,r_0:14:14:0,w_28,x_128,y_22/co_white,g_south_east,l_text:Roboto_15_bold:%234%20,x_134,y_31/b_rgb:5D76A999,co_white,g_south_east,h_28,l_text:Roboto_12_bold:%20,r_0:14:14:0,w_28,x_46,y_22/co_white,g_south_east,l_text:Roboto_15_bold:%235%20,x_52,y_31/co_rgb:002B5C,e_colorize,g_west,h_200,l_machine:black_line,o_50,w_8,x_75/co_rgb:C8102E,e_colorize,g_west,h_200,l_machine:black_line,o_50,w_8,x_156/co_rgb:CE1141,e_colorize,g_west,h_200,l_machine:black_line,o_50,w_8,x_236/co_rgb:006BB6,e_colorize,g_west,h_200,l_machine:black_line,o_50,w_8,x_318/co_rgb:002B5C,e_colorize,g_west,h_200,u_machine:background_white,w_75,x_0/co_rgb:C8102E,e_colorize,g_west,h_200,u_machine:background_white,w_73,x_83/co_rgb:CE1141,e_colorize,g_west,h_200,u_machine:background_white,w_72,x_164/co_rgb:006BB6,e_colorize,g_east,h_200,u_machine:background_white,w_74,x_82/co_rgb:5D76A9,e_colorize,g_east,h_200,u_machine:background_white,w_74,x_0/b_rgb:f15a22,bo_1px_solid_rgb:00471B,co_rgb:FFF,g_north,l_text:Verdana_14_bold:%20Mock%20Draft%20,y_2/v1/machine/background_arrows"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Popular Trades
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      Popular creation
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://res.cloudinary.com/djcqmdgda/image/upload/f_auto,o_60/h_40,l_teams:logos:primary:30/fl_layer_apply,g_north_west,o_80,x_15/h_40,l_teams:logos:primary:9/fl_layer_apply,g_north_west,o_80,x_100/h_40,l_teams:logos:primary:28/fl_layer_apply,g_north_west,o_80,x_180/h_40,l_teams:logos:primary:10/fl_layer_apply,g_north_east,o_80,x_96/h_40,l_teams:logos:primary:15/fl_layer_apply,g_north_east,o_80,x_15/e_trim,l_prospects:headshots:105027/c_fill,co_rgb:E3183790,e_outline:3,g_face,h_160,w_96/c_crop,g_north,h_160,w_75/fl_layer_apply,g_south_west/e_trim,l_prospects:headshots:105028/c_fill,co_rgb:006BB690,e_outline:3,g_face,h_160,w_96/c_crop,g_north,h_160,w_74/fl_layer_apply,g_south_west,x_82/e_trim,l_prospects:headshots:105041/c_fill,co_rgb:00000090,e_outline:3,g_face,h_160,w_96/c_crop,g_north,h_160,w_73/fl_layer_apply,g_south_west,x_164/e_trim,l_prospects:headshots:105030/c_fill,co_rgb:12173F90,e_outline:3,g_face,h_160,w_96/c_crop,g_north,h_160,w_74/fl_layer_apply,g_south_east/e_trim,l_prospects:headshots:105029/c_fill,co_rgb:FDB92790,e_outline:3,g_face,h_160,w_96/c_crop,g_north,h_160,w_75/fl_layer_apply,g_south_east,x_81/b_rgb:002B5C99,co_white,g_south_west,h_20,l_text:Roboto_12_bold:%20,r_0:0:0:0,w_75/b_rgb:C8102E99,co_white,g_south_west,h_20,l_text:Roboto_12_bold:%20,r_0:0:0:0,w_74,x_82/b_rgb:CE114199,co_white,g_south_west,h_20,l_text:Roboto_12_bold:%20,r_0:0:0:0,w_72,x_164/b_rgb:006BB699,co_white,g_south_east,h_20,l_text:Roboto_12_bold:%20,r_0:0:0:0,w_74,x_82/b_rgb:5D76A999,co_white,g_south_east,h_20,l_text:Roboto_12_bold:%20,r_0:0:0:0,w_74/co_white,g_south_west,l_text:Roboto_12_bold:Cunningham,x_13,y_4/co_white,g_south_west,l_text:Roboto_12_bold:Mobley,x_94,y_4/co_white,g_south_west,l_text:Roboto_12_bold:Kuminga,x_180,y_4/co_white,g_south_east,l_text:Roboto_12_bold:Green,x_94,y_4/co_white,g_south_east,l_text:Roboto_12_bold:Suggs,x_13,y_4/b_rgb:002B5C99,co_white,g_south_west,h_28,l_text:Roboto_12_bold:%20,r_0:14:14:0,w_28,y_22/co_white,g_south_west,l_text:Roboto_15_bold:%231%20,x_3,y_31/b_rgb:C8102E99,co_white,g_south_west,h_28,l_text:Roboto_12_bold:%20,r_0:14:14:0,w_28,x_82,y_22/co_white,g_south_west,l_text:Roboto_15_bold:%232%20,x_86,y_31/b_rgb:CE114199,co_white,g_south_west,h_28,l_text:Roboto_12_bold:%20,r_0:14:14:0,w_28,x_164,y_22/co_white,g_south_west,l_text:Roboto_15_bold:%233%20,x_168,y_31/b_rgb:006BB699,co_white,g_south_east,h_28,l_text:Roboto_12_bold:%20,r_0:14:14:0,w_28,x_128,y_22/co_white,g_south_east,l_text:Roboto_15_bold:%234%20,x_134,y_31/b_rgb:5D76A999,co_white,g_south_east,h_28,l_text:Roboto_12_bold:%20,r_0:14:14:0,w_28,x_46,y_22/co_white,g_south_east,l_text:Roboto_15_bold:%235%20,x_52,y_31/co_rgb:002B5C,e_colorize,g_west,h_200,l_machine:black_line,o_50,w_8,x_75/co_rgb:C8102E,e_colorize,g_west,h_200,l_machine:black_line,o_50,w_8,x_156/co_rgb:CE1141,e_colorize,g_west,h_200,l_machine:black_line,o_50,w_8,x_236/co_rgb:006BB6,e_colorize,g_west,h_200,l_machine:black_line,o_50,w_8,x_318/co_rgb:002B5C,e_colorize,g_west,h_200,u_machine:background_white,w_75,x_0/co_rgb:C8102E,e_colorize,g_west,h_200,u_machine:background_white,w_73,x_83/co_rgb:CE1141,e_colorize,g_west,h_200,u_machine:background_white,w_72,x_164/co_rgb:006BB6,e_colorize,g_east,h_200,u_machine:background_white,w_74,x_82/co_rgb:5D76A9,e_colorize,g_east,h_200,u_machine:background_white,w_74,x_0/b_rgb:f15a22,bo_1px_solid_rgb:00471B,co_rgb:FFF,g_north,l_text:Verdana_14_bold:%20Mock%20Draft%20,y_2/v1/machine/background_arrows"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Popular Trades
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      Popular creation
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://res.cloudinary.com/djcqmdgda/image/upload/f_auto,o_60/h_40,l_teams:logos:primary:30/fl_layer_apply,g_north_west,o_80,x_15/h_40,l_teams:logos:primary:9/fl_layer_apply,g_north_west,o_80,x_100/h_40,l_teams:logos:primary:28/fl_layer_apply,g_north_west,o_80,x_180/h_40,l_teams:logos:primary:10/fl_layer_apply,g_north_east,o_80,x_96/h_40,l_teams:logos:primary:15/fl_layer_apply,g_north_east,o_80,x_15/e_trim,l_prospects:headshots:105027/c_fill,co_rgb:E3183790,e_outline:3,g_face,h_160,w_96/c_crop,g_north,h_160,w_75/fl_layer_apply,g_south_west/e_trim,l_prospects:headshots:105028/c_fill,co_rgb:006BB690,e_outline:3,g_face,h_160,w_96/c_crop,g_north,h_160,w_74/fl_layer_apply,g_south_west,x_82/e_trim,l_prospects:headshots:105041/c_fill,co_rgb:00000090,e_outline:3,g_face,h_160,w_96/c_crop,g_north,h_160,w_73/fl_layer_apply,g_south_west,x_164/e_trim,l_prospects:headshots:105030/c_fill,co_rgb:12173F90,e_outline:3,g_face,h_160,w_96/c_crop,g_north,h_160,w_74/fl_layer_apply,g_south_east/e_trim,l_prospects:headshots:105029/c_fill,co_rgb:FDB92790,e_outline:3,g_face,h_160,w_96/c_crop,g_north,h_160,w_75/fl_layer_apply,g_south_east,x_81/b_rgb:002B5C99,co_white,g_south_west,h_20,l_text:Roboto_12_bold:%20,r_0:0:0:0,w_75/b_rgb:C8102E99,co_white,g_south_west,h_20,l_text:Roboto_12_bold:%20,r_0:0:0:0,w_74,x_82/b_rgb:CE114199,co_white,g_south_west,h_20,l_text:Roboto_12_bold:%20,r_0:0:0:0,w_72,x_164/b_rgb:006BB699,co_white,g_south_east,h_20,l_text:Roboto_12_bold:%20,r_0:0:0:0,w_74,x_82/b_rgb:5D76A999,co_white,g_south_east,h_20,l_text:Roboto_12_bold:%20,r_0:0:0:0,w_74/co_white,g_south_west,l_text:Roboto_12_bold:Cunningham,x_13,y_4/co_white,g_south_west,l_text:Roboto_12_bold:Mobley,x_94,y_4/co_white,g_south_west,l_text:Roboto_12_bold:Kuminga,x_180,y_4/co_white,g_south_east,l_text:Roboto_12_bold:Green,x_94,y_4/co_white,g_south_east,l_text:Roboto_12_bold:Suggs,x_13,y_4/b_rgb:002B5C99,co_white,g_south_west,h_28,l_text:Roboto_12_bold:%20,r_0:14:14:0,w_28,y_22/co_white,g_south_west,l_text:Roboto_15_bold:%231%20,x_3,y_31/b_rgb:C8102E99,co_white,g_south_west,h_28,l_text:Roboto_12_bold:%20,r_0:14:14:0,w_28,x_82,y_22/co_white,g_south_west,l_text:Roboto_15_bold:%232%20,x_86,y_31/b_rgb:CE114199,co_white,g_south_west,h_28,l_text:Roboto_12_bold:%20,r_0:14:14:0,w_28,x_164,y_22/co_white,g_south_west,l_text:Roboto_15_bold:%233%20,x_168,y_31/b_rgb:006BB699,co_white,g_south_east,h_28,l_text:Roboto_12_bold:%20,r_0:14:14:0,w_28,x_128,y_22/co_white,g_south_east,l_text:Roboto_15_bold:%234%20,x_134,y_31/b_rgb:5D76A999,co_white,g_south_east,h_28,l_text:Roboto_12_bold:%20,r_0:14:14:0,w_28,x_46,y_22/co_white,g_south_east,l_text:Roboto_15_bold:%235%20,x_52,y_31/co_rgb:002B5C,e_colorize,g_west,h_200,l_machine:black_line,o_50,w_8,x_75/co_rgb:C8102E,e_colorize,g_west,h_200,l_machine:black_line,o_50,w_8,x_156/co_rgb:CE1141,e_colorize,g_west,h_200,l_machine:black_line,o_50,w_8,x_236/co_rgb:006BB6,e_colorize,g_west,h_200,l_machine:black_line,o_50,w_8,x_318/co_rgb:002B5C,e_colorize,g_west,h_200,u_machine:background_white,w_75,x_0/co_rgb:C8102E,e_colorize,g_west,h_200,u_machine:background_white,w_73,x_83/co_rgb:CE1141,e_colorize,g_west,h_200,u_machine:background_white,w_72,x_164/co_rgb:006BB6,e_colorize,g_east,h_200,u_machine:background_white,w_74,x_82/co_rgb:5D76A9,e_colorize,g_east,h_200,u_machine:background_white,w_74,x_0/b_rgb:f15a22,bo_1px_solid_rgb:00471B,co_rgb:FFF,g_north,l_text:Verdana_14_bold:%20Mock%20Draft%20,y_2/v1/machine/background_arrows"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Popular Trades
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      Popular creation
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://res.cloudinary.com/djcqmdgda/image/upload/f_auto,o_60/h_40,l_teams:logos:primary:30/fl_layer_apply,g_north_west,o_80,x_15/h_40,l_teams:logos:primary:9/fl_layer_apply,g_north_west,o_80,x_100/h_40,l_teams:logos:primary:28/fl_layer_apply,g_north_west,o_80,x_180/h_40,l_teams:logos:primary:10/fl_layer_apply,g_north_east,o_80,x_96/h_40,l_teams:logos:primary:15/fl_layer_apply,g_north_east,o_80,x_15/e_trim,l_prospects:headshots:105027/c_fill,co_rgb:E3183790,e_outline:3,g_face,h_160,w_96/c_crop,g_north,h_160,w_75/fl_layer_apply,g_south_west/e_trim,l_prospects:headshots:105028/c_fill,co_rgb:006BB690,e_outline:3,g_face,h_160,w_96/c_crop,g_north,h_160,w_74/fl_layer_apply,g_south_west,x_82/e_trim,l_prospects:headshots:105041/c_fill,co_rgb:00000090,e_outline:3,g_face,h_160,w_96/c_crop,g_north,h_160,w_73/fl_layer_apply,g_south_west,x_164/e_trim,l_prospects:headshots:105030/c_fill,co_rgb:12173F90,e_outline:3,g_face,h_160,w_96/c_crop,g_north,h_160,w_74/fl_layer_apply,g_south_east/e_trim,l_prospects:headshots:105029/c_fill,co_rgb:FDB92790,e_outline:3,g_face,h_160,w_96/c_crop,g_north,h_160,w_75/fl_layer_apply,g_south_east,x_81/b_rgb:002B5C99,co_white,g_south_west,h_20,l_text:Roboto_12_bold:%20,r_0:0:0:0,w_75/b_rgb:C8102E99,co_white,g_south_west,h_20,l_text:Roboto_12_bold:%20,r_0:0:0:0,w_74,x_82/b_rgb:CE114199,co_white,g_south_west,h_20,l_text:Roboto_12_bold:%20,r_0:0:0:0,w_72,x_164/b_rgb:006BB699,co_white,g_south_east,h_20,l_text:Roboto_12_bold:%20,r_0:0:0:0,w_74,x_82/b_rgb:5D76A999,co_white,g_south_east,h_20,l_text:Roboto_12_bold:%20,r_0:0:0:0,w_74/co_white,g_south_west,l_text:Roboto_12_bold:Cunningham,x_13,y_4/co_white,g_south_west,l_text:Roboto_12_bold:Mobley,x_94,y_4/co_white,g_south_west,l_text:Roboto_12_bold:Kuminga,x_180,y_4/co_white,g_south_east,l_text:Roboto_12_bold:Green,x_94,y_4/co_white,g_south_east,l_text:Roboto_12_bold:Suggs,x_13,y_4/b_rgb:002B5C99,co_white,g_south_west,h_28,l_text:Roboto_12_bold:%20,r_0:14:14:0,w_28,y_22/co_white,g_south_west,l_text:Roboto_15_bold:%231%20,x_3,y_31/b_rgb:C8102E99,co_white,g_south_west,h_28,l_text:Roboto_12_bold:%20,r_0:14:14:0,w_28,x_82,y_22/co_white,g_south_west,l_text:Roboto_15_bold:%232%20,x_86,y_31/b_rgb:CE114199,co_white,g_south_west,h_28,l_text:Roboto_12_bold:%20,r_0:14:14:0,w_28,x_164,y_22/co_white,g_south_west,l_text:Roboto_15_bold:%233%20,x_168,y_31/b_rgb:006BB699,co_white,g_south_east,h_28,l_text:Roboto_12_bold:%20,r_0:14:14:0,w_28,x_128,y_22/co_white,g_south_east,l_text:Roboto_15_bold:%234%20,x_134,y_31/b_rgb:5D76A999,co_white,g_south_east,h_28,l_text:Roboto_12_bold:%20,r_0:14:14:0,w_28,x_46,y_22/co_white,g_south_east,l_text:Roboto_15_bold:%235%20,x_52,y_31/co_rgb:002B5C,e_colorize,g_west,h_200,l_machine:black_line,o_50,w_8,x_75/co_rgb:C8102E,e_colorize,g_west,h_200,l_machine:black_line,o_50,w_8,x_156/co_rgb:CE1141,e_colorize,g_west,h_200,l_machine:black_line,o_50,w_8,x_236/co_rgb:006BB6,e_colorize,g_west,h_200,l_machine:black_line,o_50,w_8,x_318/co_rgb:002B5C,e_colorize,g_west,h_200,u_machine:background_white,w_75,x_0/co_rgb:C8102E,e_colorize,g_west,h_200,u_machine:background_white,w_73,x_83/co_rgb:CE1141,e_colorize,g_west,h_200,u_machine:background_white,w_72,x_164/co_rgb:006BB6,e_colorize,g_east,h_200,u_machine:background_white,w_74,x_82/co_rgb:5D76A9,e_colorize,g_east,h_200,u_machine:background_white,w_74,x_0/b_rgb:f15a22,bo_1px_solid_rgb:00471B,co_rgb:FFF,g_north,l_text:Verdana_14_bold:%20Mock%20Draft%20,y_2/v1/machine/background_arrows"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Popular Trades
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      Popular creation
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </div>
        {/* //////////////////////////////////CARD END//////////////////////////// */}
        {/* ////////////////////////////////////ARTICLE/////////////////////////////// */}
        <div style={{ marginBottom: "20px" }}>
          <Grid container>
            <Grid item>
              <img
                style={{ width: "160px", height: "120px" }}
                src="https://cdn.pixabay.com/photo/2016/07/27/01/27/basketball-1544366_960_720.jpg"
              />
            </Grid>
            <Grid item xs={10}>
              <Card>
                <CardContent>
                  <Typography variant="h5">
                    NBA Execs Tell Us Why Trade Machines Might Be More Fun Than
                    Real Life
                  </Typography>
                  <Typography>
                    We talked to a current and former NBA general manager about
                    the proliferation of trade machines and why they're way more
                    fun than making a real life deal. Including the story of
                    TradeNBA.com and their trade machine.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        {/* //////////////////////////////////Article END///////////////////////////// */}
        <div style={{ marginBottom: "20px" }}>
          <Grid container spacing={3}>
            <Grid item xs={8} container>
              <Grid item xs={12}>
                <Typography variant="h4">
                  2021 NBA Trade Deadline Challenge
                </Typography>
                <Typography>March 13th, 2020 by Chris @fanspo</Typography>
                <Typography>
                  Who really knows their stuff? $100 gift card prize awarded to
                  winner. On a 0-5 scale, predict how likely each of these trade
                  candidates is to be dealt prior to the trade deadline on March
                  25...
                </Typography>
                <Grid item container justify="flex-end">
                  <Grid item>
                    <Button variant="outlined">Read The Blog</Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4">
                  2021 NBA Trade Deadline Challenge
                </Typography>
                <Typography>March 13th, 2020 by Chris @fanspo</Typography>
                <Typography>
                  Who really knows their stuff? $100 gift card prize awarded to
                  winner. On a 0-5 scale, predict how likely each of these trade
                  candidates is to be dealt prior to the trade deadline on March
                  25...
                </Typography>
                <Grid item container justify="flex-end">
                  <Grid item>
                    <Button variant="outlined">Read The Blog</Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4">
                  2021 NBA Trade Deadline Challenge
                </Typography>
                <Typography>March 13th, 2020 by Chris @fanspo</Typography>
                <Typography>
                  Who really knows their stuff? $100 gift card prize awarded to
                  winner. On a 0-5 scale, predict how likely each of these trade
                  candidates is to be dealt prior to the trade deadline on March
                  25...
                </Typography>
                <Grid item container justify="flex-end">
                  <Grid item>
                    <Button variant="outlined">Read The Blog</Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4">
                  2021 NBA Trade Deadline Challenge
                </Typography>
                <Typography>March 13th, 2020 by Chris @fanspo</Typography>
                <Typography>
                  Who really knows their stuff? $100 gift card prize awarded to
                  winner. On a 0-5 scale, predict how likely each of these trade
                  candidates is to be dealt prior to the trade deadline on March
                  25...
                </Typography>
                <Grid item container justify="flex-end">
                  <Grid item>
                    <Button variant="outlined">Read The Blog</Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4">
                  2021 NBA Trade Deadline Challenge
                </Typography>
                <Typography>March 13th, 2020 by Chris @fanspo</Typography>
                <Typography>
                  Who really knows their stuff? $100 gift card prize awarded to
                  winner. On a 0-5 scale, predict how likely each of these trade
                  candidates is to be dealt prior to the trade deadline on March
                  25...
                </Typography>
                <Grid item container justify="flex-end">
                  <Grid item>
                    <Button variant="outlined">Read The Blog</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container xs={4}>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Partners</Typography>
                    <hr />
                    <div style={{ paddingBottom: "20px" }} />
                    <Grid item container xs={12}>
                      <Grid item xs={4} container justify="center">
                        <Grid item>
                          <Avatar>
                            <FolderIcon />
                          </Avatar>
                        </Grid>
                      </Grid>
                      <Grid item xs={8} className={classes.rootb}>
                        <Typography>Becomes a partner</Typography>
                        <Typography variant="body2">Contact us</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Partners</Typography>
                    <hr />
                    <div style={{ paddingBottom: "20px" }} />
                    <Grid item container xs={12}>
                      <Grid item xs={4} container justify="center">
                        <Grid item>
                          <Avatar>
                            <FolderIcon />
                          </Avatar>
                        </Grid>
                      </Grid>
                      <Grid item xs={8} className={classes.rootb}>
                        <Typography>Becomes a partner</Typography>
                        <Typography variant="body2">Contact us</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default App;
