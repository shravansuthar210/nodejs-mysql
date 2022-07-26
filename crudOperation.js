const express = require("express");
const connection = require("./databaseConnections");

const user = require("./Model");

const route = express.Router();

route.post("/create", (req, res) => {
  const body = req.body;
  console.log(body);
  const userData = {
    EID: body.eid,
    PASSWORD: body.password,
  };
  user
    .create(userData)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: err.message,
      });
    });
});

route.post("/read", (req, res) => {
  const body = req.body;
  const condition = { EID: body.eid };
  user
    .findOne({
      where: condition,
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
});
route.post("/update", (req, res) => {
  const body = req.body;
  const UpdateData = { PASSWORD: body.password };
  const condition = { EID: body.eid };
  user
    .update(UpdateData, {
      where: condition,
    })
    .then((result) => {
      res.send({ result });
    })
    .catch((err) => {
      res.status(500).send({ ERROR: err });
    });
});
route.post("/delete", (req, res) => {
  const body = req.body;
  const condition = { EID: body.eid };
  console.log(condition);
  user
    .destroy({ where: condition })
    .then((result) => {
      res.send({ result });
    })
    .catch((err) => {
      res.status(500).send({ ERROR: err });
    });
});

module.exports = route;
