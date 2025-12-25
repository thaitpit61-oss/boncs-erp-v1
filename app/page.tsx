import AppLayout from "./components/layout/AppLayout";

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="bg-white p-6 rounded shadow">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <p className="mt-2 text-slate-600">
          Chào mừng bạn đến hệ thống ERP BCONS
        </p>
      </div>
    </AppLayout>
  );
}
