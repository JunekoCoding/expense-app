import { Expense } from './ExpenseTracker';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface ExpenseListProps {
  expenses: Expense[];
}

export function ExpenseList({ expenses }: ExpenseListProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Expenses</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Description</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>{expense.description}</TableCell>
              <TableCell>${expense.amount.toFixed(2)}</TableCell>
              <TableCell>{expense.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}