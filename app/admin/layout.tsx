// app/admin/layout.tsx
import { redirect } from "next/navigation";
import { checkAuth } from "@/lib/auth";
import AdminNav from "./AdminNav";

export const metadata = {
  title: "Admin Dashboard - LeafWay Tech",
  description: "Admin invoice management",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = await checkAuth();

  if (!isAuthenticated) {
    redirect("/admin-login");
  }

  return (
    <>
      <AdminNav />
      <main className="min-h-screen bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
    </>
  );
}
