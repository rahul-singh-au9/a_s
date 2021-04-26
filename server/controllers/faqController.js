// ALL REQUEST CONTROLLERS
const faqModel = require("../models/faqModel");

// CREATE A NEW SERVICE
const createFaq = async (req, res) => {
  const faq = req.body;
  const createdFaq = new faqModel({
    ...faq,
    createdBy: faq.postedBy,
    createdAt: new Date().toISOString(),
  });
  createdFaq.postedBy = faq.postedBySeller;

  try {
    insertedFaq = await createdFaq.save();
    res.status(201).json(insertedFaq);
  } catch (err) {
    res.status(409).json(err);
  }
};

// GET ALL FAQS
const getFaqs = async (req, res) => {
  try {
    const faqs = await faqModel.find().limit(34);

    res.status(200).json(faqs);
  } catch (err) {
    res.status(404).send(err);
  }
};

// GET SINGLE FAQ
const getFaq = async (req, res) => {
  try {
    const _id = req.params.faqId;
    const faq = await faqModel.findById(_id);

    res.status(200).json(faq);
  } catch (err) {
    res.status(404).json(err);
  }
};

// GET USER FAQS REQUESTS
const userFaqs = async (req, res) => {
  try {
    const userAllFaqs = await faqModel.find({
      createdBy: req.user.email,
    });

    res.status(200).json(userAllFaqs);
  } catch (err) {
    res.status(404).send(err);
  }
};

// DELETE THE FAQ
const deleteFaq = async (req, res) => {
  try {
    const deletedFaq = await faqModel
      .findByIdAndDelete(req.params.faqId)
      .exec();

    res.status(200).json(deletedFaq);
  } catch (err) {
    res.status(404).send(err);
  }
};

// UPDATE A FAQ
const updateFaq = async (req, res) => {
  const faq = req.body;

  try {
    const _id = req.params.serviceId;

    const updatedFaq = await faqModel.findByIdAndUpdate(
      _id,
      { ...faq },
      { new: true }
    );

    res.status(204).json(updatedFaq);
  } catch (err) {
    res.status(409).json(err);
  }
};

module.exports = {
  createFaq,
  getFaqs,
  getFaq,
  updateFaq,
  deleteFaq,
  userFaqs,
};
