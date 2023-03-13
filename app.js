// @author: Amir Armion
// @version: V.01

const database   = require("./fake-db");
const express    = require("express");
const app        = express();
const postRouter = require("./routers/postRouter.js");
const PORT       = 3000;

app.set("trust proxy", 1);
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));


// Shows a listing of the most recent 20 posts:
app.get("/", (req, res) => { 

  const allPosts = database.getPosts(20);

  res.render("posts/posts", { allPosts });
});


// All codes related to the post:
app.use("/posts", postRouter);



// app.get("/debug", (req, res) => {
//   db.debug();
//   res.redirect("/");
// });


app.listen(PORT, () =>
  console.log(`server should be running at http://localhost:${PORT}/`)
);
