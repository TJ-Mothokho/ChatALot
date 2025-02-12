//import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
// const items = [
//   {
//     title: "Home",
//     url: "#",
//     icon: Home,
//   }
// ];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1>ChatALot</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Your contacts</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-15">
                  <a href="#">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="text-lg">John Doe</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <a href="#">
              <Settings />
              <span>Settings</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
        App created by{" "}
        <a href="https://www.linkedin.com/in/TJ-Mothokho" target="_blank">
          Tshiamo Mothokho
        </a>
      </SidebarFooter>
    </Sidebar>
  );
}

//multiple contacts
// {items.map((item) => (
//     <SidebarMenuItem key={item.title}>
//     <SidebarMenuButton asChild>
//       <a href={item.url}>
//         <item.icon />
//         <span>{item.title}</span>
//       </a>
//     </SidebarMenuButton>
//   </SidebarMenuItem>
// ))}
