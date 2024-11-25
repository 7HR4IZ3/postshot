import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Express JS")
});

router.get("/privacy-policy", function (req, res, next) {
  res.send(`
    <h1>Privacy Policy</h1>
    <p>This is a privacy policy.</p>
    <p>You can find more information about our privacy policy on our website.</p>

    <p>If you have any questions or concerns about our privacy policy, please contact us at info@example.com.</p>
    <p>Best regards,</p>
    <p>Example Inc.</p>
    <p>123 Example Street, Suite 456</p>
    <p>Example, CA 99999</p>
    <p>+1 (555) 555-5555</p>
    <p>www.example.com</p>
  `);
});

router.get("/terms-of-service", function (req, res, next) {
  res.send(`
    <h1>Terms of Service</h1>
    <p>This is a terms of service.</p>
    <p>You can find more information about our terms of service on our website.</p>

    <p>If you have any questions or concerns about our terms of service, please contact us at info@example.com.</p>
    <p>Best regards,</p>
    <p>Example Inc.</p>
    <p>123 Example Street, Suite 456</p>
    <p>Example, CA 99999</p>
    <p>+1 (555) 555-5555</p>
    <p>www.example.com</p>
  `);
});

export default router;
