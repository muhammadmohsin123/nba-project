import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  Card,
  Typography,
  Box,
  AlertTitle,
  Container,
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
      {/* END Appbar */}

      {/* /////////////////////////MID////////////////////////////////// */}
      <Container>
        <div className="mid">
          <Grid container spacing={9}>
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
      </Container>
      {/* ////////////////////////////MID END/////////////////////// */}
    </>
  );
};

export default App;
