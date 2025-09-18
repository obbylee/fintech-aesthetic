import { RegisterForm } from "@/components/shared/register-form";

export default function RegisterPage() {
  return (
    <section>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}
