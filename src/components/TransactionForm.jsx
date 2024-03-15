import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TransactionForm = ({ onAddTransaction, isDarkMode }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("income");

  const onSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    onAddTransaction({ id, text, amount: +amount, type });
    setText("");
    setAmount(0);
    setType("income");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-row gap-4 items-center justify-center"
    >
      <input
        type="text"
        placeholder="Enter transaction..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={
          "p-3 border rounded-md focus:outline-none focus:border-blue-500 text-black"
        }
      />
      <input
        type="number"
        placeholder="Enter amount..."
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className={
          "p-3 border rounded-md focus:outline-none focus:border-blue-500 text-black"
        }
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="p-3 border rounded-md focus:outline-none focus:border-blue-500 text-black"
      >
        <option value="income">Income</option>
        <option value="loss">Loss</option>
      </select>
      <button
        type="submit"
        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
