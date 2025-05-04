import { Suspense } from "react";
import SidebarClient from "./sidebar";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Suspense fallback={<div>Loading sidebar...</div>}>
        <SidebarClient />
      </Suspense>

      <main className="flex-1 p-6 bg-grey-50">
        <Suspense fallback={<div>Loading content...</div>}>{children}</Suspense>
      </main>
    </div>
  );
}
