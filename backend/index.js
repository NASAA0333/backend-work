const express = require("express");
const fs = require("node:fs");
const app = express();
const cors = require("cors");

const port = 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/movies", (req, res) => {
  const data = fs.readFileSync("data/movies.json", "utf8");
  const movies = JSON.parse(data);
  res.json(movies);
});

app.get("/movie/details", (req, res) => {
  //read one movie
});

app.get("/movies/create", (req, res) => {
  console.log(req.movies);

  // const name = req.query.name
  const { name } = req.query;

  // 1.file json from file
  const data = fs.readFileSync("data/movies.json", "utf8");
  const movies = JSON.parse(data);

  // 2. push to json array
  movies.push({
    id: Date.now(),
    name,
  });

  // 3. write json to file
  const moviesString = JSON.stringify(movies, null, 4);
  fs.writeFileSync("data/movies.json", moviesString);

  res.json({ message: "Success" });
});

app.get("/movies/update", (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
