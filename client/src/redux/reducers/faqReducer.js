import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
} from "../constants/actionTypes";

export default (faqs = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...faqs, action.payload];

    case UPDATE:
      return faqs.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case DELETE:
      return faqs.filter((post) => post._id !== action.payload);

    default:
      return faqs;
  }
};
