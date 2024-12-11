// pages/api/expenses.js
import db from "../../utils/firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const expensesRef = collection(db, "expenses");
      const snapshot = await getDocs(expensesRef);
      const expenses = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        date: doc.data().date.toDate().toISOString() // Convert Firestore Date to string
      }));

      res.status(200).json(expenses);
    } catch (error) {
      res.status(500).json({ message: "Error fetching expenses", error });
    }
  } else if (req.method === "POST") {
    try {
      const { description, amount, date } = req.body;
      const newExpense = { description, amount, date: new Date(date) };
      await addDoc(collection(db, "expenses"), newExpense);

      res.status(200).json({ message: "Expense added successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error adding expense", error });
    }
  }
}
