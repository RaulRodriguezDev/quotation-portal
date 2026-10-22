import { Suspense } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

async function SettingsContent() {
    const supabase = await createClient();
    const { data } = await supabase.auth.getClaims();

    if (!data?.claims) {
        redirect("/auth/login");
    }

    return <p className="mt-2 text-sm text-muted-foreground">{data.claims.email as string}</p>;
}

export default function SettingsPage() {
    return (
        <section className="p-6">
            <h1 className="text-xl font-semibold">Configuración</h1>
            <Suspense fallback={<p className="mt-2 text-sm text-muted-foreground">Cargando...</p>}>
                <SettingsContent />
            </Suspense>
        </section>
    );
}
