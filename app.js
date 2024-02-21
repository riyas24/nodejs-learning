const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const ExpressHbs = require("express-handlebars");

// routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// cors
app.use(cors({ origin: "*" }));

// routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// static  files
app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist"))
);

// template engine config
app.engine(
  "hbs",
  ExpressHbs({
    extname: "hbs",
    defaultLayout: "main-layout",
    layoutsDir: "views/layout/",
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

app.listen(8000, () => {
  console.log("Server running on 8000");
});

// page not found handling
app.use((req, res, next) => {
  res.status(404).render("404", { docTitle: "Page Not Found", layout: false });
});
