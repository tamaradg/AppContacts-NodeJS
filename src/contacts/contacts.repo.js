// on appelle le module fs pour lire le json
const fs = require("fs/promises");

class ContactsRepo {

  async findAll() {
    const contacts = JSON.parse(await fs.readFile("./contacts.json", "utf-8"));
    return contacts
  }
  async findOne(id) {
    const contacts = JSON.parse(await fs.readFile("./contacts.json", "utf-8"));
    return contacts[id];
  }


}

module.exports = ContactsRepo;
