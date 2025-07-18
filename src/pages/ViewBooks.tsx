import AddBookModal from "@/components/modules/Books/AddBookModal";
import DeleteBookModal from "@/components/modules/Books/DeleteBookModal";
import UpdateBookModal from "@/components/modules/Books/UpdateBookModal";
import BorrowModal from "@/components/modules/Borrow/BorrowModal";
import Loading from "@/components/shared/Loading";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import { setBook } from "@/redux/features/book/bookSlice";
import { useAppDispatch } from "@/redux/hooks";
import type { IBook } from "@/types/types";
import { useState } from "react";

const ViewBooks = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data, isLoading, error } = useGetBooksQuery({ page, limit });

  const dispatch = useAppDispatch();

  dispatch(setBook(data?.data));

  const handleLimitChange = (value: string) => {
    setLimit(Number(value));
    setPage(1); // Reset to first page when limit changes
  };

  return (
    <section>
      {isLoading && <Loading />}
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-4 md:space-y-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Every Book, One Place
            </h2>

            <p className="mt-4 text-gray-700">
              Explore the complete collection of books available in the library.
              Use the search or filter options to quickly find what you're
              looking for — whether it's a specific title, author, or category.
              Start discovering your next great read!
            </p>
          </div>

          <div className="flex items-center justify-between">
            <Select
              onValueChange={handleLimitChange}
              defaultValue={limit.toString()}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Choose a Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Size</SelectLabel>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="15">15</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <AddBookModal />
          </div>

          <div className="overflow-x-auto rounded border border-gray-300 shadow-sm">
            <table className="min-w-full divide-y-2 divide-gray-200">
              <thead className="ltr:text-left rtl:text-right">
                <tr className="*:font-medium *:text-gray-900">
                  <th className="px-3 py-2 whitespace-nowrap">Title</th>
                  <th className="px-3 py-2 whitespace-nowrap">Author</th>
                  <th className="px-3 py-2 whitespace-nowrap">Genre</th>
                  <th className="px-3 py-2 whitespace-nowrap">ISBN</th>
                  <th className="px-3 py-2 whitespace-nowrap">Copies</th>
                  <th className="px-3 py-2 whitespace-nowrap">Availability</th>
                  <th className="px-3 py-2 whitespace-nowrap text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {data?.data.map((book: IBook) => (
                  <tr className="*:text-gray-900 *:first:font-medium">
                    <td className="px-3 py-2 whitespace-nowrap">
                      {book.title}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {book.author}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {book.genre}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">{book.isbn}</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {book.copies}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {book.available ? "Available" : "Not Available"}
                    </td>
                    <td className="px-3 flex gap-2 py-2 text-center whitespace-nowrap">
                      <BorrowModal book={book} />
                      <DeleteBookModal bookId={book.id} />
                      <UpdateBookModal book={book} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <button
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
            >
              Previous
            </button>
            <span className="text-sm">Page {page}</span>
            <button
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              disabled={data?.data?.length < limit}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewBooks;
