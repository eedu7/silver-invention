import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ScanSidebar } from "@/features/scans/components/scan-sidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function Layout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect("/login");
    }
    return (
        <SidebarProvider>
            <ScanSidebar />
            <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
    );
}
