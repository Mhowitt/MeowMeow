const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const cors = require("cors")
const PORT = process.env.PORT || 5000;
const apiRouter  = require("./routers/api");

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(cors())

app.use('/api', apiRouter)

app.use((err, req, res, next) =>
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error" })
);

app.listen(PORT, function() {
  console.log("Listening on port " + PORT);
})