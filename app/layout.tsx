import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="h-screen overflow-hidden bg-slate-100">
        {children}
      </body>
    </html>
  );
}
