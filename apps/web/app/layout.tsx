import type { Metadata } from "next";
import "./globals.css";
import "@/styles/token.css";
import { AppHeader } from "@/shared/layout/app-header";

export const metadata: Metadata = {
  title: "atoikura",
  description: "あといくら使えるかを主役にした家計簿管理アプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <AppHeader />
        <main className="mx-auto max-w-5xl px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
