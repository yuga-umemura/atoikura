import Link from "next/link";

export function GlobalNav() {
  return (
    <nav className="flex items-center gap-4 text-sm">
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/expenses">Expenses</Link>
    </nav>
  );
}
