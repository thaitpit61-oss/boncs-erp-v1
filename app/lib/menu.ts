export const menuItems = [
  {
    id: "sys",
    label: "Hệ thống",
    icon: "Settings",
  },
  {
    id: "project",
    label: "Quản lý dự án",
    icon: "FileText",
    subItems: [
      { id: "project-1", label: "Danh sách dự án" },
      { id: "project-2", label: "Chương trình khuyến mãi" },
      { id: "project-3", label: "Lịch thanh toán" },
      { id: "project-4", label: "Biểu mẫu" },
    ],
  },
  {
    id: "cart",
    label: "Giỏ hàng",
    icon: "Users",
    subItems: [
      { id: "cart-1", label: "Danh sách giỏ hàng" },
      { id: "cart-2", label: "Đợt mở bán" },
    ],
  },
];
