import Link from "next/link";
import ThemeButton from "./ThemeButton";

export default function NavBar() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <h1 className="text-2xl font-medium"></h1>
            Britva <span className="text-teal-500">Blog</span>
          </Link>

          <ThemeButton />
        </div>
      </div>
    </div>
  );
}
