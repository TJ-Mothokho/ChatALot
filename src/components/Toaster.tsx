"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
//import { on } from "node:stream";

interface Props {
  message?: string;
  description: string;
  onClose?: () => void;
  onContinue?: () => void;
}

export function Toaster({ message, description, onClose, onContinue }: Props) {
  onClose = onClose ?? (() => console.log("closed"));
  onContinue = onContinue ?? (() => console.log("continue"));
  message = message ?? "";

  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.custom((t) => (
          <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 w-[300px] max-w-[90%] h-[auto]">
            <p className="font-semibold">{message}</p>
            <p className="text-gray-500">{description}</p>
            <div className="flex justify-end gap-2 mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  toast.dismiss(t);
                  onClose();
                }}
              >
                Close
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => {
                  toast.dismiss(t);
                  onContinue();
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        ))
      }
    >
      Show Toast
    </Button>
  );
}
