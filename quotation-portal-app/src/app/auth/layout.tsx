import Logo from "@/components/ui/Logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="bg-brand-950/90 h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col items-center w-full max-w-md">
                <Logo className="mb-10 h-25" />
                <div className="w-full h-fit p-4 bg-brand-700/70 dark:bg-black/40 backdrop-blur-md rounded-xl shadow-lg">
                    {children}
                </div>
            </div>
        </main>
    );
}
export default AuthLayout;
