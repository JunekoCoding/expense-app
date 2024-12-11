import ExpenseTracker from '../components/ExpenseTracker';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>
      <ExpenseTracker />
    </main>
  );
}
