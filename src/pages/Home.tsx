import { Link } from "react-router";
import biography from "../assets/genre/biography.png";
import fantasy from "../assets/genre/fantasy.png";
import fiction from "../assets/genre/fiction.png";
import history from "../assets/genre/history.png";
import nonFiction from "../assets/genre/non-fiction.png";
import science from "../assets/genre/science.png";
import hero from "../assets/hero.png";

const Home = () => {
  return (
    <>
      <section className="lg:grid lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
          <div className="max-w-prose text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Welcome to <strong className="text-primary">BookShelf</strong> The
              simple, smart way to manage your library.
            </h1>

            <p className="mt-4 text-base text-gray-700 sm:text-lg/relaxed">
              BookShelf helps you manage your library with ease. Effortlessly
              track books, monitor borrowings, and keep your collection
              organized — whether it's for a small personal library, a school,
              or a community center. Built with simplicity in mind, BookShelf
              makes adding, viewing, and managing books as easy as flipping a
              page.
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <Link
                className="inline-block rounded border border-primary bg-primary px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-primary/90"
                to="/books"
              >
                View Books
              </Link>
            </div>
          </div>

          <img src={hero} className="mx-auto hidden md:block" />
        </div>
      </section>
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 ">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl text-center">
          Explore Our Range of <strong className="text-primary">Genres</strong>
        </h1>

        <p className="my-8 text-base text-pretty text-center text-gray-700 sm:text-lg/relaxed">
          Dive into a world of stories and knowledge — one genre at a time.
          Whether you're in the mood for magical adventures, scientific
          discoveries, or real-life biographies, BookShelf makes it easy to find
          books that match your interests. Browse through our curated categories
          below and uncover your next great read.
        </p>
        <div className="container uppercase font-bold mx-auto mt-6 md:px-52 px-10 grid grid-cols-2 md:grid-cols-3 pt-6 gap-x-16 gap-y-12">
          <div className="text-center">
            <img src={fiction} alt="fiction" />
            <h6 className="text-xl mt-4 text-gray-700">Fiction</h6>
          </div>
          <div className="text-center">
            <img src={nonFiction} alt="non-fiction" />
            <h6 className="text-xl mt-4 text-gray-700">Non-Fiction</h6>
          </div>
          <div className="text-center">
            <img src={science} alt="science" />
            <h6 className="text-xl mt-4 text-gray-700">Science</h6>
          </div>
          <div className="text-center">
            <img src={history} alt="history" />
            <h6 className="text-xl mt-4 text-gray-700">History</h6>
          </div>
          <div className="text-center">
            <img src={biography} alt="biography" />
            <h6 className="text-xl mt-4 text-gray-700">Biography</h6>
          </div>
          <div className="text-center">
            <img src={fantasy} alt="fantasy" />
            <h6 className="text-xl mt-4 text-gray-700">Fantasy</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
