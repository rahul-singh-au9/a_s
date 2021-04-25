import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getFaqs } from "../../../redux/actions/faqAction";
import "./home.css";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  console.log(user)
  useEffect(() => {
    // dispatch(getFaqs());
  }, [currentId, dispatch]);

  return (
    <div className="home_page">
      <Grow in>
        <Container>
          <h2 style={{ marginLeft: "280px" }}>
            WELCOME TO INNVONIX FAQ SYSTEM
          </h2>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
};

export default Home;
