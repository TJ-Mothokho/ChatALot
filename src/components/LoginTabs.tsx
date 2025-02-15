import Login from "@/components/Login";
import Register from "@/components/Register";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function LoginTabs() {
  return (
    <div className="flex justify-center items-center h-[200px] w-[450px] mt-3 mx-3">
      <Tabs defaultValue="login" className="w-[350px] h-[75px]">
        <TabsList className="grid w-full grid-cols-2 bg-blue-600 text-white">
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
