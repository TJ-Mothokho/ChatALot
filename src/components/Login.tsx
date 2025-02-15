"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
// import {
//   cn
// } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { login } from "@/Services/AuthService";
import { useDispatch } from "react-redux";
import {
  setAccessToken,
  setProfilePicture,
  setRefreshToken,
  setRole,
  setUserID,
  setUsername,
} from "@/Services/TokenStore";

const formSchema = z.object({
  username: z.string(),
  password: z.string(),
  rememberMe: z.boolean(),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const accessTokenDispatch = useDispatch(); // For token actions
  const refreshTokenDispatch = useDispatch();
  const userIDDispatch = useDispatch();
  const usernameDispatch = useDispatch();
  const roleDispatch = useDispatch();
  const profilePictureDispatch = useDispatch();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      const result = await login(values.username, values.password);
      if (!result) {
        console.log(result);
        console.log("Invalid username or password.");
        alert("Invalid username or password.");
      } else {
        accessTokenDispatch(setAccessToken(result.token)); // Save token
        refreshTokenDispatch(setRefreshToken(result.refreshToken));
        userIDDispatch(setUserID(result.userID));
        usernameDispatch(setUsername(result.username));
        profilePictureDispatch(setProfilePicture(result.profilePicture));
        roleDispatch(setRole(result.role));
        console.log(result);
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-3xl mx-auto py-10"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="" type="text" {...field} />
                </FormControl>
                <FormDescription>Enter your username.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} type="password" />
                </FormControl>
                <FormDescription>Enter your password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel>Remember me</FormLabel>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-readonly
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Login</Button>
        </form>
      </Form>
    </>
  );
}
