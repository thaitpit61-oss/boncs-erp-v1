"use client";

import { CheckCircle2, XCircle } from "lucide-react";

export interface Project {
  ngay: string;
  code: string;
  maFast: string;
  tenDuAn: string;
  loaiDuAn: string;
  nhanVien: string;
  dienTich: string;
  soGiayPhep: string;
  ngayCap: string;
  donGia: string;
  soLuong: number;
  diaChi: string;
  ngayDuyet: string;
  nguoiDuyet: string;
  daDuyet: boolean;
}

export const defaultProjects: Project[] = Array.from({ length: 3 }).map((_, i) => ({
  ngay: "2025-12-20",
  code: `PRJ-${i + 1}`,
  maFast: `FAST-${1000 + i}`,
  tenDuAn: "Bcons Polaris",
  loaiDuAn: "Chung cư",
  nhanVien: "Nguyễn Văn A",
  dienTich: "65m²",
  soGiayPhep: "GPXD-2025-01",
  ngayCap: "2025-12-20",
  donGia: "32,000,000",
  soLuong: 1,
  diaChi: "Dĩ An, Bình Dương",
  ngayDuyet: "2025-12-20",
  nguoiDuyet: "Trần Thái",
  daDuyet: i % 2 === 0,
}));

const ProjectList = ({ projects }: { projects?: Project[] }) => {
  const rows = projects && projects.length ? projects : defaultProjects;
  return (
    <div className="h-full p-4 bg-[#fffdf0]">
      <div className="h-full bg-white rounded-2xl shadow border border-[#fdb91333] flex flex-col">
        {/* HEADER */}
        <div className="p-4 border-b bg-[#fdb9130a] flex justify-between items-center">
          <h2 className="font-black text-[#0054a6] uppercase text-sm border-l-4 border-[#fdb913] pl-3">
            Danh sách dự án
          </h2>
          <span className="text-xs font-black text-slate-500 uppercase">
            ERP – Quản lý dự án
          </span>
        </div>

        {/* SCROLL CONTAINER */}
        <div className="flex-1 overflow-x-auto overflow-y-auto relative">
          <table className="min-w-[2400px] w-full text-sm border-collapse">
            <thead className="sticky top-0 z-40 bg-white text-[#0054a6] uppercase text-xs font-black">
              <tr>
                <th className="p-3 sticky left-0 bg-white z-50 min-w-[110px] border-r text-left">
                  Ngày
                </th>
                <th className="p-3 sticky left-[110px] bg-white z-50 min-w-[120px] border-r text-left">
                  Code
                </th>

                <th className="p-3 min-w-[140px] text-left">Mã Fast</th>
                <th className="p-3 min-w-[220px] text-left">Tên dự án</th>
                <th className="p-3 min-w-[150px] text-left">Loại dự án</th>
                <th className="p-3 min-w-[180px] text-left">Nhân viên</th>
                <th className="p-3 min-w-[120px] text-left">Diện tích</th>
                <th className="p-3 min-w-[160px] text-left">Số giấy phép</th>
                <th className="p-3 min-w-[130px] text-left">Ngày cấp</th>
                <th className="p-3 min-w-[140px] text-left">Đơn giá</th>
                <th className="p-3 min-w-[120px] text-left">Số lượng</th>
                <th className="p-3 min-w-[260px] text-left">Địa chỉ</th>
                <th className="p-3 min-w-[140px] text-left">Ngày duyệt</th>
                <th className="p-3 min-w-[180px] text-left">Người duyệt</th>
                <th className="p-3 min-w-[120px] sticky right-0 bg-white z-50 border-l text-center">
                  Đã duyệt
                </th>
              </tr>
            </thead>

            <tbody className="text-slate-700">
              {rows.map((p, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-[#fdb9130f] transition"
                >
                  <td className="p-3 sticky left-0 bg-white z-30 font-bold text-[#0054a6]">
                    {p.ngay}
                  </td>
                  <td className="p-3 sticky left-[110px] bg-white z-30 font-bold">
                    {p.code}
                  </td>

                  <td className="p-3 font-mono">{p.maFast}</td>
                  <td className="p-3 font-semibold">{p.tenDuAn}</td>
                  <td className="p-3">{p.loaiDuAn}</td>
                  <td className="p-3">{p.nhanVien}</td>
                  <td className="p-3">{p.dienTich}</td>
                  <td className="p-3 font-mono">{p.soGiayPhep}</td>
                  <td className="p-3">{p.ngayCap}</td>
                  <td className="p-3 font-bold text-[#0054a6]">{p.donGia}</td>
                  <td className="p-3 text-center">{p.soLuong}</td>
                  <td className="p-3 truncate max-w-[260px]">{p.diaChi}</td>
                  <td className="p-3">{p.ngayDuyet}</td>
                  <td className="p-3 font-semibold"> {p.nguoiDuyet}</td>
                  <td className="p-3 sticky right-0 bg-white z-30 border-l text-center">
                    {p.daDuyet ? (
                      <span className="inline-flex items-center gap-1 text-green-600 font-black">
                        <CheckCircle2 size={14} /> OK
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-red-400 font-black">
                        <XCircle size={14} /> NO
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
