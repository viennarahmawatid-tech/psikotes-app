import './globals.css';

export const metadata = {
  title: 'Portal Psikotes Rekrutmen',
  description: 'Sistem Asesmen Psikologi Online',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-slate-50">{children}</body>
    </html>
  );
}
