/* 
All codes related to the post:
Their URL: localhost:3000/posts/...
*/
const database = require("../fake-db");
const express  = require("express");
const router   = express.Router();

// Creating a post:
// Step 1- Access to the form in the Browser
router.get("/create", (req, res) => {
  res.render("posts/createPost");  
});

// Step 2- Sending form's data to the Server by clicking the "Create Post" button
router.post("/create", (req, res) => {

  const { title, link, creator, description, subgroup } = req.body;
  
  database.addPost(title, link, creator, description, subgroup);

  res.redirect("/");
});

module.exports = router;
