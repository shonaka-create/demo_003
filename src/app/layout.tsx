import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "VALTIC | 営業支援・営業設計・AI営業ツール",
  description:
    "株式会社VALTICは、BPOサービス（営業代行・営業支援）とAI営業設計ツール「SalesBlade」で、企業の営業課題を根本から解決します。",
  keywords:
    "営業支援,営業代行,AI営業,SalesBlade,BPO,営業設計,VALTIC,バルティック",
  openGraph: {
    title: "VALTIC | 営業支援・営業設計・AI営業ツール",
    description:
      "BPOサービスとAI営業ツール「SalesBlade」で、貴社の営業力を最大化します。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} scroll-smooth`}>
      <body
        className="min-h-screen flex flex-col antialiased"
        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
