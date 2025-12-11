import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { ClientGreeting } from "./client-greeting";

export default function Home() {
    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(
        trpc.hello.queryOptions({
            text: "world",
        }),
    );
    return (
        <div className="mx-auto flex h-screen w-full max-w-7xl items-center justify-center">
            <div className="grid w-full grid-cols-2">
                <Card className="w-full max-w-md">
                    <CardHeader className="hidden">
                        <CardTitle></CardTitle>
                    </CardHeader>
                    <CardContent>
                        <HydrationBoundary state={dehydrate(queryClient)}>
                            <ClientGreeting />
                        </HydrationBoundary>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
