import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
import { createFaq } from "../../../redux/actions/faqAction";
import NewPostForm from "./NewPostForm";

const NewPost = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = useSelector((state) => ({ ...state }));
  const [values, setValues] = useState({
    question: "",
    answer: "",
    category: "",
  });


  const clear = () => {
    setValues({
      question: "",
      answer: "",
      category: "",
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let res = await createFaq(token, {
        ...values,
        postedBy: auth.user.email,
        postedBySeller: auth.user.name,
      });
      // toast.success("Your New Service is Posted Successfully...");
      clear();
    } catch (err) {
      // toast.error(err.response.data);
      console.log(err)
    }
  };

  return (
    <NewPostForm
      values={values}
      setValues={setValues}
      handleSubmit={handleSubmit}
      clear={clear}
    />
  );
};

export default NewPost;
