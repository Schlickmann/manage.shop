import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div>
      <header>
        <h1>Auth Layout</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
