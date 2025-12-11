import { SignUpView } from "@/features/auth/components/signup-view";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register",
};

export default function SignUpPage() {
    return <SignUpView />;
}
