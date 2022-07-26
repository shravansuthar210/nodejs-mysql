const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const route = require("./crudOperation");
const port = 3000;


app.use(express.static('public'))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(fileUpload({
  createParentPath: true
}));
app.use("/crud", route);

app.post("/uploadImg", (req, res) => {
  console.log(req);
  if (!req.files) {
    res.send("No file upload");
  }
  console.log(req.files);
  const file = req.files.myfile;
  
  const path = __dirname + "/Files/" + file.name;
  file.mv(path, (err) => {
    if (err) {
      return res.send(err);
    }
    return res.send("uploaded");
  });
});

app.get("/", (req, res) => {
  res.render("index")
});

app.listen(port, () => {
  console.log("server start");
});
