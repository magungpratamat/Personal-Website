const express = require("express");
const port = 5000;
const { calculateDuration } = require("./src/assets/js/blog");
const dbPool = require("./src/connection/index");
// import sequelize config
const { development } = require("./src/config/config.json");
const { Sequelize, QueryTypes } = require("sequelize");
const SequelizePool = new Sequelize(development);

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
// console.log(data)
// function routing
// function home(req, res) {
//   res.render("index");
// }
// orm
// function home(req, res) {
//   dbPool.connect((err, client, done)=>{
//     if(err) throw err

//     client.query("SELECT * FROM tb_users",(err,result)=>{
//       done()
//       if(err) throw err

//       res.status(200).json(result)
//     })
//   })
// }
// sequelize
async function home(req, res) {
  try {   
    const query = await SequelizePool.query(`SELECT * FROM users`,{type:QueryTypes.SELECT})
    res.render("index");
  } catch (erorr) {
    throw erorr;
  }
}

function contact(req, res) {
  res.render("contact");
}

function testimonial(req, res) {
  res.render("task9");
}

async function blogDetail(req, res) {
  try {
    const { id } = req.params;
    const query = await SequelizePool.query(`SELECT * FROM blogs WHERE id= ${id}`)
    const dataDetail = query[0];
    res.render("blog-detail", {query:dataDetail});
  } catch (erorr) {
    throw erorr;
  }
}


async function addBlog(req, res) {
  try {
    const query = await SequelizePool.query(`SELECT * FROM blogs`,{type:QueryTypes.SELECT})
    const data = query;
    res.render("add-blog",{data});
  } catch (erorr) {
    throw erorr;
  }
}

async function handlePostBlog(req, res) {
  try {
    const {
      title,
      content,
      start_date,
      end_date,
      nodejs_checked,
      python_checked,
      php_checked,
      golang_checked,
      img,
    } = req.body;
    // const duration = calculateDuration(new Date(start_date), new Date(end_date));
    //  ambil data di global lalu di push
    const query = await SequelizePool.query(`INSERT INTO blogs(title, content,"iconJs", "iconPython", "iconPhp", "iconGolang","img", "createdAt", "updatedAt" )
    VALUES ('${title}','${content}','${nodejs_checked}','${python_checked}','${php_checked}','${golang_checked}','${img}','${start_date}', '${end_date}')`)
    res.redirect("/add-blog");
  } catch (erorr) {
    throw erorr;
  }
}

async function handleDeleteBlog(req, res) {
  try {
    const {id} = req.params
    await SequelizePool.query(`DELETE FROM blogs WHERE id= ${id}`)
    // await SequelizePool.query(`ALTER SEQUENCE blogs_id_seq RESTART WITH 1;`)
    res.redirect("/add-blog");
  } catch (erorr) {
    throw erorr;
  }
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
  res.redirect("/add-blog");
}

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
