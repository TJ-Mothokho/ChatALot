import Login from "@/components/Login";
import Register from "@/components/Register";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function LoginPage() {
  return (
    <div className="flex justify-center items-center border">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <Login />
        </TabsContent>

        <TabsContent value="register">
          <Register />
        </TabsContent>
      </Tabs>
    </div>
  );
}
