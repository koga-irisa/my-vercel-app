import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // 新しく作成するコンポーネント

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-serif-jp",
});

export const metadata: Metadata = {
  title: "IRISA | ふるさとをクリエイターと豊かにする",
  description: "株式会社IRISAは、地域の魅力をクリエイターとのコラボレーションで再発見し、新しい価値を創造する会社です。",
  keywords: "IRISA, ふるさと納税, NFT, DAO, 地域創生, クリエイター"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSerifJP.variable} antialiased font-serif`}>
        <Header />
        
        {/* Main Content */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}