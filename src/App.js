import {
  Container,
  createTheme,
  Grid,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";

import "./App.css";
import Header from "./components/Header";
import FeaturedPost from "./components/FeaturedPost";
import { featuredPosts, sidebar } from "./Data/Data";
import PostCard from "./components/PostCard";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));
function App() {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });
  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Main title="From the firehose" />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>

    // <div className="App">
    //   <Button
    //     color="secondary"
    //     variant="contained"
    //     size="large"
    //     startIcon={<AccountCircleIcon />}
    //     endIcon={<AccountCircleIcon />}
    //   >
    //     Click Me
    //   </Button>
    //</div>
  );
}

export default App;
