// pages/api/expenses.js
import { getExpenses, addExpense } from "../../utils/expenses";  // Your firestore operations

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const expenses = await getExpenses();  // Firestore logic for getting expenses
      res.status(200).json(expenses);  // Return expenses as JSON
    } catch (error) {
      res.status(500).json({ message: "Error fetching expenses", error });
    }
  } else if (req.method === "POST") {
    try {
      const { description, amount, date } = req.body;  // Extract data from the request body
      const newExpense = { description, amount, date };
      await addExpense(newExpense);  // Add expense to Firestore
      res.status(200).json({ message: "Expense added successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error adding expense", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
