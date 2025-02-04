import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div>
      <header>
        <h1>App Layout</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
