import { LoginView } from "@/features/auth/components/login-view";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login",
};

export default function LoginPage() {
    return <LoginView />;
}
