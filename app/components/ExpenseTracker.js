import { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);

  // Fetch expenses from the API
  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await fetch("/api/expenses");
      const data = await response.json();
      setExpenses(data);
    };
    fetchExpenses();
  }, []);

  // Add an expense to Firestore through the API
  const addExpense = async (expense) => {
    const response = await fetch("/api/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense),
    });

    if (response.ok) {
      setExpenses((prevExpenses) => [...prevExpenses, expense]);
    } else {
      console.error("Failed to add expense");
    }
  };

  return (
    <div className="space-y-8">
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}
