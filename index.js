require("dotenv").config();

const PORT = process.env.PORT;
const express = require("express");
const app = express();
const accounts = require("./api/accounts");
// const hosts = require("./api/Hosts");
// const artists = require("./api/artists");
// const appliedGigs = require("./api/appliedGigs");
// const createGigs = require("./api/createGigs");
// const notification = require("./api/notification");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/products", products);
// app.use("/customers", customers);
// app.use("/Hosts", hosts);
app.use("/accounts", accounts);
// app.use("/artists", artists);
// app.use("/appliedGigs", appliedGigs);
// app.use("/createGigs", createGigs);
// app.use("/notification", notification);

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
