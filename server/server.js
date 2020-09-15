const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Click Here <a href='/api/users'>Users</a>");
});
app.get("/api/users", (req, res) => {
  res.header("Content-Type", "application/json");

  res.send(
    JSON.stringify([
      { id: 1, username: "orelh", email: "orel@outlook.com" },
      { id: 2, username: "mia", email: "mia@gmail.com" },
      { id: 3, username: "noa", email: "noa@gmail.com" },
      { id: 4, username: "tomer", email: "tomer@gmail.com" },
    ])
  );
});

app.listen(3000, () => console.log("Listening on port 3000"));

app.post("/login", (req, res) => {
  console.log(req.body);
});
