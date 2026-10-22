import Link from "next/link";
import { User } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback, AvatarBadge } from "@/components/shadcn/avatar";
import { createClient } from "@/lib/supabase/server";
import AppAvatarMenu from "./AppAvatarMenu";

const AppAvatar = async ({className} : {className?: string}) : Promise<React.ReactElement> => {
    const supabase = await createClient();
    const { data } = await supabase.auth.getClaims();
    const claims = data?.claims;

    if (!claims) {
        return (
            <Link href="/auth/login" className={`flex-row items-center gap-2 ${className ?? ""}`}>
                <Avatar size="lg">
                    <AvatarFallback className="bg-gray-300 text-gray-500">
                        <User className="size-5" />
                    </AvatarFallback>
                </Avatar>
                <span className="hidden md:block text-sm text-brand-50">Iniciar sesión</span>
            </Link>
        );
    }

    const avatarUrl = claims.user_metadata?.avatar_url as string | undefined;
    const initial = ((claims.email as string | undefined)?.[0] ?? "U").toUpperCase();

    return (
        <AppAvatarMenu className={`flex-row items-center gap-2 ${className ?? ""}`}>
            <Avatar size="lg">
                {avatarUrl && <AvatarImage src={avatarUrl} alt="Avatar" />}
                <AvatarFallback>{initial}</AvatarFallback>
                <AvatarBadge className="bg-green-600 dark:bg-green-800" />
            </Avatar>
            <span className="hidden md:block text-sm text-brand-50">Mi cuenta</span>
        </AppAvatarMenu>
    );
}

export default AppAvatar;
