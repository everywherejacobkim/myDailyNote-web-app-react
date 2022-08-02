const router = require("express").Router();

const memoRouter = require("./memos.js");

router.use("/memo", memoRouter);

module.exports = router;
