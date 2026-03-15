import { Card } from "@/components/ui/card";

export function BudgetSummary() {
  return (
    <Card>
      <h2 className="text-lg font-semibold">今月の予算サマリー</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        収入、固定費、残り予算のサマリーをここに表示します。
      </p>
    </Card>
  );
}
