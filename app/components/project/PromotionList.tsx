"use client";

import { CheckCircle2, XCircle } from "lucide-react";

export interface PromotionList {
  duAn: string;
  tenChuongTrinh: string;
  tenQuaTang: string;
  keHoachBanHang: string;
  tuNGay: string;
  denNgay: string;
  tyLe: string;
  tienMat: string;
  nhanVienTao: string;
  ngayTao: string;
  nhanVienCapNhat: string;
  ngayCapNhat: string;
}

export const defaultPromotions: PromotionList[] = Array.from({ length: 3 }).map(
  (_, i) => ({
    duAn: "Bcons Polaris",
    tenChuongTrinh: `Chương trình KM ${i + 1}`,
    tenQuaTang: "Phiếu mua hàng",
    keHoachBanHang: "Kế hoạch bán hàng",
    tuNGay: "2025-12-20",
    denNgay: "2025-12-30",
    tyLe: "10%",
    tienMat: "1,000,000",
    nhanVienTao: "Nguyễn Văn A",
    ngayTao: "2025-12-18",
    nhanVienCapNhat: "Trần Thái",
    ngayCapNhat: "2025-12-19",
  })
);

const PromotionList = ({ promotions }: { promotions?: PromotionList[] }) => {
  const rows = promotions && promotions.length ? promotions : defaultPromotions;
  return (
    <div className="h-full p-4 bg-[#fffdf0]">
      <div className="h-full bg-white rounded-2xl shadow border border-[#fdb91333] flex flex-col">
        {/* HEADER */}
        <div className="p-4 border-b bg-[#fdb9130a] flex justify-between items-center">
          <h2 className="font-black text-[#0054a6] uppercase text-sm border-l-4 border-[#fdb913] pl-3">
            Danh sách khuyến mãi
          </h2>
          <span className="text-xs font-black text-slate-500 uppercase">
            ERP – Quản lý dự án
          </span>
        </div>

        {/* SCROLL CONTAINER */}
        <div className="flex-1 overflow-x-auto overflow-y-auto relative">
          <table className="min-w-[2400px] w-full text-sm border-collapse">
            <thead className="top-0 z-40 bg-white text-[#0054a6] uppercase text-xs font-black">
              <tr>
                <th className="p-3 min-w-[220px] text-left">Dự án</th>
                <th className="p-3 min-w-[150px] text-left">
                  Tên chương trình
                </th>
                <th className="p-3 min-w-[180px] text-left">Tên quà tặng</th>
                <th className="p-3 min-w-[120px] text-left">
                  Kế hoạch bán hàng
                </th>
                <th className="p-3 min-w-[160px] text-left">Từ ngày</th>
                <th className="p-3 min-w-[130px] text-left">Đến ngày</th>
                <th className="p-3 min-w-[140px] text-left">Tỷ lệ</th>
                <th className="p-3 min-w-[140px] text-left">Tiền mặt</th>
                <th className="p-3 min-w-[150px] text-left">Nhân viên tạo</th>
                <th className="p-3 min-w-[160px] text-left">Ngày tạo</th>
                <th className="p-3 min-w-[160px] text-left">
                  Nhân viên cập nhật
                </th>
                <th className="p-3 min-w-[160px] text-left">Ngày cập nhật</th>
              </tr>
            </thead>

            <tbody className="text-slate-700">
              {rows.map((p, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-[#fdb9130f] transition"
                >
                  <td className="p-3  left-0 bg-white z-30 font-bold text-[#0054a6]">
                    {p.duAn}
                  </td>
                  <td className="p-3  left-0 bg-white z-30 font-bold text-[#0054a6]">
                    {p.tenChuongTrinh}
                  </td>
                  <td className="p-3  left-0 bg-white z-30 font-bold text-[#0054a6]">
                    {p.tenQuaTang}
                  </td>
                  <td className="p-3  left-0 bg-white z-30 font-bold text-[#0054a6]">
                    {p.keHoachBanHang}
                  </td>
                  <td className="p-3  left-0 bg-white z-30 font-bold text-[#0054a6]">
                    {p.tuNGay}
                  </td>
                  <td className="p-3  left-0 bg-white z-30 font-bold text-[#0054a6]">
                    {p.denNgay}
                  </td>
                  <td className="p-3  left-0 bg-white z-30 font-bold text-[#0054a6]">
                    {p.tyLe}
                  </td>
                  <td className="p-3  left-0 bg-white z-30 font-bold text-[#0054a6]">
                    {p.tienMat}
                  </td>
                  <td className="p-3  left-0 bg-white z-30 font-bold text-[#0054a6]">
                    {p.nhanVienTao}
                  </td>
                  <td className="p-3  left-0 bg-white z-30 font-bold text-[#0054a6]">
                    {p.ngayTao}
                  </td>
                  <td className="p-3  left-0 bg-white z-30 font-bold text-[#0054a6]">
                    {p.nhanVienCapNhat}
                  </td>
                  <td className="p-3  left-0 bg-white z-30 font-bold text-[#0054a6]">
                    {p.ngayCapNhat}
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

export default PromotionList;
