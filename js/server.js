const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 2000;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/submit", (req, res) => {
  // Handle form submission here (e.g., send email, save to database)
  console.log("Received form submission:", req.body);
  // Assuming success
  res.sendStatus(200);
});

app.get("/thank-you.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "thank-you.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
