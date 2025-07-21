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

const InputComponent = ({
  label,
  name,
  placeholder,
  defaultValue,
  readonly,
  type,
  required,
}: IInputComponent) => {
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
                className="rounded-none"
                autoComplete="off"
                readOnly={readonly}
                type={type}
                defaultValue={defaultValue}
                required={required}
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
