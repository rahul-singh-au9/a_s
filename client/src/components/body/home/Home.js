import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Grow, Grid, Button } from "@material-ui/core";
import { allFaqs } from "../../../redux/actions/faqAction";
import "./home.css";
import Posts from "../Posts/Posts";

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      fetchAllFaqs();
    }, []);

    const fetchAllFaqs = async () => {
      let res = await allFaqs();
      setPosts(res.data);
    };

    console.log(posts)

  return (
    <div className="home_page">
      <Grow in>
        <Container>
          <h2 style={{ marginLeft: "280px" }}>
            WELCOME TO INNVONIX FAQ SYSTEM
          </h2>
          <Link to="/faqs/new">
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "12px", marginLeft: "915px" }}
            >
              + Add A New Faq
            </Button>
          </Link>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={12}>
              <Posts posts={posts} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
};

export default Home;
