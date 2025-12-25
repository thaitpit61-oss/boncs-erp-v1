"use client";

import { useState } from "react";

export interface FormTemplate {
  tenBieuMau: string;
  loaiBieuMau: string;
  duAn: string;
  dienGiai: string;
  khoa: boolean;
  nvTao: string;
  ngayTao: string;
  nvCapNhat: string;
  ngayCapNhat: string;
}

export const defaultForms: FormTemplate[] = [
  {
    tenBieuMau: "Xác nhận thanh toán C",
    loaiBieuMau: "Khác",
    duAn: "Chung cư Lê Trọng T...",
    dienGiai: "",
    khoa: false,
    nvTao: "Châu Thu T...",
    ngayTao: "08/12/2025",
    nvCapNhat: "",
    ngayCapNhat: "08/12/2025",
  },
];

const FormTemplateList = () => {
  const [selectedRow, setSelectedRow] = useState<number | null>(0);

  return (
    <div className="h-full p-4 bg-[#fffdf0]">
      <div className="h-full bg-white rounded-2xl shadow border border-[#fdb91333] flex flex-col">
        {/* HEADER */}
        <div className="p-4 border-b bg-[#fdb9130a] flex justify-between items-center">
          <h2 className="font-black text-[#0054a6] uppercase text-sm border-l-4 border-[#fdb913] pl-3">
            Biểu mẫu dự án
          </h2>

          <span className="text-xs font-black text-slate-500 uppercase">
            ERP – Quản lý dự án
          </span>
        </div>

        {/* TABLE */}
        <div className="flex-1 overflow-auto">
          <table className="min-w-[1300px] w-full text-sm border-collapse">
            <thead className="sticky top-0 z-10 bg-white text-[#0054a6] uppercase text-xs font-black border-b">
              <tr>
                <th className="p-3 w-[60px] text-center">STT</th>
                <th className="p-3 min-w-[220px] text-left">
                  Tên biểu mẫu
                </th>
                <th className="p-3 min-w-[120px] text-left">
                  Loại biểu mẫu
                </th>
                <th className="p-3 min-w-[260px] text-left">Dự án</th>
                <th className="p-3 min-w-[180px] text-left">
                  Diễn giải
                </th>
                <th className="p-3 w-[90px] text-center">Khóa</th>
                <th className="p-3 min-w-[150px] text-left">
                  Nhân viên
                </th>
                <th className="p-3 min-w-[130px] text-left">
                  Thời gian
                </th>
                <th className="p-3 min-w-[150px] text-left">
                  NV cập nhật
                </th>
                <th className="p-3 min-w-[130px] text-left">
                  Ngày cập nhật
                </th>
              </tr>
            </thead>

            <tbody className="text-slate-700">
              {defaultForms.map((f, i) => {
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
                      {f.tenBieuMau}
                    </td>

                    <td className="p-3">
                      {f.loaiBieuMau}
                    </td>

                    <td className="p-3">
                      {f.duAn}
                    </td>

                    <td className="p-3">
                      {f.dienGiai}
                    </td>

                    <td className="p-3 text-center">
                      <input
                        type="checkbox"
                        checked={f.khoa}
                        readOnly
                        className="accent-[#fdb913]"
                      />
                    </td>

                    <td className="p-3">
                      {f.nvTao}
                    </td>

                    <td className="p-3">
                      {f.ngayTao}
                    </td>

                    <td className="p-3">
                      {f.nvCapNhat}
                    </td>

                    <td className="p-3">
                      {f.ngayCapNhat}
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

export default FormTemplateList;
