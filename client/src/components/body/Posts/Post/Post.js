import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useStyles from "./styles";
import Accordion from "./Accordion";
import { deleteFaq, allFaqs } from "../../../../redux/actions/faqAction";

const Post = ({ post }) => {
  const classes = useStyles();
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = useSelector((state) => ({ ...state }));

  const handleServiceDelete = async (faqId) => {
    if (!window.confirm("Are You Sure ?")) return;

    deleteFaq(token, faqId).then((res) => {
      allFaqs();
    });
  };

  return (
    <Card className={classes.root} style={{ marginTop: "20px" }}>
      <div className={classes.details}>

        <Typography color="primary" style={{ marginLeft: "10px" }}>
          category- {post.category[0]}
        </Typography>

        <div className={classes.controls} style={{ marginLeft: "8px" }}>
          {auth.user.email === post.createdBy && (
            <>
              <Link to={`/faq/edit/${post._id}`}>
                <EditIcon
                  color="primary"
                  style={{ cursor: "pointer", marginRight: "15px" }}
                />
              </Link>

              <DeleteIcon
                color="secondary"
                style={{ cursor: "pointer" }}
                onClick={() => handleServiceDelete(post._id)}
              />
            </>
          )}
        </div>
      </div>
      <Accordion question={post.question} answer={post.answer} />
    </Card>
  );
};

export default Post;
