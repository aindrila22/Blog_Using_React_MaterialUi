import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  title: {
    fontSize: 30,
    fontFamily: "Montserrat",
  },
  cover: {
    backgroundImage: `url(https://images.unsplash.com/photo-1531826267553-c4979aefab12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80)`,
    backgroundPosition: "center",
    padding: "35px 25px",
  },
  btn: {},
});

const FeaturedPost = () => {
  const classes = useStyles();
  return (
    <Card className={classes.cover}>
      <CardContent className={classes.textContainer}>
        <Typography className={classes.title} gutterBottom>
          Title for a longer feature blogpost
        </Typography>
        <Typography variant="h6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text" className={classes.btn}>
          Read More...
        </Button>
      </CardActions>
    </Card>
  );
};

export default FeaturedPost;
