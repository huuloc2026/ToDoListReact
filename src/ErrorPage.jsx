import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex items-center justify-center h-screen">
      <div className="text-center mx-4">
        <h1 className="mb-4 text-6xl md:text-8xl font-semibold text-red-500">
          404
        </h1>
        <p className="mb-4 text-lg md:text-xl text-gray-600">
          Oops! Looks like you're lost.
        </p>

        <p className="mt-4 text-sm md:text-base text-gray-600">
          Let's get you back{" "}
          <Link href="/" className="text-blue-500 underline">
            Home
          </Link>
          .
        </p>
        <img
          className="animate-pulse mb-4 w-[300px] h-[300px] md:w-[300px] md:h-[300px] mx-auto"
          src="https://static.vecteezy.com/system/resources/previews/011/153/364/non_2x/3d-website-developer-working-on-laptop-illustration-png.png"
          alt="Error Illustration"
        />
      </div>
    </div>
  );
}
