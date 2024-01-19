const express = require("express");
const port = 5000;
const {calculateDuration} = require("./src/assets/js/blog")

const app = express();
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
// app.get("/blog", blog);
app.get("/testimonial", testimonial);
app.get("/blog-detail/:id", blogDetail);
app.get("/add-blog", addBlog);
app.post("/add-blog", handlePostBlog);
app.get("/delete/:id", handleDeleteBlog);
app.get("/edit-blog/:id", editBlog);
app.post("/edit-blog/:id", handleEditBlog);

data = [];
// function routing
function home(req, res) {
  res.render("index");
}

function contact(req, res) {
  res.render("contact");
}

function testimonial(req, res) {
  res.render("task9");
}

function blogDetail(req, res) {
  const { id } = req.params;
  const dataDetail = data[id];
  res.render("blog-detail", { data: dataDetail });
}

function addBlog(req, res) {
  res.render("add-blog", { data });
}
  
function handlePostBlog(req, res) {
  const { title, content, start_date, end_date, nodejs_checked, python_checked, php_checked, golang_checked, img} = req.body;
  const duration = calculateDuration(new Date(start_date), new Date (end_date));
  //  ambil data di global lalu di push
  
  data.push({ title, content, start_date, end_date, nodejs_checked, python_checked, php_checked, golang_checked, duration,img });
  res.render("add-blog", { data });
}

function handleDeleteBlog(req, res) {
  const { id } = req.params;
  data.splice(id, 1);
  res.redirect("/add-blog");
}

function editBlog(req, res) {
  const { id } = req.params;
  const dataDetail = data[id];
  res.render("edit-blog", { data: dataDetail, id });
}

function handleEditBlog(req, res) {
  const { title, content, img } = req.body;
  const { id } = req.params;
  data[id] = { title, content, img };
  res.redirect("/add-blog")
}

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
