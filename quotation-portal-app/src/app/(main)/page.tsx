import AppSvg from "@/components/ui/AppSvg";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-4">
      <AppSvg className="w-full max-w-md h-auto" path="/illustrations/states/coming-soon.svg" alt="Coming Soon Illustration"/>
      <p className="text-center mt-4 max-w-md">Tranquilo, estamos en proceso de desarrollo. Muy pronto obtendrás acceso a todas las funcionalidades.</p>
    </div>
  );
}
