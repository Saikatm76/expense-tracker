import React, { useState, useEffect } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/api/transactions");
    const data = await res.json();
    setTransactions(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTransaction = { desc, amount: parseFloat(amount) };
    await fetch("http://localhost:5000/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTransaction),
    });
    setDesc("");
    setAmount("");
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Expense Tracker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Add Transaction</button>
      </form>
      <ul>
        {transactions.map((t, i) => (
          <li key={i}>
            {t.desc}: ₹{t.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
