import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createFaq } from "../../../redux/actions/faqAction";
import NewPostForm from "./NewPostForm";

const NewPost = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const [values, setValues] = useState({
    title: "",
    content: "",
    image: "",
  });

  const clear = () => {
    setValues({
      title: "",
      content: "",
      image: "",
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let res = await createFaq(auth.token, {
        ...values,
        postedBy: auth.result.email,
        postedBySeller: auth.result.name,
      });
      // console.log("NEW SERVICE ====>", res)
      toast.success("Your New Service is Posted Successfully...");
      clear();
    } catch (err) {
      toast.error(err.response.data);
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
