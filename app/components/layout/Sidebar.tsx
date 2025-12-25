"use client";

import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import BconsLogo from "../BconsLogo";
import { Settings, FileText, Home, Users } from "lucide-react";

const ICONS: Record<string, React.ReactNode> = {
  Settings: <Settings size={18} />,
  FileText: <FileText size={18} />,
  Home: <Home size={18} />,
  Users: <Users size={18} />,
};

interface MenuItem {
  id: string;
  label: string;
  icon?: string; // 👈 icon là STRING
  subItems?: MenuItem[];
  nestedItems?: MenuItem[];
}

interface SidebarProps {
  menuItems: MenuItem[];
  currentView: string;
  onMenuClick: (id: string, label: string, icon?: React.ReactNode) => void;
}

export default function Sidebar({
  menuItems,
  currentView,
  onMenuClick,
}: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>(["crm", "crm-opp"]);

  const toggleMenu = (id: string) => {
    setOpenMenus((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  return (
    <aside
      className={`${
        collapsed ? "w-16" : "w-72"
      } bg-[#ffc20e] text-black h-screen flex flex-col transition-all duration-300`}
    >
      {/* LOGO */}
      <div className="h-14 flex items-center justify-between px-4 border-b border-white/10">
        {!collapsed && <BconsLogo />}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded hover:bg-white/10"
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>

      {/* MENU */}
      <nav className="flex-1 overflow-y-auto py-3">
        {menuItems.map((item) => (
          <div key={item.id}>
            {/* MENU CHA */}
            <div
              onClick={() =>
                item.subItems
                  ? toggleMenu(item.id)
                  : onMenuClick(item.id, item.label, item.icon)
              }
              className={`flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-white/10 ${
                currentView === item.id ? "bg-white/20" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                {item.icon && ICONS[item.icon]}
                {!collapsed && (
                  <span className="font-bold text-sm">{item.label}</span>
                )}
              </div>

              {!collapsed && item.subItems && (
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    openMenus.includes(item.id) ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>

            {/* SUB MENU */}
            {!collapsed && item.subItems && openMenus.includes(item.id) && (
              <div className="ml-6 mt-1 space-y-1">
                {item.subItems.map((sub) => (
                  <div key={sub.id}>
                    <div
                      onClick={() =>
                        sub.nestedItems
                          ? toggleMenu(sub.id)
                          : onMenuClick(sub.id, sub.label)
                      }
                      className={`px-3 py-2 rounded cursor-pointer hover:bg-white/10 text-sm ${
                        currentView === sub.id ? "bg-white/20" : ""
                      }`}
                    >
                      {sub.label}
                    </div>

                    {/* NESTED */}
                    {sub.nestedItems && openMenus.includes(sub.id) && (
                      <div className="ml-4 space-y-1">
                        {sub.nestedItems.map((n) => (
                          <div
                            key={n.id}
                            onClick={() => onMenuClick(n.id, n.label)}
                            className={`px-3 py-1 rounded cursor-pointer text-xs hover:bg-white/10 ${
                              currentView === n.id ? "bg-white/20" : ""
                            }`}
                          >
                            {n.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
