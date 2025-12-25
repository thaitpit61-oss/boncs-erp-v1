"use client";

import React, { useState } from "react";

type Sale = {
  id: string;
  quyetDinh: string;
  duAn: string;
  dot: string;
  ngayBatDau?: string;
  ngayKetThuc?: string;
  thoiGianGiao?: string;
  soNguoi?: number;
  dienGia?: string;
  donGia?: string;
};

const sample: Sale[] = Array.from({ length: 6 }).map((_, i) => ({
  id: String(i + 1),
  quyetDinh: `QDMB-${100 + i}`,
  duAn: `Dự án ${i + 1}`,
  dot: `Đợt ${i + 1}`,
  ngayBatDau: "01/01/2025",
  ngayKetThuc: "31/01/2025",
  thoiGianGiao: "Từ 08:00 - 17:00",
  soNguoi: i * 5,
  dienGia: "0",
  donGia: "35,000,000",
}));

export default function SaleList() {
  const [selected, setSelected] = useState<string | null>(sample[0].id);

  const row = sample.find((s) => s.id === selected) || sample[0];

  return (
    <div className="h-full p-3 bg-[#f5f6f8]">
      <div className="h-full bg-white border rounded shadow flex flex-col">
        {/* Header + toolbar */}
        <div className="px-4 py-2 border-b bg-[#f0f3f7] flex items-center justify-between">
          <h2 className="text-sm font-black text-[#003a8f] uppercase">
            Đợt bán hàng
          </h2>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto">
          <table className="min-w-[1200px] w-full text-sm border-collapse">
            <thead className="sticky top-0 z-20 bg-[#f7f9fc] text-[#003a8f] font-bold border-b">
              <tr>
                <th className="p-2 w-[120px]">Quyết định mở bán</th>
                <th className="p-2 w-[220px]">Dự án</th>
                <th className="p-2 w-[140px]">Đợt</th>
                <th className="p-2 w-[120px]">Ngày bắt đầu</th>
                <th className="p-2 w-[120px]">Ngày kết thúc</th>
                <th className="p-2 w-[120px]">Thời gian giao</th>
                <th className="p-2 w-[100px] text-right">Số người</th>
                <th className="p-2 w-[120px] text-right">Đơn giá</th>
                <th className="p-2 w-[120px] text-right">Đơn giá (hiện)</th>
              </tr>
            </thead>

            <tbody>
              {sample.map((s) => (
                <tr
                  key={s.id}
                  onClick={() => setSelected(s.id)}
                  className={`border-b cursor-pointer hover:bg-[#e6f0ff] ${
                    selected === s.id ? "bg-[#e6f0ff] text-[#003a8f]" : ""
                  }`}
                >
                  <td className="p-2">{s.quyetDinh}</td>
                  <td className="p-2">{s.duAn}</td>
                  <td className="p-2">{s.dot}</td>
                  <td className="p-2">{s.ngayBatDau}</td>
                  <td className="p-2">{s.ngayKetThuc}</td>
                  <td className="p-2">{s.thoiGianGiao}</td>
                  <td className="p-2 text-right">{s.soNguoi}</td>
                  <td className="p-2 text-right">{s.dienGia}</td>
                  <td className="p-2 text-right">{s.donGia}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Details area with tabs like image shows */}
        <div className="border-t p-3 bg-white">
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <div className="text-[10px] font-black uppercase text-slate-500">
                Chi tiết đợt
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <div className="text-xs text-slate-500">Quyết định</div>
                  <div className="font-bold">{row.quyetDinh}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Dự án</div>
                  <div className="font-bold">{row.duAn}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Đợt</div>
                  <div className="font-bold">{row.dot}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Thời gian giao</div>
                  <div className="font-bold">{row.thoiGianGiao}</div>
                </div>
              </div>
            </div>

            <div className="w-56">
              <div className="text-[10px] font-black uppercase text-slate-500">
                Sản phẩm trong đợt
              </div>
              <div className="mt-2 text-sm">
                (Danh sách sản phẩm liên quan hiển thị ở đây)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
