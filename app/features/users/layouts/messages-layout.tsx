import { Outlet } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "~/common/components/ui/sidebar";
import { MessageCard } from "../components/message-card";

export default function ProfileLayout() {
  return (
    <SidebarProvider className="max-h-[calc(100vh-14rem)] overflow-hidden h-full min-h-full">
      <Sidebar className="pt-16" variant="floating">
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {Array.from({ length: 20 }).map((_, index) => (
                <MessageCard
                  key={index}
                  id={index.toString()}
                  name={`User ${index}`}
                  lastMessage={`Last message ${index}`}
                  avatarUrl={`https://github.com/serranoarevalo.png`}
                />
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div className="h-full flex-1">
        <Outlet />
      </div>
    </SidebarProvider>
  );
}
