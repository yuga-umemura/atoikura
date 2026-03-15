import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold">atoikura</h1>
        <p className="text-muted-foreground">
          何に使ったかではなく、あといくら使えるかを主役にする家計簿アプリ
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <Link href="/dashboard">
          <Card className="hover:bg-accent/40">
            <h2 className="text-lg font-semibold">ダッシュボード</h2>
            <p className="text-sm text-muted-foreground">
              あといくら使えるか、今日の安心ラインを見る
            </p>
          </Card>
        </Link>

        <Link href="/expenses">
          <Card className="hover:bg-accent/40">
            <h2 className="text-lg font-semibold">支出一覧</h2>
            <p className="text-sm text-muted-foreground">
              支出データやカテゴリを確認する
            </p>
          </Card>
        </Link>
      </div>
    </div>
  );
}
