import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
import { singleFaq, updateFaq } from "../../../redux/actions/faqAction";
import EditPostForm from "./EditPostForm";

const EditPost = ({ match }) => {
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

  const fetchUserFaq = async () => {
    let res = await singleFaq(match.params.faqId);
    setValues({ ...values, ...res.data });
  };

  useEffect(() => {
    fetchUserFaq();
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let res = await updateFaq(
        token,
        { ...values },
        match.params.faqId
      );
      console.log("UPDATED SERVICE ====>", res);
      // toast.success(`${values.title} is Edited Successfully...`);
      clear();
    } catch (err) {
      // toast.error(err.response.data);
      console.log(err)
    }
  };

  return (
    <>
      <EditPostForm
        values={values}
        setValues={setValues}
        handleSubmit={handleSubmit}
        clear={clear}
      />
      {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
    </>
  );
};

export default EditPost;
