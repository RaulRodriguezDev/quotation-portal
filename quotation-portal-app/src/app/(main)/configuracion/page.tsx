import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function SettingsPage() {
    const supabase = await createClient();
    const { data } = await supabase.auth.getClaims();

    if (!data?.claims) {
        redirect("/auth/login");
    }

    return (
        <section className="p-6">
            <h1 className="text-xl font-semibold">Configuración</h1>
            <p className="mt-2 text-sm text-muted-foreground">{data.claims.email as string}</p>
        </section>
    );
}
