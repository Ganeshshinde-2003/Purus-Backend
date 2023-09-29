const express = require("express");
const Contact = require("../modules/contact");
const Candidates = require("../modules/candidate");

const router = express.Router();

router.post("/api/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, number, company, message } = req.body;

    let contact = new Contact({
      firstName,
      lastName,
      email,
      number,
      company,
      message,
    });

    user = await contact.save();
    res.status(200).json({ msg: "Succesfully submitted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/api/candidate", async (req, res) => {
  try {
    const { firstName, lastName, email, number, portfolio, cv, message } =
      req.body;

    let contact = new Candidates({
      firstName,
      lastName,
      email,
      number,
      portfolio,
      cv,
      message,
    });

    user = await contact.save();
    res.status(200).json({ msg: "Succesfully submitted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// Get all contact info
router.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/api/candidates", async (req, res) => {
  try {
    const candidates = await Candidates.find();
    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
