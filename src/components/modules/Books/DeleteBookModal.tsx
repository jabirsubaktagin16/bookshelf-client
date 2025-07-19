import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useDeleteBookMutation } from "@/redux/api/baseApi";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

interface IProps {
  bookId: string;
}

const DeleteBookModal = ({ bookId }: IProps) => {
  const [open, setOpen] = useState(false);
  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = () => {
    deleteBook(bookId);
    toast.success("Book Deleted Successfully");
    toggleModal();
  };

  const toggleModal = () => {
    setOpen((prev) => !prev);
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild onClick={toggleModal}>
        <Button className="rounded-none" size="icon" variant="destructive">
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. Are you sure you want to delete this
            book?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={toggleModal}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteBookModal;
