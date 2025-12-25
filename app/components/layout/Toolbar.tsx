"use client";

import React from "react";
import { Plus, Save, Trash2, RefreshCw, Download } from "lucide-react";

type Action = "new" | "save" | "delete" | "refresh" | "export";

const ICONS: Record<Action, React.ReactNode> = {
  new: <Plus size={18} />,
  save: <Save size={18} />,
  delete: <Trash2 size={18} />,
  refresh: <RefreshCw size={18} />,
  export: <Download size={18} />,
};

const LABELS: Record<Action, string> = {
  new: "MỚI (F2)",
  save: "LƯU (F3)",
  delete: "XÓA (F8)",
  refresh: "NẠP",
  export: "XUẤT",
};

const toolbarConfig: Record<string, Action[]> = {
  project: ["new", "save", "delete", "refresh", "export"],
  cart: ["new", "refresh", "export"],
  "cart-1": ["new", "delete", "refresh"],
  // fallback handled below
};

export default function Toolbar({
  currentView,
  onAction,
}: {
  currentView: string;
  onAction: (action: Action) => void;
}) {
  const actions = toolbarConfig[currentView] || toolbarConfig[currentView.split("-")[0]] || ["new", "save", "delete", "refresh", "export"];

  return (
    <div className="bg-white border-b border-slate-200 p-2 flex items-center gap-1 shadow-sm overflow-x-auto no-scrollbar">
      {actions.map((a) => {
        const colorClass = a === "delete" ? "text-red-600" : a === "save" ? "text-green-600" : "text-[#0054a6]";
        return (
          <button
            key={a}
            onClick={() => onAction(a)}
            className={`flex flex-col items-center w-16 h-12 ${colorClass} hover:bg-slate-50 rounded-lg`}
          >
            <div className="text-current">{ICONS[a]}</div>
            <span className="text-[10px] font-black uppercase mt-1">{LABELS[a]}</span>
          </button>
        );
      })}

      <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>

      {/* <button
        onClick={() => onAction("refresh")}
        className="flex flex-col items-center w-16 h-12 text-[#0054a6] hover:bg-slate-50 rounded-lg"
      >
        <RefreshCw size={18} />
        <span className="text-[10px] font-black uppercase mt-1">NẠP</span>
      </button>

      <button
        onClick={() => onAction("export")}
        className="flex flex-col items-center w-16 h-12 text-[#0054a6] hover:bg-slate-50 rounded-lg"
      >
        <Download size={18} />
        <span className="text-[10px] font-black uppercase mt-1">XUẤT</span>
      </button> */}
    </div>
  );
}
