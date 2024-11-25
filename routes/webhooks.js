import express from "express";
import fbRouter from "./webhooks/fb.js";

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});

router.use("/fb", fbRouter);

export default router;