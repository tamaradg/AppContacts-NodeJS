const Router = require("express");
const contactsRouter = Router();
// on appelle notre controller et on l'instancie
const {ContactsController} = require("./contacts.controller.js");
const contactsController = new ContactsController();

contactsRouter.get("/", contactsController.findAll);
contactsRouter.get("/:id", contactsController.findOne);
contactsRouter.post("/", contactsController.createOne);
contactsRouter.put("/:id", contactsController.updateOne);
contactsRouter.delete("/:id", contactsController.deleteOne);

module.exports = contactsRouter
