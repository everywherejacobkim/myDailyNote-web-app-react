const Memo = require("../models/Memo.js");

const postMemo = (req, res) => {
  let newMemo = new Memo({
    title: req.body.title,
    memo: req.body.memo,
  });
  newMemo
    .save()
    .then((result) => {
      res.json({
        data: newMemo,
        url: `/memo/${newMemo._id}`,
      });
    })
    .catch((error) => res.status(500).send(error));
};

const getMemo = (req, res) => {
  Memo.find({})
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => res.status(500).send(error));
};

module.exports = {
  postMemo,
  getMemo,
};
