const express = require("express");
const auth = require("../middlewares/auth2Middleware");

const {
  createFaq,
  getFaqs,
  getFaq,
  updateFaq,
  deleteFaq,
  userFaqs,
} = require("../controllers/faqController");

const faqRouter = express.Router();

faqRouter.post("/create-faq", auth, createFaq);
faqRouter.get("/faqs", getFaqs);
faqRouter.get("/faq/:faqId", getFaq);
faqRouter.get("/user-faqs", auth, userFaqs);
faqRouter.delete("/delete-faq/:faqId", auth, deleteFaq);
faqRouter.patch("/update-faq/:faqId", auth, updateFaq);

module.exports = faqRouter;
