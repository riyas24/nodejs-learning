const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");

const app = express();
// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
// routes
app.use(adminRoutes);
app.use(shopRoutes);

app.listen(8000, () => {
  console.log("Server running on 8000");
});

// page not found handling
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
