import React from "react";

const TransactionList = ({ transactions, onDeleteTransaction, isDarkMode }) => {
  return (
    <div className="flex flex-col items-center mt-8">
      <h3 className="font-sans font-hanken-grotesk font-bold">Transaction History</h3>
      <ul className="mt-4 w-full max-w-lg">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className="flex justify-between items-center py-2 border-b border-gray-300"
          >
            <div>
              <span className={`font-${isDarkMode ? 'white' : 'black'}`}>{transaction.text}</span>
              <span className={`font-${isDarkMode ? 'white' : 'black'}`}>({transaction.amount})</span>
            </div>
            <div>
              <span className={`font-${isDarkMode ? 'white' : 'black'}`}>{transaction.type}</span>
              <button
                onClick={() => onDeleteTransaction(transaction.id)}
                className="ml-4 px-3 py-1 bg-green-500 rounded-md focus:outline-none text-white hover:bg-green-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
