import React from "react";
import {
  Grid,
  Container,
  Typography,
  Avatar,
  Divider,
  Link
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 80,
    height: 80
  },
  avatatContainer: {
    width: "50%"
  },
  divider: {
    width: "100%",
    margin: 10
  },
  miniContainer: {
    margin: 10,
    "& div": {
      margin: "2px"
    },
    "& .MuiAvatar-root": {
      // width: 50,
      // height: 50,
      marginRight: 20,
      marginLeft: 10,
      background: pink[500],
      color: "#fff"
    }
  }
});

const ContributorsPage = () => {
  const classes = useStyles();

  return (
    <>
      <br />
      <Grid container justify="center">
        <Grid
          component={Link}
          href="https://google.com"
          target="blank"
          container
          direction="column"
          alignItems="center"
          color="inherit"
          className={classes.avatatContainer}
        >
          <Avatar
            className={classes.avatar}
            src="https://cdn.discordapp.com/attachments/938107328434151475/1023550706575220766/Screenshot_2022-09-25-16-34-21-66.png"
          />
          <Typography variant="h5">Jatin</Typography>
        </Grid>

        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.avatatContainer}
          component={Link}
          href="https://google.com"
          target="blank"
          color="inherit"
        >
          <Avatar
            className={classes.avatar}
            src="https://avatars2.githubusercontent.com/u/21976188?s=300"
          />
          <Typography variant="h5">Will Adams</Typography>
        </Grid>
        <Divider className={classes.divider} />
        <Typography justify="center" variant="h8">Visit our GitHub page to view all contributors</Typography>
      </Grid>
    </>
  );
};

export default ContributorsPage;
