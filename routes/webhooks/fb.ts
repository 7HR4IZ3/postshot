import express from "express";
const router = express.Router();

/* GET handle webhok callback */
router.get("/", function (req, res) {
  console.log(req.query);

  if (req.query["hub.verify_token"] !== process.env.FB_WEBHOOK_VERIFY_TOKEN) {
    res.sendStatus(403);
  } else {
    res.send(req.query["hub.challenge"]);
  }
});

router.post("/", function (req, res) {
  console.log(req.body.entry);

  for (const entry of req.body.entry) {
    for (const change of entry.changes) {
      if (change.field === "mention") {
        console.log(change.value);
      }
    }
  }

  res.sendStatus(200);
});

export default router;
