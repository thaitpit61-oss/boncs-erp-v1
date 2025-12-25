"use client";

import { useState } from "react";

export interface PaymentPhase {
  dot: string;
  truongHop: string;
  khoangCach: string;
  macDinh: boolean;
  nvTao: string;
  ngayTao: string;
  nvCapNhat: string;
  ngayCapNhat: string;
}

export const defaultPhases: PaymentPhase[] = Array.from({ length: 3 }).map(
  (_, i) => ({
    dot: `PTTT${i + 1}`,
    truongHop: "Khoảng cách theo đợt đầu tiên",
    khoangCach: "0 ngày",
    macDinh: i === 0,
    nvTao: "Lê Hữu Duy",
    ngayTao: "26/02/2024",
    nvCapNhat: "Tạ Quốc Cường",
    ngayCapNhat: "22/03/2024",
  })
);

const PaymentSchedule = () => {
  const [selectedRow, setSelectedRow] = useState<number | null>(0);

  return (
    <div className="h-full p-4 bg-[#fffdf0]">
      <div className="h-full bg-white rounded-2xl shadow border border-[#fdb91333] flex flex-col">
        {/* HEADER */}
        <div className="p-4 border-b bg-[#fdb9130a] flex justify-between items-center">
          <h2 className="font-black text-[#0054a6] uppercase text-sm border-l-4 border-[#fdb913] pl-3">
            Lịch thanh toán
          </h2>

          <span className="text-xs font-black text-slate-500 uppercase">
            ERP – Quản lý dự án
          </span>
        </div>

        {/* TABLE */}
        <div className="flex-1 overflow-auto">
          <table className="min-w-[1200px] w-full text-sm border-collapse">
            <thead className="sticky top-0 z-10 bg-white text-[#0054a6] uppercase text-xs font-black border-b">
              <tr>
                <th className="p-3 w-[60px] text-center">STT</th>
                <th className="p-3 min-w-[120px] text-left">Đợt</th>
                <th className="p-3 min-w-[260px] text-left">Trường hợp</th>
                <th className="p-3 min-w-[150px] text-left">
                  Khoảng cách đợt
                </th>
                <th className="p-3 w-[100px] text-center">Mặc định</th>
                <th className="p-3 min-w-[150px] text-left">NV tạo</th>
                <th className="p-3 min-w-[130px] text-left">Ngày tạo</th>
                <th className="p-3 min-w-[150px] text-left">
                  NV cập nhật
                </th>
                <th className="p-3 min-w-[130px] text-left">
                  Ngày cập nhật
                </th>
              </tr>
            </thead>

            <tbody className="text-slate-700">
              {defaultPhases.map((p, i) => {
                const active = selectedRow === i;

                return (
                  <tr
                    key={i}
                    onClick={() => setSelectedRow(i)}
                    className={`border-b cursor-pointer transition
                      ${
                        active
                          ? "bg-[#0054a6] text-white"
                          : "hover:bg-[#fdb9130f]"
                      }`}
                  >
                    <td className="p-3 text-center font-bold">
                      {i + 1}
                    </td>

                    <td className="p-3 font-bold">
                      {p.dot}
                    </td>

                    <td className="p-3">
                      {p.truongHop}
                    </td>

                    <td className="p-3">
                      {p.khoangCach}
                    </td>

                    <td className="p-3 text-center">
                      <input
                        type="checkbox"
                        checked={p.macDinh}
                        readOnly
                        className="accent-[#fdb913]"
                      />
                    </td>

                    <td className="p-3">
                      {p.nvTao}
                    </td>

                    <td className="p-3">
                      {p.ngayTao}
                    </td>

                    <td className="p-3">
                      {p.nvCapNhat}
                    </td>

                    <td className="p-3">
                      {p.ngayCapNhat}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentSchedule;
