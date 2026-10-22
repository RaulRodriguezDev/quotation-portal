"use client";

import { useRouter } from "next/navigation";
import { LogOut, Settings } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu";
import { createClient } from "@/lib/supabase/client";

const AppAvatarMenu = ({ children, className }: { children: React.ReactNode; className?: string }): React.ReactElement => {
    const router = useRouter();

    const handleSignOut = async () => {
        await createClient().auth.signOut();
        router.replace("/");
        router.refresh();
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={`cursor-pointer outline-none ${className ?? ""}`}>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-44">
                <DropdownMenuItem onClick={() => router.push("/configuracion")}>
                    <Settings />
                    Configuración
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive" onClick={handleSignOut}>
                    <LogOut />
                    Cerrar Sesión
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default AppAvatarMenu;
