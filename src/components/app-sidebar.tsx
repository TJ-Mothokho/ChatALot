//import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { Settings } from "lucide-react";
//import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
import DisplayAvatar from "./DisplayAvatar";

// Menu items.
const users = [
  {
    username: "rafxjay",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQErgNRo09axdw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731456261506?e=1744848000&v=beta&t=CxJYxuoes5hdaZplzqIcCYnPs3q8vycg_jGtvW1q4ZU",
    fallback: "CN",
    url: "#",
  },
  {
    username: "johndoe",
    image: "https://github.com/shadcn.png",
    fallback: "CN",
    url: "#",
  },
  {
    username: "janedoe",
    image: "https://github.com/janedoe.png",
    fallback: "CN",
    url: "#",
  },
  {
    username: "alice",
    image: "https://github.com/alice.png",
    fallback: "CN",
    url: "#",
  },
  {
    username: "bobsmith",
    image: "https://github.com/bobsmith.png",
    fallback: "CN",
    url: "#",
  },
  {
    username: "charlie",
    image: "https://github.com/charlie.png",
    fallback: "CN",
    url: "#",
  },
  {
    username: "david",
    image: "https://github.com/david.png",
    fallback: "CN",
    url: "#",
  },
  {
    username: "eve",
    image: "https://github.com/eve.png",
    fallback: "CN",
    url: "#",
  },
  {
    username: "frank",
    image: "https://github.com/frank.png",
    fallback: "CN",
    url: "#",
  },
  {
    username: "grace",
    image: "https://github.com/grace.png",
    fallback: "CN",
    url: "#",
  },
  {
    username: "heidi",
    image: "https://github.com/heidi.png",
    fallback: "CN",
    url: "#",
  },
];

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
              {users.map((user) => (
                <SidebarMenuItem key={user.username}>
                  <SidebarMenuButton asChild className="h-15">
                    <DisplayAvatar
                      username={user.username}
                      image={user.image}
                      fallback={user.username[0].toUpperCase()}
                      url={user.url}
                    />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <a href="#">
              <Settings />
              <span className="text-lg">Settings</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarFooter>
    </Sidebar>
  );
}

//multiple contacts
