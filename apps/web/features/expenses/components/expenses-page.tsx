import { Card } from "@/components/ui/card";

const mockExpenses = [
  { id: 1, marchant: "コンビニ", amount: 540, category: "食費" },
  { id: 2, marchant: "カフェ", amount: 680, category: "カフェ" },
  { id: 3, marchant: "Amazon", amount: 2480, category: "日用品" },
];

export function ExpensesPage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl font-bold">支出一覧</h1>
        <p className="text-sm text-muted-foreground">
          取り込まれた支出を確認できます。
        </p>
      </section>

      <div className="space-y-3">
        {mockExpenses.map((expense) => (
          <Card key={expense.id}>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{expense.marchant}</p>
                <p className="text-sm text-muted-foreground">
                  {expense.category}
                </p>
              </div>
              <p className="font-semibold">
                ¥{expense.amount.toLocaleString()}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
