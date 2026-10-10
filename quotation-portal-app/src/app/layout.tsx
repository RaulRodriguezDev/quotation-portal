import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quotation Portal",
  description: "Quotation Portal developed by rirlabs company",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={'h-full antialiased'}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
