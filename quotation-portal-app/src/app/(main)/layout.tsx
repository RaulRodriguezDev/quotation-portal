import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/footer/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full h-20 sm:h-24 md:h-32 lg:h-40 bg-brand-600 flex flex-col items-center justify-center">
        <Header />
        <Navbar />
      </div>
      <div className="flex-1 flex flex-col w-full sm:w-5/6 lg:w-2/3 mx-auto">
        {children}
      </div>
      <Footer className=" absolute bottom-0 sm:hidden"/>
    </>
  );
}
