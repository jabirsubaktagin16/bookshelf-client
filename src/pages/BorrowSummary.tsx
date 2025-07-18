import Loading from "@/components/shared/Loading";
import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";
import type { IBorrowSummary } from "@/types/types";

const BorrowSummary = () => {
  const { data, isLoading } = useGetBorrowSummaryQuery(undefined);

  return (
    <section>
      {isLoading && <Loading />}
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-4 md:space-y-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Borrow History
            </h2>

            <p className="mt-4 text-gray-700">
              View a complete summary of all borrowed books, including total
              quantity of books borrowed. Keep track of ongoing borrows and
              ensure timely returns — all in one convenient place.
            </p>
          </div>

          <div className="overflow-x-auto rounded border border-gray-300 shadow-sm">
            <table className="min-w-full divide-y-2 divide-gray-200">
              <thead className="ltr:text-left rtl:text-right">
                <tr className="*:font-medium *:text-gray-900">
                  <th className="px-3 py-2 whitespace-nowrap">Title</th>

                  <th className="px-3 py-2 whitespace-nowrap">ISBN</th>
                  <th className="px-3 py-2 whitespace-nowrap">
                    Total Quantity Borrowed
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {data?.data.map((borrow: IBorrowSummary) => (
                  <tr className="*:text-gray-900 *:first:font-medium">
                    <td className="px-3 py-2 whitespace-nowrap">
                      {borrow?.book.title}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {borrow?.book.isbn}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {borrow?.totalQuantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BorrowSummary;
