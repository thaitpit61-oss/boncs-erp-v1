"use client";

import { Bell, UserCircle } from "lucide-react";
import Breadcrumb from "./Breadcrumb";
import { menuItems } from "../../lib/menu";

export default function Header({
  currentView,
}: {
  currentView: string;
}) {
  return (
    <header className="h-14 bg-white border-b flex items-center justify-between px-4">
      {/* LEFT */}
      <div>
        <Breadcrumb currentView={currentView} menuItems={menuItems} />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 text-slate-600" />
        <UserCircle className="w-6 h-6 text-slate-600" />
      </div>
    </header>
  );
}
