import React, { useState } from 'react';

interface DepositFormProps {
  onSubmit: (data: { name: string; username: string; amount: number }) => void;
}

export const DepositForm: React.FC<DepositFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!name || !username || !amount) {
      setError('All fields are required.');
      return;
    }
    const numAmount = Number(amount);
    if (isNaN(numAmount) || numAmount < 10 || numAmount > 500) {
      setError('Deposit amount must be between $10 and $500.');
      return;
    }
    onSubmit({ name, username, amount: numAmount });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-slate-800/90 to-teal-900/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border-2 border-yellow-400/30 max-w-md mx-auto shadow-2xl"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6 text-center">
        Deposit Details
      </h2>
      <div className="mb-4">
        <label className="block text-cyan-200 font-medium mb-2" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full px-4 py-2 rounded-xl bg-slate-900/70 text-white border border-cyan-400/30 focus:border-yellow-400 focus:outline-none"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-cyan-200 font-medium mb-2" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full px-4 py-2 rounded-xl bg-slate-900/70 text-white border border-cyan-400/30 focus:border-yellow-400 focus:outline-none"
          placeholder="Preferred username"
        />
      </div>
      <div className="mb-4">
        <label className="block text-cyan-200 font-medium mb-2" htmlFor="amount">
          Deposit Amount ($10 - $500)
        </label>
        <input
          id="amount"
          type="number"
          min={10}
          max={500}
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="w-full px-4 py-2 rounded-xl bg-slate-900/70 text-white border border-cyan-400/30 focus:border-yellow-400 focus:outline-none"
          placeholder="Enter deposit amount"
        />
      </div>
      {error && (
        <div className="mb-4 text-red-400 text-sm text-center font-medium">
          {error}
        </div>
      )}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 font-bold py-3 rounded-xl shadow-lg hover:from-yellow-500 hover:to-orange-500 transition-all duration-300"
      >
        Continue to Deposit
      </button>
    </form>
  );
};
