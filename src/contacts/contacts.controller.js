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

  createOne = async (req, res) => {
    try {
      await this.ContactsService.createOne(req.body);
      res.send("Contact créé avec succès")
    } catch (error) {
      res.sendStatus(404);
      console.log(error);
    }
  }

  updateOne = async (req,res) => {
    try {
      const id = req.params.id;
      await this.ContactsService.updateOne(id, req.body)
      res.send("Contact mis à jour avec succès");
    } catch (error) {
      res.sendStatus(404);
      console.log(error);
    }
  }

  deleteOne = async (req, res) => {
    try {
      const id = req.params.id;
      await this.ContactsService.deleteOne(id);
      res.send("Contact supprimé");
    } catch (error) {
      res.sendStatus(404);
      console.log(error);
    }
  }
}

module.exports.ContactsController = ContactsController;
