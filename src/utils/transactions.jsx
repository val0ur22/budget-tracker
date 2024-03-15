export const addTransaction = (text, amount) => {
  const transaction = { id: ++id, text, amount };
  return transaction;
};
