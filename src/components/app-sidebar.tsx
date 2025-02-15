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
import SearchUser from "./SearchUser";
import { PreloadContactList } from "./Preloader";
import { useEffect, useState } from "react";
import { PopOver } from "./PopOver";
import { ButtonDanger, ButtonPrimary } from "./Buttons";
import { logout } from "@/Services/AuthService";

export function AppSidebar() {
  const [users, setUsers] = useState([
    { username: "", image: "", fallback: "", url: "" },
  ]);

  //const [counter, setCounter] = useState(0);
  const counter = 0;

  useEffect(() => {
    // while (counter <= 10) {
    //   setCounter(counter + 1);
    // }
    // Menu items.
    setUsers([
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
    ]);
  }, []);

  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="text-2xl mx-2 mt-1">ChatALot</h1>

        <SearchUser />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg">
            Your contacts
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {users ? (
                users.map((user) => (
                  <SidebarMenuItem key={user.username}>
                    <SidebarMenuButton asChild className="h-15">
                      <DisplayAvatar
                        username={user.username}
                        image={user.image}
                        url={user.url}
                      />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              ) : (
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    {counter < 10 && (
                      <>
                        {Array.from({ length: 10 }, (_, i) => (
                          <PreloadContactList key={i} />
                        ))}
                      </>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <PopOver
              children={
                <div className="flex w-full hover:bg-sidebar-accent cursor-pointer h-15">
                  <Settings />
                  <span className="text-lg">Settings</span>
                </div>
              }
              options={[
                <ButtonPrimary onClick={() => console.log("clicked")}>
                  Click me
                </ButtonPrimary>,
                <ButtonDanger onClick={logout}>Logout</ButtonDanger>,
              ]}
              description="This is your settings tab."
            />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarFooter>
    </Sidebar>
  );
}

//multiple contacts
