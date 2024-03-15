import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Login from "./components/Login";
import { v4 as uuidv4 } from "uuid";
import "./styles/tailwind.css";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = ({ email, password }) => {
    if (email === "valerie@example.com" && password === "oops") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid email or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleAddTransaction = ({ text, amount, type }) => {
    const id = uuidv4();
    setTransactions([...transactions, { id, text, amount, type }]);
  };

  const handleDeleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id),
    );
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark-theme" : "light"}`}>
      <h1 className="text-xl font-sans font-hanken-grotesk font-bold text-center py-4">
        Budget Tracker
      </h1>
      {isLoggedIn ? (
        <>

          <button
            onClick={toggleDarkMode}
            className={`absolute top-2 right-2 p-2 ${isDarkMode ? 'bg-gray-700 dark:bg-amber-500' : 'bg-amber-500 dark:bg-gray-700'} rounded-full`}
          >
            {isDarkMode ? (
              <span className={`material-icons ${isDarkMode ? 'text-white' : 'text-black dark:text-white'}`}>
                light_mode
              </span>
            ) : (
              <span className={`material-icons ${isDarkMode ? 'text-white' : 'text-black dark:text-white'}`}>
                dark_mode
              </span>
            )}
          </button>
          
          <TransactionForm onAddTransaction={handleAddTransaction} isDarkMode={isDarkMode} />
          <TransactionList
            transactions={transactions}
            onDeleteTransaction={handleDeleteTransaction}
          />
          <div className="mt-4">
            <button
              onClick={handleLogout}
              className="block mx-auto mb-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <Login onLogin={handleLogin} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      )}
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
