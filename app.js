//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mysql = require("mysql");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

const con = mysql.createConnection({
  host: "localhost",
  user: "newuser1",
  password: "password",
  database: "myDb"
});

con.connect(function(err){
  if (err) {
    console.log(err);
  }
});

//con.end();

app.route("/articles")
  .get(function(req, res){

  con.query("SELECT * FROM articles_tbl;", function(err, results){

    if(err){
      res.send(err);
    } else {
      res.send(results);
    }
  });
})
  .post(function(req, res){
    console.log("POST article");
    const title = req.body.title;
    const content = req.body.content;

    const sql = "INSERT INTO articles_tbl(title, content) VALUES ('" + title + "', '" + content + "');";
    console.log(sql);
    con.query(sql, function(err, results){

      if(err){
        res.send(err);
      } else {
        res.send("inserted 1 entry");
      }
    });
  })
  .delete(function(req, res){
    console.log("DELETE article");
    const id = req.query.id;
    console.log(id);
    const sql = "DELETE FROM articles_tbl WHERE _id = '" + id + "';";
    console.log(sql);
    con.query(sql, function(err, results){

      if(err){
        res.send(err);
      } else {
        res.send("deleted 1 entry");
      }
    });
  });


app.listen(3000, function(){
  console.log("Server started on port 3000");
});
