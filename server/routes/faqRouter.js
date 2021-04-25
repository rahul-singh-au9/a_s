const express = require("express");

const {
  createFaq,
  getFaqs,
  getFaq,
  updateFaq,
  deleteFaq,
} = require("../controllers/faqController");

const auth = require("../middlewares/authMiddleware");

const faqRouter = express.Router();

faqRouter.get("/", getFaqs);
faqRouter.post("/", auth, createFaq);
faqRouter.get("/:id", getFaq);
faqRouter.delete("/:id", auth, deleteFaq);
faqRouter.patch("/:id", auth, updateFaq);

module.exports = faqRouter;
