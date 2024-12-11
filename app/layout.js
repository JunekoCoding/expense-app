import "./globals.css";

export const metadata = {
  title: "Expense App",
  description: "Expense App project for Web Dev 2.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
