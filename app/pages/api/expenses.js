// pages/api/expenses.js
import { getExpenses, addExpense } from "../../utils/expenses"; // Firebase functions

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const expenses = await getExpenses(); // Get expenses from Firebase
      res.status(200).json(expenses); // Return the expenses as JSON
    } catch (error) {
      res.status(500).json({ message: "Error fetching expenses", error });
    }
  } else if (req.method === "POST") {
    try {
      const { description, amount, date } = req.body; // Extract the data from the POST body
      const newExpense = { description, amount, date };
      await addExpense(newExpense); // Add the new expense to Firebase
      res.status(200).json({ message: "Expense added successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error adding expense", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" }); // For any unsupported methods
  }
}
