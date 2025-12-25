"use client";

import { useState } from "react";

export interface Product {
  stt: number;
  trangThai: string;
  maCan: string;
  duAn: string;
  dotBanHang: string;
  loaiSP: string;
  tang: string;
  dienTich: string;
  donGia: string;
  tongGia: string;
  chietKhau: string;
  tongSauCK: string;
}

const defaultProducts: Product[] = Array.from({ length: 20 }).map((_, i) => ({
  stt: i + 1,
  trangThai: "Mua bán",
  maCan: `SH${i + 1}`,
  duAn: "Chung cư An Bình",
  dotBanHang: "Đợt 1",
  loaiSP: "Căn hộ",
  tang: `${Math.floor(Math.random() * 20) + 1}`,
  dienTich: `${50 + i} m²`,
  donGia: "35,000,000",
  tongGia: "2,100,000,000",
  chietKhau: "0%",
  tongSauCK: "2,100,000,000",
}));

const ProductCartList = () => {
  const [selectedRow, setSelectedRow] = useState<number | null>(0);

  return (
    <div className="h-full p-3 bg-[#f5f6f8]">
      <div className="h-full bg-white border rounded shadow flex flex-col">

        {/* HEADER */}
        <div className="px-4 py-2 border-b bg-[#f0f3f7]">
          <h2 className="text-sm font-black text-[#003a8f] uppercase">
            Danh sách sản phẩm
          </h2>
        </div>

        {/* TABLE */}
        <div className="flex-1 overflow-auto">
          <table className="min-w-[1800px] w-full text-xs border-collapse">
            <thead className="sticky top-0 z-20 bg-[#f7f9fc] text-[#003a8f] font-bold border-b">
              <tr>
                <th className="p-2 w-[50px] text-center">STT</th>
                <th className="p-2 w-[90px] text-left">Trạng thái</th>
                <th className="p-2 w-[80px]">Mã căn</th>
                <th className="p-2 w-[200px] text-left">Dự án</th>
                <th className="p-2 w-[100px]">Đợt BH</th>
                <th className="p-2 w-[100px]">Loại SP</th>
                <th className="p-2 w-[80px]">Tầng</th>
                <th className="p-2 w-[100px]">Diện tích</th>
                <th className="p-2 w-[120px]">Đơn giá</th>
                <th className="p-2 w-[140px]">Tổng giá</th>
                <th className="p-2 w-[100px]">CK</th>
                <th className="p-2 w-[160px]">Tổng sau CK</th>
              </tr>
            </thead>

            <tbody>
              {defaultProducts.map((p, i) => {
                const active = selectedRow === i;

                return (
                  <tr
                    key={i}
                    onClick={() => setSelectedRow(i)}
                    className={`border-b cursor-pointer transition
                      ${
                        active
                          ? "bg-[#003a8f] text-white"
                          : "hover:bg-[#e6f0ff]"
                      }`}
                  >
                    <td className="p-2 text-center font-bold">{p.stt}</td>

                    <td className="p-2">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold
                          ${
                            active
                              ? "bg-white text-[#003a8f]"
                              : "bg-purple-600 text-white"
                          }`}
                      >
                        {p.trangThai}
                      </span>
                    </td>

                    <td className="p-2 font-mono">{p.maCan}</td>
                    <td className="p-2">{p.duAn}</td>
                    <td className="p-2 text-center">{p.dotBanHang}</td>
                    <td className="p-2 text-center">{p.loaiSP}</td>
                    <td className="p-2 text-center">{p.tang}</td>
                    <td className="p-2 text-right">{p.dienTich}</td>
                    <td className="p-2 text-right font-semibold">{p.donGia}</td>
                    <td className="p-2 text-right">{p.tongGia}</td>
                    <td className="p-2 text-center">{p.chietKhau}</td>
                    <td className="p-2 text-right font-bold">
                      {p.tongSauCK}
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

export default ProductCartList;
