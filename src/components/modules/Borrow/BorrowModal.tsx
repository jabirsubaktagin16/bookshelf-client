import DatePickerComponent from "@/components/Forms/DatePickerComponent";
import InputComponent from "@/components/Forms/InputComponent";
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
import { Form } from "@/components/ui/form";
import { useBorrowABookMutation } from "@/redux/api/baseApi";

import type { IBook } from "@/types/types";
import { Book } from "lucide-react";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const BorrowModal = ({ book }: { book: IBook }) => {
  const [open, setOpen] = useState(false);
  const form = useForm();

  const [borrowBook, { data }] = useBorrowABookMutation();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (data.quantity < 0) {
      toast.error("Quantity must be a positive number");
    } else if (data.quantity > book.copies) {
      toast.error("Not enough copies available");
    } else {
      const borrowData = {
        book: book.id,
        quantity: data.quantity,
        dueDate: data.dueDate,
      };

      borrowBook(borrowData);

      toast.success("Book Borrowed Successfully");

      setOpen(false);
      form.reset();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <Button
            size="icon"
            className="rounded-none cursor-pointer"
            variant="secondary"
            disabled={!book.available}
          >
            <Book />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Borrow Book</DialogTitle>
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
                  readonly={true}
                />

                <InputComponent
                  name="quantity"
                  label="Quantity"
                  placeholder="Enter Book Quantity"
                  type="number"
                />
                <DatePickerComponent
                  name="dueDate"
                  label="Due Date"
                  placeholder="Select Date"
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

export default BorrowModal;
