import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { singleFaq, updateFaq } from "../../../redux/actions/faqAction";
import EditPostForm from "./EditPostForm";

const EditPost = ({ match }) => {
  const { token } = useSelector((state) => ({ ...state }));
  const history = useHistory();

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
      let res = await updateFaq(token, { ...values }, match.params.faqId);
      console.log("UPDATED SERVICE ====>", res);
      clear();
      history.push("/");
    } catch (err) {
      console.log(err);
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
