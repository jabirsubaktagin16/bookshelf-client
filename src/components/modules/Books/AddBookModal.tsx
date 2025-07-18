import InputComponent from "@/components/Forms/InputComponent";
import TextAreaComponent from "@/components/Forms/TextAreaComponent";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAddBookMutation } from "@/redux/api/baseApi";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const genreOptions: string[] = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
];

const AddBookModal = () => {
  const [open, setOpen] = useState(false);
  const form = useForm();

  const [addTask, { data }] = useAddBookMutation();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (data.copies < 0) {
      toast.error("Copies must be a positive number");
    } else {
      const bookData = {
        ...data,
        available: data.copies === 0 ? false : true,
      };

      addTask(bookData);

      toast.success("Book Added Successfully");

      setOpen(false);
      form.reset();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <Button variant="default">Add New Book</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add a New Book</DialogTitle>
            <DialogDescription />
          </DialogHeader>
          <Form {...form}>
            <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                <InputComponent
                  name="title"
                  label="Title"
                  placeholder="Enter Book Title"
                />
                <InputComponent
                  name="author"
                  label="Author"
                  placeholder="Enter Book Author"
                />
                <FormField
                  name="genre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Genre</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full rounded-none">
                            <SelectValue placeholder="Select a Genre from the List" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {genreOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription />

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <InputComponent
                  name="isbn"
                  label="ISBN"
                  placeholder="Enter Book ISBN"
                />
                <InputComponent
                  name="copies"
                  label="Copies"
                  placeholder="Enter Book Copies"
                />
                <TextAreaComponent
                  name="description"
                  label="Description"
                  placeholder="Enter Book Description"
                />
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AddBookModal;
