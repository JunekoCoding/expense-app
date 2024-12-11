import fs from 'fs/promises';
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'expenses.json');

export async function getExpenses() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

export async function addExpense(expense) {
  const expenses = await getExpenses();
  expenses.push(expense);
  await fs.writeFile(DATA_FILE, JSON.stringify(expenses, null, 2));
}