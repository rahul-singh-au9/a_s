import { TextField, Button, Paper } from "@material-ui/core";
import useStyles from "./styles";

const EidtPostForm = (props) => {
  const { values, setValues, handleSubmit, clear } = props;

  // further destructing values from state
  const { question, answer, category } = values;

  const classes = useStyles();

  return (
    <>
      <h1 style={{ marginTop: "18px", marginLeft: "40%" }}>Edit A Faq</h1>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <TextField
            name="question"
            variant="outlined"
            label="Question"
            fullWidth
            value={question}
            onChange={(e) => setValues({ ...values, question: e.target.value })}
          />

          <TextField
            name="answer"
            variant="outlined"
            label="Answer"
            fullWidth
            multiline
            rows={4}
            value={answer}
            onChange={(e) => setValues({ ...values, answer: e.target.value })}
          />

          <TextField
            name="category"
            variant="outlined"
            label="Category"
            fullWidth
            value={category}
            onChange={(e) => setValues({ ...values, category: e.target.value })}
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
        {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
      </Paper>
    </>
  );
};

export default EidtPostForm;
