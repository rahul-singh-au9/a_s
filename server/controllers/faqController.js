// ALL REQUEST CONTROLLERS
const FAQ = require("../models/faqModel");

// POST REQUEST
const createFaq = async (req, res) => {
  const faq = req.body;

  const createdFaq = new FAQ({
    ...faq,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    insertedFaq = await createdFaq.save();

    res.status(201).json(insertedFaq);
  } catch (err) {
    res.status(409).json(err);
  }
};

// GET REQUESTS
const getFaqs = async (req, res) => {
  try {
    const faqs = await FAQ.find();

    res.status(200).json(faqs);
  } catch (error) {
    res.status(404).send(err);
  }
};

// GET INDIVISUAL REQUEST
const getFaq = async (req, res) => {
  try {
    const _id = req.params.id;
    const faq = await FAQ.findById(_id);

    res.status(200).json(faq);
  } catch (err) {
    res.status(404).json(err);
  }
};

// UPDATE INDIVISUAL REQUEST
const updateFaq = async (req, res) => {
  const faq = req.body;

  try {
    const _id = req.params.id;
    const updatedFaq = await FAQ.findByIdAndUpdate(
      _id,
      { ...faq, _id },
      { new: true }
    );

    res.status(204).json(updatedFaq);
  } catch (err) {
    res.status(404).json(err);
  }
};

// DELETE INDIVISUAL REQUEST
const deleteFaq = async (req, res) => {
  try {
    const _id = req.params.id;
    const faq = await FAQ.findByIdAndDelete(_id);

    res.status(204).json(faq);
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = {
  createFaq,
  getFaqs,
  getFaq,
  updateFaq,
  deleteFaq,
};
