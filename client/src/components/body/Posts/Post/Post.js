import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core/';
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles';
import { deleteFaq } from '../../../../redux/actions/faqAction';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  // const user = JSON.parse(localStorage.getItem('profile'));
  const result = useSelector((state) => state.auth);


  return (
    <Card className={classes.card}>
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
      </div>
      {(
        result?.user?._id === post?.creator) && (
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(post._id)}
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
      )}

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>

      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        {(
          result?.user?._id === post?.creator) && (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deleteFaq(post._id))}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
