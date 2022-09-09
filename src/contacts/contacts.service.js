const ContactsRepo = require("./contacts.repo.js");

class ContactsService {
  constructor() {
    // ici on instancie ContactRepo pour utiliser les méthodes qui s'y trouvent
    this.ContactsRepo = new ContactsRepo();
  }

  findAll() {
    return this.ContactsRepo.findAll();
  }

  findOne(id) {
    return this.ContactsRepo.findOne(id)
  }
}

module.exports = ContactsService;
