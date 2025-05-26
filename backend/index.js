const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let transactions = [];

app.get("/api/transactions", (req, res) => {
  res.json(transactions);
});

app.post("/api/transactions", (req, res) => {
  const transaction = req.body;
  transactions.push(transaction);
  res.status(201).json(transaction);
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
