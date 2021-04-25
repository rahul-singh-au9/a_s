import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
} from "../constants/actionTypes";
import * as api from "../api/index.js";


// FETCH ALL THE FAQS
export const getFaqs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchFaqs();

    dispatch({
      type: FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

// CREATE A NEW FAQ
export const createFaq = (faq) => async (dispatch) => {
  try {
    const { data } = await api.createFaq(faq);

    dispatch({
      type: CREATE,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// UPDATE A FAQ
export const updateFaq = (id, faq) => async (dispatch) => {
  try {
    const { data } = await api.updateFaq(id, faq);

    dispatch({
      type: UPDATE,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};


// DELTE A FAQ

export const deleteFaq = (id) => async (dispatch) => {
  try {
    await api.deleteFaq(id);

    dispatch({
      type: DELETE,
      payload: id,
    });
  } catch (error) {
    console.log(error.message);
  }
};
