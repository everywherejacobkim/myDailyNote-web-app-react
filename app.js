const express = require("express");
const app = express();

const connected = require("./connection.js");
const PORT = process.env.PORT || 8080;

connected.then(() => {
  console.log("MongoDB connected");
  const server = app.listen(PORT, () => {
    console.log("Listening on port 8080");
  });
});

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require("./routes/index.js");

app.use("/", router);

const Memo = require("./models/Memo.js");

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://eloquent-begonia-351848.netlify.app/note"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/memo", (req, res) => {
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
});

app.get("/memo", (req, res) => {
  Memo.find({})
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => res.status(500).send(error));
});
