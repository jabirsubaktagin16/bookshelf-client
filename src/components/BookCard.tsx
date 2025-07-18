import type { IBook } from "@/types/types";

const BookCard = ({ book }: { book: IBook }) => {
  return (
    <article className="rounded-[10px] border border-gray-200 bg-white px-4 pb-4">
      <div className="my-4 flex flex-wrap gap-1">
        <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-purple-600">
          {book.genre}
        </span>
      </div>

      <div className="mb-4">
        <a href="#" className="hover:underline">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            {book.title}
          </h3>
        </a>
      </div>
      <p className="block text-xs text-gray-500">
        by <strong>{book.author}</strong>
      </p>
    </article>
  );
};

export default BookCard;
