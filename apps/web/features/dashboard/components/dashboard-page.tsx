import { Card } from "@/components/ui/card";
import { BudgetSummary } from "@/features/budget/components/budget-summary";

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl font-bold">ダッシュボード</h1>
        <p className="text-sm text-muted-foreground">
          今月あといくら使えるかを確認できます
        </p>
      </section>

      <BudgetSummary />

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="text-sm text-muted-foreground">今月あと使える</h2>
          <p className="mt-2 text-3xl font-bold">¥42,300</p>
        </Card>
      </div>
    </div>
  );
}
