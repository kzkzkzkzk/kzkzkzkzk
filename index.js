var express = require("express");
const { GetListByKeyword } = require("./youtube");

var app = express();

app.get("/", (req, res) => {
  GetListByKeyword(req.query.q)
    .then((result) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
