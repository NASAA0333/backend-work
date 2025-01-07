const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/movies", (req, res) => {
  const data = fs.readFileSync("data/movies.json", "utf8");
  const movies = JSON.parse(data);
  res.json(movies);
});

app.get("/movies/create", (req, res) => {
  // 1.file json from file
  const data = fs.readFileSync("data/movies.json", "utf8");
  const movies = JSON.parse(data);

  // 2. push to json array
  movies.push({ id: 5, name: "Red One " });

  // 3. write json to file
  const moviesString = JSON.stringify(movies);
  fs.writeFileSync("data/movies.json", moviesString);

  res.json({ message: "Success" });
});
