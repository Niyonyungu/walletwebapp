import React, { useState } from 'react';

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2024-06-01', description: 'Groceries', amount: -50.00, category: 'Food', account: 'Bank Account' },
    { id: 2, date: '2024-06-02', description: 'Salary', amount: 2000.00, category: 'Income', account: 'Bank Account' },
    { id: 3, date: '2024-06-03', description: 'Restaurant', amount: -30.00, category: 'Food', account: 'Cash' },
  ]);

  const [newTransaction, setNewTransaction] = useState({
    description: '',
    amount: '',
    category: '',
    account: '',
  });

  const handleInputChange = (e) => {
    setNewTransaction({ ...newTransaction, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e) => {
    setNewTransaction({ ...newTransaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      id: transactions.length + 1,
      date: new Date().toISOString().split('T')[0],
      ...newTransaction,
      amount: parseFloat(newTransaction.amount),
    };
    setTransactions([...transactions, transaction]);
    setNewTransaction({ description: '', amount: '', category: '', account: '' });
  };

  return (
    <div className="p-2 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-[#0088ff] mb-6">Transactions</h1>
      <div className="flex flex-row gap-2 justify-between">
        <div className="rounded-lg w-full border bg-white shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="text-2xl font-semibold leading-none tracking-tight">Add Transaction</div>
          </div>
          <div className="p-6 pt-0">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="description">Description</label>
                <input
                  className="w-full p-2 border rounded-md"
                  id="description"
                  name="description"
                  value={newTransaction.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="amount">Amount</label>
                <input
                  className="w-full p-2 border rounded-md"
                  id="amount"
                  name="amount"
                  type="number"
                  step="0.01"
                  value={newTransaction.amount}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="category">Category</label>
                <select
                  className="w-full p-2 border rounded-md"
                  id="category"
                  name="category"
                  value={newTransaction.category}
                  onChange={handleSelectChange}
                  required
                >
                  <option value="">Select category</option>
                  <option value="Food">Food</option>
                  <option value="Transport">Transport</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Income">Income</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="account">Account</label>
                <select
                  className="w-full p-2 border rounded-md"
                  id="account"
                  name="account"
                  value={newTransaction.account}
                  onChange={handleSelectChange}
                  required
                >
                  <option value="">Select account</option>
                  <option value="Bank Account">Bank Account</option>
                  <option value="Cash">Cash</option>
                  <option value="Mobile Money">Mobile Money</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#0088ff] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Add Transaction
              </button>
            </form>
          </div>
        </div>

        <div className="rounded-lg border bg-white text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="text-2xl font-semibold leading-none tracking-tight">Recent Transactions</div>
          </div>
          <div className="p-6 pt-0 relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead>
                <tr className="border-b">
                  <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">Date</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">Description</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">Amount</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">Category</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">Account</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">{transaction.date}</td>
                    <td className="p-4">{transaction.description}</td>
                    <td className={`p-4 ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                      Rwfs {Math.abs(transaction.amount).toFixed(2)}
                    </td>
                    <td className="p-4">{transaction.category}</td>
                    <td className="p-4">{transaction.account}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;