import type { IInputComponent } from "@/types/types";
import { SelectItem } from "@radix-ui/react-select";
import { Controller } from "react-hook-form";
import { FormControl, FormItem, FormLabel } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface ISelectComponent extends IInputComponent {
  list: string[];
  defaultValue?: string;
}

const SelectComponent = ({
  label,
  name,
  list,
  placeholder,
  defaultValue,
}: ISelectComponent) => {
  return (
    <div className="grid gap-2">
      <Controller
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Select
                onValueChange={field.onChange}
                defaultValue={defaultValue}
              >
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {list.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default SelectComponent;
