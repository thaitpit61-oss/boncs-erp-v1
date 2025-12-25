"use client";

import { ChevronRight } from "lucide-react";
import React from "react";

interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  subItems?: MenuItem[];
  nestedItems?: MenuItem[];
}

export default function Breadcrumb({
  currentView,
  menuItems,
}: {
  currentView: string;
  menuItems: MenuItem[];
}) {
  const findPath = (items: MenuItem[], target: string): string[] | null => {
    for (const it of items) {
      if (it.id === target) return [it.label];
      if (it.subItems) {
        for (const sub of it.subItems) {
          if (sub.id === target) return [it.label, sub.label];
          if (sub.nestedItems) {
            for (const n of sub.nestedItems) {
              if (n.id === target) return [it.label, sub.label, n.label];
            }
          }
        }
      }
      if (it.nestedItems) {
        for (const n of it.nestedItems) {
          if (n.id === target) return [it.label, n.label];
        }
      }
    }
    return null;
  };

  const path = findPath(menuItems, currentView) || [currentView];

  return (
    <nav className="flex items-center text-sm text-slate-700 font-medium">
      <span className="text-slate-500">Dashboard</span>
      {path.map((p, i) => (
        <span key={i} className="flex items-center">
          <ChevronRight className="w-4 h-4 text-slate-400 mx-2" />
          <span className={i === path.length - 1 ? "text-slate-800" : "text-slate-600"}>
            {p}
          </span>
        </span>
      ))}
    </nav>
  );
}
