const express = require("express");
const app = express();
const path = require("path");

const PORT = 3030;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.use(express.static("public"));

app.listen(PORT, () => console.log(`Levantando servidor en puerto ${PORT}`));
