import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/footer/Footer";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Quotation Portal",
  description: "Quotation Portal developed by rirlabs company",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn('h-full antialiased', "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <div className="w-full h-20 sm:h-24 md:h-32 lg:h-40 bg-brand-600 flex flex-col items-center justify-center">
          <Header />
          <Navbar />
        </div>
        <div className="flex-1 flex flex-col w-full sm:w-5/6 lg:w-2/3 mx-auto">
          {children}
        </div>
        <Footer className=" absolute bottom-0 sm:hidden"/>
      </body>
    </html>
  );
}
