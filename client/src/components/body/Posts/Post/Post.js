import React from "react";
import { useHistory, Link } from "react-router-dom";
import {
  Card,
  Button,
  CardContent,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useStyles from "./styles";

const ServiceCard = ({
  post,
  handleServiceDelete = (f) => f,
  owner = false,
  showViewMoreButton = true,
}) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.root}>

      <div className={classes.details} style={{ marginLeft: "20px" }}>
        <CardContent className={classes.content}>


          <Typography component="h6" variant="h6" color="primary">
            Available bookings - {post.total}
          </Typography>

          <Typography component="h6" variant="h6">
            Available from - {new Date(post.from).toLocaleDateString()}
          </Typography>
        </CardContent>

        <div className={classes.controls} style={{ marginLeft: "8px" }}>
          {showViewMoreButton && (
            <>
              <Button
                color="primary"
                variant="contained"
                onClick={() => history.push(`/faq/${post._id}`)}
              >
                Show more
              </Button>
            </>
          )}

          {owner && (
            <>
              <Link to={`/faq/edit/${post._id}`}>
                <EditIcon
                  color="primary"
                  style={{ marginLeft: "600px", cursor: "pointer" }}
                />
              </Link>

              <DeleteIcon
                color="secondary"
                style={{ marginLeft: "60px", cursor: "pointer" }}
                onClick={() => handleServiceDelete(post._id)}
              />
            </>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
