import type { Metadata } from "next";
import "../styles/main.scss";

export const metadata: Metadata = {
  title: "Lies Of P - Landing Page",
  description: "Lies of P - Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
