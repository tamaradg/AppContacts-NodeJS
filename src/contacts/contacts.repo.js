// on appelle le module fs pour lire le json
const fs = require("fs/promises");
// ici on met les curly braquet car on importe une fonction
const {randomId} = require("../utils/random-id.js")


class ContactsRepo {

  async findAll() {
    const contacts = JSON.parse(await fs.readFile("./contacts.json", "utf-8"));
    return contacts
  }
  async findOne(id) {
    const contacts = JSON.parse(await fs.readFile("./contacts.json", "utf-8"));
    return contacts[id];
  }
  async createOne(obj) {
    const contacts = JSON.parse(await fs.readFile("./contacts.json", "utf-8"));
    const id = randomId();
    contacts[id] = obj;
    await fs.writeFile("./contacts.json", JSON.stringify(contacts));
  }
  async updateOne(id,obj) {
    const contacts = JSON.parse(await fs.readFile("./contacts.json", "utf-8"));
    contacts[id] = {id,obj};
    await fs.writeFile("./contacts.json", JSON.stringify(contacts));
  }

  async deleteOne(id) {
    const contacts = JSON.parse(await fs.readFile("./contacts.json", "utf-8"));
    delete contacts[id];
    await fs.writeFile("./contacts.json", JSON.stringify(contacts));
  }
}

module.exports = ContactsRepo;
