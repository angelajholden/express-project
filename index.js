const express = require("express");
const path = require("path");
const ejs = require("ejs");
const members = require("./Members");
const logger = require("./middleware/logger");

const app = express();

//Init Middleware
//app.use(logger);

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Declare views for ejs
app.set("view engine", "ejs");

//Routes
//Home page
app.get("/", (req, res) => {
  res.render("index", {
    title: "Home page",
    members,
  });
});
//About page
app.get("/about", (req, res) => {
  res.render("about");
});

//Members API Routes
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
