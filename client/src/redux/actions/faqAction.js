import axios from "axios";

// CREATE A NEW SERVICE
export const createFaq = async (token, data) =>
  await axios.post(`${process.env.REACT_APP_API}/create-faq`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// GET ALL THE FAQS
export const allFaqs = async () =>
  await axios.get(`${process.env.REACT_APP_API}/faqs`);

// GET SINGLE FAQ
export const singleFaq = async (faqId) =>
  await axios.get(`${process.env.REACT_APP_API}/faq/${faqId}`);

// USER'S FAQS
export const userFaqs = async (token, data) =>
  await axios.get(`${process.env.REACT_APP_API}/user-faqs`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// DELETE THE FAQ
export const deleteFaq = async (token, faqId) => {
  await axios.delete(
    `${process.env.REACT_APP_API}/delete-faq/${faqId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// UPDATE A FAQ
export const updateFaq = async (token, data, faqId) =>
  await axios.patch(
    `${process.env.REACT_APP_API}/update-faq/${faqId}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
