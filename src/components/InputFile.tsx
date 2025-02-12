// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// interface Props {
//   id: string;
//   htmlFor: string;
//   label: string;
// }

// export function InputFile({ id, htmlFor, label }: Props) {
//   return (
//     <div className="grid w-full max-w-sm items-center gap-1.5">
//       <Label htmlFor={htmlFor}>{label}</Label>
//       <Input id={id} type="file" />
//     </div>
//   );
// }

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  id: string;
  label: string;
  register: UseFormRegisterReturn;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function InputFile({ id, label, register, onChange }: Props) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type="file"
        {...register} // Connect to react-hook-form
        onChange={onChange} // Handle file selection
      />
    </div>
  );
}
