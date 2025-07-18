import { Menu } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const Navbar = () => {
  return (
    <header className="w-full">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="text-lg font-semibold text-primary">BookShelf</div>

        {/* Desktop Nav Links with Dropdown */}
        <nav className="hidden gap-6 text-sm font-medium md:flex items-center">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <Link
            to="/books"
            className="text-muted-foreground hover:text-foreground"
          >
            All Books
          </Link>
          <Link
            to="/borrow-summary"
            className="text-muted-foreground hover:text-foreground"
          >
            Borrow Summary
          </Link>
        </nav>

        {/* Mobile Menu (Sheet) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4 mt-6">
                <Link to="/" className="hover:underline">
                  Home
                </Link>

                {/* Simulated Dropdown in mobile */}
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Books</span>
                  <a
                    href="/books"
                    className="pl-4 text-muted-foreground hover:text-foreground"
                  >
                    All Books
                  </a>
                  <a
                    href="/books/add"
                    className="pl-4 text-muted-foreground hover:text-foreground"
                  >
                    Add Book
                  </a>
                  <a
                    href="/books/categories"
                    className="pl-4 text-muted-foreground hover:text-foreground"
                  >
                    Categories
                  </a>
                </div>

                <a href="#" className="hover:underline">
                  Borrow
                </a>
                <a href="#" className="hover:underline">
                  About
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
