const ContactsService = require("./contacts.service.js");

class ContactsController {
  constructor() {
    // on instancie service pour utiliser les méthodes
    this.ContactsService = new ContactsService();
  }

  findAll = async (req,res) => {
    const contacts = await this.ContactsService.findAll();
    return res.send(contacts);
  }

  findOne = async (req,res) => {
    const id = req.params.id;
    const contacts = await this.ContactsService.findOne(id);
    return res.send(contacts);
  }
}

module.exports.ContactsController = ContactsController;
