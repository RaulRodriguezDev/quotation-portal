"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, KeyRound, Eye, EyeOff } from "lucide-react";
import { Field, FieldDescription, FieldLabel } from "../shadcn/field";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "../shadcn/input-group";
import { Button } from "../shadcn/button";
import { createClient } from "@/lib/supabase/client";

const LoginForm = (): React.ReactElement => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);

        if (!email || !password) {
            setError("Ingrese su correo y contraseña.");
            return;
        }

        setLoading(true);
        const supabase = createClient();
        const {data, error: signInError } = await supabase.auth.signInWithPassword({ email, password });

        console.log(data);
        console.log(signInError);

        if (signInError) {
            setError("Correo o contraseña incorrectos.");
            setLoading(false);
            return;
        }

        router.replace("/");
        router.refresh();
    };

    return (
        <form className="flex flex-col gap-6 w-4/5 mx-auto scheme-dark" autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Field>
                <FieldLabel htmlFor="email" className="text-brand-50">
                    Correo electrónico
                </FieldLabel>
                <InputGroup>
                    <InputGroupAddon align="inline-start">
                        <Mail className="text-brand-50" />
                    </InputGroupAddon>
                    <InputGroupInput
                        id="email"
                        type="email"
                        placeholder="Ej. tu-correo@gmail.com"
                        className="text-brand-50/70 caret-brand-50 placeholder:text-brand-50/30"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </InputGroup>
            </Field>
            <Field>
                <FieldLabel htmlFor="password" className="text-brand-50">
                    Contraseña
                </FieldLabel>
                <InputGroup>
                    <InputGroupAddon align="inline-start">
                        <KeyRound className="text-brand-50" />
                    </InputGroupAddon>
                    <InputGroupInput
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Ingrese su contraseña"
                        className="text-brand-50/70 caret-brand-50 placeholder:text-brand-50/30 [&::-ms-reveal]:hidden"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputGroupAddon align="inline-end">
                        <InputGroupButton
                            size="icon-xs"
                            aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="text-brand-50 hover:bg-transparent hover:text-brand-200"
                        >
                            {showPassword ? <EyeOff /> : <Eye />}
                        </InputGroupButton>
                    </InputGroupAddon>
                </InputGroup>
                <FieldDescription className="text-brand-50/50">¿Olvidaste tu contraseña?</FieldDescription>
            </Field>
            {error && (
                <p role="alert" className="text-sm text-red-300">
                    {error}
                </p>
            )}
            <Button type="submit" size="lg" disabled={loading} className="text-brand-50 bg-brand-400 cursor-pointer rounded-full">
                {loading ? "Iniciando sesión..." : "Iniciar sesión"}
            </Button>
        </form>
    );
}

export default LoginForm;