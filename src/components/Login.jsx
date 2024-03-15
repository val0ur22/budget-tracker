import React, { useState } from "react";

const Login = ({ onLogin, toggleDarkMode, isDarkMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="texfont-sans font-hanken-grotesk mb-4">Please login to continue</h2>
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
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 px-4 py-2 border border-gray-300 rounded-md text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-2 px-4 py-2 border border-gray-300 rounded-md text-black"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
