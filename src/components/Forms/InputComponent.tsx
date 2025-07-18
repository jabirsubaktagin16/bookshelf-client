import type { IInputComponent } from "@/types/types";
import { Controller } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const InputComponent = ({ label, name, placeholder }: IInputComponent) => {
  return (
    <div className="grid gap-2">
      <Controller
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                placeholder={placeholder}
                {...field}
                value={field.value || ""}
                className="rounded-none"
              />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default InputComponent;
