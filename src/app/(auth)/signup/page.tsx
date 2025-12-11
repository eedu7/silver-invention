import { SignUpView } from "@/features/auth/views/signup-view";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register",
};

export default function SignUpPage() {
    return <SignUpView />;
}
