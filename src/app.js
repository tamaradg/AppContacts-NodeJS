//on fait appel au framework express
const express = require("express");
// on appelle nos routes
const contactsRouter = require("./contacts/contacts.router.js");
// notre app utilise express
const app = express();
// on parse les request JSON pour les mettre dans le req.body
app.use(express.json());

// chemin principal de notre app
app.use("/api/contacts",contactsRouter);
const PORT = 3000;


app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});
