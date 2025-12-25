"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Toolbar from "./Toolbar";
import { menuItems } from "../../lib/menu";
import ProjectList, { Project, defaultProjects } from "../project/ProjectList";
import PromoList from "../project/PromotionList";
import Input from "../ui/Input";
import Select from "../ui/Select";
import { HomeIcon, UserPlus } from "lucide-react";
import { BCONS_PROJECTS, PROJECT_TYPES } from "../../lib/constants/project";
import PaymentSchedule from "../project/PaymentSchedule";

interface ProjectForm {
  ngay: string;
  code: string;
  maFast: string;
  tenDuAn: string;
  loaiDuAn: string;
  nhanVien: string;
  dienTich: number | "";
  soGiayPhep: string;
  ngayCap: string;
  donGia: number | "";
  soLuong: number | "";
  diaChi: string;
  ngayDuyet: string;
  nguoiDuyet: string;
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [currentView, setCurrentView] = useState("dashboard");
  const emptyProject: ProjectForm = {
    ngay: "",
    code: "",
    maFast: "",
    tenDuAn: "",
    loaiDuAn: "",
    nhanVien: "",
    dienTich: "",
    soGiayPhep: "",
    ngayCap: "",
    donGia: "",
    soLuong: "",
    diaChi: "",
    ngayDuyet: "",
    nguoiDuyet: "",
  };

  const [showAddModal, setShowAddModal] = useState(false);
  const [newProject, setNewProject] = useState<ProjectForm>(emptyProject);
  const [projects, setProjects] = useState<Project[]>(defaultProjects);

  const handleAction = (action: string) => {
    if (action === "new") setShowAddModal(true);
  };

  const handleProjectChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProject = () => {
    // basic validation
    if (!newProject.code || !newProject.tenDuAn) {
      alert("Vui lòng nhập Code và Tên dự án");
      return;
    }

    const toAdd: Project = {
      ngay: newProject.ngay || new Date().toLocaleDateString(),
      code: String(newProject.code),
      maFast: String(newProject.maFast || ""),
      tenDuAn: String(newProject.tenDuAn),
      loaiDuAn: String(newProject.loaiDuAn || ""),
      nhanVien: String(newProject.nhanVien || ""),
      dienTich: String(newProject.dienTich || ""),
      soGiayPhep: String(newProject.soGiayPhep || ""),
      ngayCap: String(newProject.ngayCap || ""),
      donGia: String(newProject.donGia || ""),
      soLuong: Number(newProject.soLuong || 0),
      diaChi: String(newProject.diaChi || ""),
      ngayDuyet: String(newProject.ngayDuyet || ""),
      nguoiDuyet: String(newProject.nguoiDuyet || ""),
      daDuyet: false,
    };

    setProjects((prev) => [toAdd, ...prev]);
    setShowAddModal(false);
    setNewProject(emptyProject);
  };

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {/* SIDEBAR */}
      <aside className="w-72 flex-shrink-0 h-full overflow-y-auto bg-[#0054a6]">
        <Sidebar
          menuItems={menuItems}
          currentView={currentView}
          onMenuClick={(id) => setCurrentView(id)}
        />
      </aside>

      {/* MAIN */}
      <div className="flex flex-col flex-1 min-w-0 min-h-0">
        {/* HEADER */}
        <Header currentView={currentView} />

        {/* TOOLBAR */}
        <Toolbar currentView={currentView} onAction={(a) => handleAction(a)} />

        {/* WORKSPACE - Thêm menu */}
        <div className="flex-1 min-h-0 bg-slate-50">
          {currentView === "project-1" ? (
            <ProjectList projects={projects} />
          ) : currentView === "project-2" ? (
            <PromoList />
          ) : currentView === "project-3" ? (
            <PaymentSchedule />
          ) : (
            children
          )}
        </div>
      </div>

      {/* MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[95vh] flex flex-col overflow-hidden">
            {/* HEADER */}
            <div className="p-4 bg-slate-50 border-b flex justify-between items-center">
              <h3 className="font-black text-[#003d7a] uppercase flex items-center gap-2">
                <HomeIcon size={24} /> THÊM MỚI DỰ ÁN
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-slate-200 rounded-full"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 bg-[#fffdf0]/30">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* KHỐI THÔNG TIN CHUNG */}
                <div className="lg:col-span-4">
                  <h4 className="font-black text-[10px] text-[#0054a6] border-b-2 border-[#fdb913] pb-1 uppercase mb-4">
                    I. THÔNG TIN DỰ ÁN
                  </h4>
                </div>

                <Input
                  label="Ngày"
                  type="date"
                  name="ngay"
                  value={newProject.ngay}
                  onChange={handleProjectChange}
                />
                <Input
                  label="Code"
                  name="code"
                  value={newProject.code}
                  onChange={handleProjectChange}
                />
                <Input
                  label="Mã Fast"
                  name="maFast"
                  value={newProject.maFast}
                  onChange={handleProjectChange}
                />
                <Select
                  label="Tên dự án"
                  name="tenDuAn"
                  value={newProject.tenDuAn}
                  onChange={handleProjectChange}
                  options={BCONS_PROJECTS}
                />
                <Select
                  label="Loại dự án"
                  name="loaiDuAn"
                  value={newProject.loaiDuAn}
                  onChange={handleProjectChange}
                  options={PROJECT_TYPES}
                />
                <Input
                  label="Nhân viên"
                  name="nhanVien"
                  value={newProject.nhanVien}
                  onChange={handleProjectChange}
                />
                <Input
                  label="Diện tích (m²)"
                  name="dienTich"
                  value={newProject.dienTich}
                  onChange={handleProjectChange}
                />
                <Input
                  label="Số giấy phép"
                  name="soGiayPhep"
                  value={newProject.soGiayPhep}
                  onChange={handleProjectChange}
                />

                <Input
                  label="Ngày cấp"
                  type="date"
                  name="ngayCap"
                  value={newProject.ngayCap}
                  onChange={handleProjectChange}
                />
                <Input
                  label="Đơn giá"
                  name="donGia"
                  value={newProject.donGia}
                  onChange={handleProjectChange}
                />
                <Input
                  label="Số lượng"
                  name="soLuong"
                  value={newProject.soLuong}
                  onChange={handleProjectChange}
                />

                <div className="lg:col-span-2">
                  <label className="text-[10px] font-black uppercase text-slate-500">
                    Địa chỉ
                  </label>
                  <textarea
                    name="diaChi"
                    value={newProject.diaChi}
                    onChange={handleProjectChange}
                    className="border p-2 rounded-lg text-sm w-full h-20 resize-none"
                  />
                </div>

                <Input
                  label="Ngày duyệt"
                  type="date"
                  name="ngayDuyet"
                  value={newProject.ngayDuyet}
                  onChange={handleProjectChange}
                />
                <Input
                  label="Người duyệt"
                  name="nguoiDuyet"
                  value={newProject.nguoiDuyet}
                  onChange={handleProjectChange}
                />
              </div>
            </div>

            {/* FOOTER */}
            <div className="p-4 bg-slate-50 border-t flex justify-end gap-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-6 py-2 border rounded-xl text-sm font-bold"
              >
                HỦY
              </button>
              <button
                onClick={handleSaveProject}
                className="px-10 py-2 bg-[#f08e1d] text-white rounded-xl text-sm font-black"
              >
                LƯU DỰ ÁN
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
