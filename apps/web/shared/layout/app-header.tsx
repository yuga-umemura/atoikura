import { GlobalNav } from "../navigation/global-nav";

export function AppHeader() {
  return (
    <header className="border-b border-(--border)">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-lg font-bold">atoikura</p>
        </div>
        <GlobalNav />
      </div>
    </header>
  );
}
