import { Work_Sans } from "next/font/google";
import "./globals.css";

const work = Work_Sans({
   subsets: ["latin"],
   weight: ['400', '700']
 });

export const metadata = {
  title: "Hash4Carbon",
  description: "Landing page da HashforCarbon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={work.className}>{children}</body>
    </html>
  )
}
