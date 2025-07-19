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
import { useUpdateBookMutation } from "@/redux/api/baseApi";
import type { IBook } from "@/types/types";
import { genreOptions } from "@/utils/constant";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateBookModal = ({ book }: { book: IBook }) => {
  const [open, setOpen] = useState(false);
  const form = useForm();

  const [updateBook] = useUpdateBookMutation();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (data.copies < 0) {
      toast.error("Copies must be a positive number");
    } else {
      const bookData = {
        ...data,
        available: data.copies === 0 ? false : true,
      };

      updateBook({ id: book.id, data: bookData });

      toast.success("Book Updated Successfully");

      setOpen(false);
      form.reset();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <Button className="rounded-none" size="icon" variant="default">
            <Pencil />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update Book</DialogTitle>
            <DialogDescription />
          </DialogHeader>
          <Form {...form}>
            <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                <InputComponent
                  name="title"
                  label="Title"
                  placeholder="Enter Book Title"
                  defaultValue={book.title}
                />
                <InputComponent
                  name="author"
                  label="Author"
                  placeholder="Enter Book Author"
                  defaultValue={book.author}
                />
                <FormField
                  name="genre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Genre</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={book.genre}
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
                  defaultValue={book.isbn}
                />
                <InputComponent
                  name="copies"
                  label="Copies"
                  placeholder="Enter Book Copies"
                  defaultValue={book.copies.toString()}
                  type="number"
                />
                <TextAreaComponent
                  name="description"
                  label="Description"
                  placeholder="Enter Book Description"
                  defaultValue={book.description}
                />
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default UpdateBookModal;
