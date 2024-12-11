'use client';

import { useState, useEffect } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import { getExpenses, addExpense } from '../utils/expenses';

export default function ExpenseTracker() {
    const [expenses, setExpenses] = useState([]);

    // Fetch expenses from Firestore on component mount
    useEffect(() => {
        async function fetchExpenses() {
            const data = await getExpenses();
            setExpenses(data);
        }
        fetchExpenses();
    }, []);

    // Add new expense (updates Firestore and local state)
    const handleAddExpense = (expense) => {
        setExpenses([...expenses, { ...expense, id: Date.now() }]); // Optimistically update UI
        addExpense(expense); // Send to Firestore
    };

    return (
        <div className="space-y-8">
            <ExpenseForm onAddExpense={handleAddExpense} />
            <ExpenseList expenses={expenses} />
        </div>
    );
}
