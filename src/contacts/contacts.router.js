const Router = require("express");
const contactsRouter = Router();
// on appelle notre controller et on l'instancie
const {ContactsController} = require("./contacts.controller.js");
const contactsController = new ContactsController();

contactsRouter.get("/", contactsController.findAll);
contactsRouter.get("/:id", contactsController.findOne);
contactsRouter.post("/", contactsController.create);









module.exports = contactsRouter
