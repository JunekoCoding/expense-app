import { collection, getDocs, addDoc } from "firebase/firestore";
import db from './firestore';

// Fetch expenses from Firestore
export async function getExpenses() {
  try {
    const expensesCollection = collection(db, "expenses");
    const snapshot = await getDocs(expensesCollection);
    const expensesList = snapshot.docs.map(doc => ({
      id: doc.id,
      description: doc.data().description,
      amount: doc.data().amount,
      date: doc.data().date.toDate().toISOString(), // Convert Firestore Date to string
    }));
    return expensesList;
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return [];
  }
}

// Add new expense to Firestore
export async function addExpense(expense) {
  try {
    const expensesCollection = collection(db, "expenses");
    await addDoc(expensesCollection, {
      description: expense.description,
      amount: expense.amount,
      date: expense.date, // Date is already in string format
    });
  } catch (error) {
    console.error("Error adding expense:", error);
  }
}