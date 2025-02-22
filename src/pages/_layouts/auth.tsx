import { Outlet } from "react-router";
import { Pizza } from "lucide-react";

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <Pizza className="h-5 w-5" />
          <span className="font-semibold">pizza.shop</span>
        </div>
        <footer className="text-sm">
          Partner's dashboard &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>
      <main className="relative flex flex-col items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
}
