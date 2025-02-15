import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ReactNode, useState } from "react";
import { ButtonPrimary } from "./Buttons";
import api from "@/Services/API";

interface Props {
  children: ReactNode;
  newProfilePicture?: File | null | string;
}

export function EditProfile({ children, newProfilePicture }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [profilePicture, setProfilePicture] = useState(newProfilePicture);

  const handleUsername = (e: string) => {
    setUsername(e);
  };

  const handlePassword = (e: string) => {
    setPassword(e);
  };
  const userID = localStorage.getItem("userID");

  const handleSave = async () => {
    console.log("here1");
    if (userID != null) {
      const data = new FormData();
      data.append("id", userID);
      data.append("username", username);
      console.log("here2");
      if (profilePicture != undefined) {
        data.append("profilePicture", profilePicture);
        console.log("here2maybe");
      }
      console.log("here3");

      try {
        const response = await api.post("/User/Update", data);
        return response.data;
      } catch (error) {
        console.error("Update failed:", error);
        return null;
      }
    } else {
      return;
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Username
            </Label>
            <Input
              value={username}
              onChange={(e) => handleUsername(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Password
            </Label>
            <Input
              value={password}
              onChange={(e) => handlePassword(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Profile Picture
            </Label>
            <Input
              type="file"
              onChange={(event) => {
                if (event != null) {
                  setProfilePicture(event.target.files?.[0]);
                }
              }}
              className="col-span-3"
            />
          </div>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <ButtonPrimary onClick={handleSave}>Save Changes</ButtonPrimary>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

// const formSchema = z.object({
//   username: z.string().min(2),
//   password: z.string(),
//   profilePicture: z.instanceof(File).optional(),
// });
