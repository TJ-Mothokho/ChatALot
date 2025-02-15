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
//import {PasswordInput} from "@/components/ui/password-input"
import { Switch } from "@/components/ui/switch";
import { login } from "@/Services/AuthService";
import { Toaster } from "./Toaster";

const formSchema = z.object({
  username: z.string(),
  password: z.string(),
  rememberMe: z.boolean(),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      const user = await login(values.username, values.password);
      if (!user) {
        console.log(user);
        console.log("Invalid username or password.");
        alert("Invalid username or password.");
      } else {
        console.log(user);
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Form submission error", error);
      // toast("Failed to submit the form. Please try again.");
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
          <Toaster message="test 2" description="testing 2" />
        </form>
      </Form>
    </>
  );
}
