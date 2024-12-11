import { collection, getDocs, addDoc } from "firebase/firestore";
import db from "../utils/firestore";  // Import Firestore instance

export async function getExpenses() {
  try {
    const snapshot = await getDocs(collection(db, "expenses"));
    const expensesList = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return expensesList;
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return []; // Return an empty array if there's an error
  }
}

export async function addExpense(expense) {
  try {
    await addDoc(collection(db, "expenses"), expense);  // Add the expense to Firestore
  } catch (error) {
    console.error("Error adding expense:", error);
  }
}