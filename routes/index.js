import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/privacy-policy", function (req, res, next) {
  res.render("privacy-policy", { title: "Privacy Policy" });
});

router.get("/terms-of-service", function (req, res, next) {
  res.render("terms-of-service", { title: "Terms of Service" });
});

export default router;
