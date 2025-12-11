"use client";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { useLogout } from "@/features/auth/hooks/use-auth";
import { LogOutIcon } from "lucide-react";

export const ScanSidebarLogout = () => {
    const { mutateAsync, isPending } = useLogout();
    const handleClick = () => {
        mutateAsync(undefined);
    };
    return (
        <SidebarMenuItem>
            <SidebarMenuButton disabled={isPending} onClick={handleClick}>
                <LogOutIcon />
                {isPending ? "Loading" : "Log out"}
            </SidebarMenuButton>
        </SidebarMenuItem>
    );
};
