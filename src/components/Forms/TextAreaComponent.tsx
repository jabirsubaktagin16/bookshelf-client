import type { IInputComponent } from "@/types/types";
import { Controller } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

const TextAreaComponent = ({
  name,
  label,
  placeholder,
  defaultValue,
}: IInputComponent) => {
  return (
    <div className="grid gap-2">
      <Controller
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Textarea
                placeholder={placeholder}
                className="resize-none rounded-none"
                {...field}
                value={field.value || defaultValue}
                autoComplete="off"
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

export default TextAreaComponent;
