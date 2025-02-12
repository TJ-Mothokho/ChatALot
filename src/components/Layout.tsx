import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex overflow-hidden">
      <SidebarProvider>
        <AppSidebar />
        <main className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-screen">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
