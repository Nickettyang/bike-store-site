const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

// POST route to send email
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  // Set up Nodemailer
  const transporter = nodemailer.createTransport({
    service: "Gmail", // or another email service
    auth: {
      user: "nickettyang45@gmail.com",
      pass: "Nick250903", // Use environment variables for security
    },
  });

  const mailOptions = {
    from: "nickettyang45@gmail.com", // Sender address
    to: "nickettyang45@gmail.com", // Your email address
    subject: `Contact Form Submission from ${name}`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email.");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
