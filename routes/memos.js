const router = require("express").Router();

const { postMemo, getMemo } = require("../controllers/memoController.js");

router.get("/memo", getMemo);
router.post("/memo", postMemo);

module.exports = router;
