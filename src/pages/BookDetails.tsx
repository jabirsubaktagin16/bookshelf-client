import BorrowModal from "@/components/modules/Borrow/BorrowModal";
import Loading from "@/components/shared/Loading";
import { useGetBookDetailsQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetBookDetailsQuery(id);

  return (
    <>
      {isLoading && <Loading />}
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 ">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-5xl">
          {data?.data?.title}
        </h1>
        <div className="flow-root my-8">
          <dl className="-my-3 divide-y divide-gray-200 text-sm">
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Author</dt>

              <dd className="text-gray-700 sm:col-span-2">
                {data?.data?.author}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Genre</dt>

              <dd className="text-gray-700 sm:col-span-2">
                {data?.data?.genre}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">ISBN</dt>

              <dd className="text-gray-700 sm:col-span-2">
                {data?.data?.isbn}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Copies</dt>

              <dd className="text-gray-700 sm:col-span-2">
                {data?.data?.copies}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Availability Status</dt>

              <dd className="text-gray-700 sm:col-span-2">
                {data?.data?.available ? "Available" : "Not Available"}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Description</dt>

              <dd className="text-gray-700 sm:col-span-2">
                {data?.data?.description}
              </dd>
            </div>
          </dl>
        </div>
        <div className="float-right">
          <BorrowModal detailedView={true} book={data?.data} />
        </div>
      </div>
    </>
  );
};

export default BookDetails;
