'use client';

import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

export default function ExpenseTracker() {
    const [expenses, setExpenses] = useState([]);
    
    const addExpense = (expense) => {
        setExpenses([...expenses, { ...expense, id: Date.now() }]);
    };

    return (
        <div className="space-y-8">
            <ExpenseForm onAddExpense={addExpense} />
            <ExpenseList expenses={expenses} />
        </div>
    );
}

