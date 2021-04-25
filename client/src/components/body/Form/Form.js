import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { createFaq, updateFaq } from "../../../redux/actions/faqAction";

const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const user = JSON.parse(localStorage.getItem("profile"));

  const [postData, setPostData] = useState({
    question: "",
    answer: "",
    categories: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((answer) => answer._id === currentId) : null
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ question: "", answer: "", categories: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createFaq({ ...postData, name: user?.result?.name }));

      clear();
    } else {
      dispatch(updateFaq(currentId, { ...postData, name: user?.result?.name }));

      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to post your own faqs and see other's faqs.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing faq` : "Creating a faq"}
        </Typography>

        <TextField
          name="question"
          variant="outlined"
          label="Question"
          fullWidth
          value={postData.question}
          onChange={(e) =>
            setPostData({ ...postData, question: e.target.value })
          }
        />

        <TextField
          name="answer"
          variant="outlined"
          label="Answer"
          fullWidth
          multiline
          rows={4}
          value={postData.answer}
          onChange={(e) => setPostData({ ...postData, answer: e.target.value })}
        />

        <TextField
          name="categories"
          variant="outlined"
          label="Categories (coma separated)"
          fullWidth
          value={postData.categories}
          onChange={(e) =>
            setPostData({ ...postData, categories: e.target.value.split(",") })
          }
        />

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>

        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
