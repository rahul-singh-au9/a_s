import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3001" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

// FETCH ALL FAQS
export const fetchFaqs = () => API.get("/faqs");

// CREATE A FAQ
export const createFaq = (newFaq) => API.post("/faqs", newFaq);

// UPDATE A FAQ
export const updateFaq = (id, updatedFaq) => API.patch(`/faqs/${id}`, updatedFaq);

// DELETE A FAQ
export const deleteFaq = (id) => API.delete(`/faqs/${id}`);
