import { Button } from "@/components/shadcn/button";
import { Field, FieldDescription, FieldLabel } from "@/components/shadcn/field";
import LoginForm from "@/components/ui/LoginForm";
import { X } from "lucide-react";
import Link from "next/link";
  
export default function SignInPage() {
  return (
    <div className="flex flex-col w-full">
      <header className="flex items-center justify-between w-full">
        <Field>
          <FieldLabel className="text-lg text-brand-50">Iniciar sesión</FieldLabel>
          <FieldDescription className="text-brand-50/50">Ingrese sus credenciales para iniciar sesión</FieldDescription>
        </Field>
        <Link href="/">
          <Button variant="ghost" size="icon" className="cursor-pointer bg-red-500">
            <X className="text-brand-50" />
          </Button>
        </Link>
      </header>
      <main className="mt-4">
        <LoginForm />
      </main>
    </div>
  );
}
