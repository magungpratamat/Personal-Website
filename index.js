const express = require("express");
const app = express();
const port = 5000;

// use handlebars for template engine
app.set("view engine", "hbs");
app.set("views", "src/views");

// static files
app.use("/assets", express.static("src/assets"));
// body parser
app.use(express.urlencoded({ extended: false })); 

// routing
app.get("/", home);
app.get("/contact", contact);
app.get("/blog", blog);
app.get("/testimonial", testimonial);
app.get("/blog-detail/:id", blogDetail);

// function routing
function home(req, res) {
  res.render("index");
}

function contact(req, res) {
  res.render("contact");
}

function blog(req, res) {
  res.render("blog");
}

function testimonial(req, res) {
  res.render("task9");
}

function blogDetail(req, res) {
  res.render("blog-detail");
}
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
