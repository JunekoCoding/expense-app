'use client';

import { useState } from 'react';

export default function ExpenseForm({ onAddExpense }) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description && amount && date) {
            onAddExpense({
                description,
                amount: parseFloat(amount),
                date,
            });
            setDescription('');
            setAmount('');
            setDate('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="description" className="block mb-2">Description</label>
                <input
                    id="description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div>
                <label htmlFor="amount" className="block mb-2">Amount</label>
                <input
                    id="amount"
                    type="number"
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div>
                <label htmlFor="date" className="block mb-2">Date</label>
                <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Add Expense</button>
        </form>
    );
}