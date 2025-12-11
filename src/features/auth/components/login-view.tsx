"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { useSignIn } from "../hooks/use-auth";

const formSchema = z.object({
    email: z.email(),
    password: z.string().min(1, "Password is requird"),
});

type FormSchema = z.infer<typeof formSchema>;

export const LoginView = () => {
    const id = useId();
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const { mutateAsync, isPending } = useSignIn();

    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const toggleVisibility = () => setIsVisible((prevState) => !prevState);
    const onSubmit = async (values: FormSchema) => {
        mutateAsync(values);
    };

    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>Create your account</CardTitle>
                <CardDescription>
                    Join us and stary your journey - it only takes a minute.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="sajid@gmail.com"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                id={id}
                                                className="pe-9"
                                                placeholder={"Password"}
                                                type={
                                                    isVisible
                                                        ? "text"
                                                        : "password"
                                                }
                                                {...field}
                                            />
                                            <button
                                                className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                                                type="button"
                                                onClick={toggleVisibility}
                                                aria-label={
                                                    isVisible
                                                        ? "Hide password"
                                                        : "Show password"
                                                }
                                                aria-pressed={isVisible}
                                                aria-controls="password">
                                                {isVisible ? (
                                                    <EyeOffIcon
                                                        size={16}
                                                        aria-hidden="true"
                                                    />
                                                ) : (
                                                    <EyeIcon
                                                        size={16}
                                                        aria-hidden="true"
                                                    />
                                                )}
                                            </button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            disabled={isPending}
                            className="w-full"
                            type="submit">
                            {isPending ? "Loading..." : "Login"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};
