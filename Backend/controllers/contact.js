const Contact = require("../models/contact");

async function createContact(req, res) {
  try {
    const contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    await contact.save();
    res.json({ message: "Contact created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function showContact(req,res){
    const contact = await Contact.find({});
    console.log(contact);
    return res.json(contact);
}

module.exports = { createContact,showContact };