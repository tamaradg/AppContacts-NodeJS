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

  createOne(obj) {
    return this.ContactsRepo.createOne(obj);
  }

  async updateOne(id,obj) {
    const contacts = await this.ContactsRepo.findOne(id);
    return this.ContactsRepo.updateOne(id,obj);
  }

  async deleteOne(id) {
    const contacts = await this.ContactsRepo.findOne(id);
    return this.ContactsRepo.deleteOne(id);
  }
}

module.exports = ContactsService;
