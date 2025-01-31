const express = require("express");
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const port = process.env.PORT || 4000;

const app = express();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// middleware
app.use(express.json());

// const prompt = "Explain how AI works in short";

app.get("/crack-ai", async (req, res) => {
  const query = req.query?.prompt;
  let prompt = query || "Say Greets";

  console.log(prompt);

  const result = await model.generateContent(prompt + "in short");
  res.send(result.response.text());
});

app.get("/", (req, res) => {
  res.send("Ai Server is Running!");
});

app.listen(port, () => {
  console.log("Server is running on Port:", port);
});
