import { authClient } from "@/lib/auth-client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useSignUp = () => {
    const router = useRouter();
    return useMutation({
        onSuccess: () => {
            router.push("/new");
        },
        mutationKey: ["signUp"],
        mutationFn: async (data: {
            name: string;
            email: string;
            password: string;
        }) => {
            await authClient.signUp.email({
                ...data,
                callbackURL: "/new",
            });
        },
    });
};

export const useSignIn = () => {
    const router = useRouter();
    return useMutation({
        onSuccess: () => {
            router.push("/new");
        },
        mutationKey: ["signIn"],
        mutationFn: async (data: { email: string; password: string }) => {
            await authClient.signIn.email({
                ...data,
                callbackURL: "/new",
            });
        },
    });
};

export const useLogout = () => {
    const router = useRouter();
    return useMutation({
        onSuccess: () => {
            router.push("/login");
        },
        mutationKey: ["logOut"],
        mutationFn: async () => {
            await authClient.signOut({
                fetchOptions: {
                    onSuccess: () => {
                        router.push("/login");
                    },
                },
            });
        },
    });
};
