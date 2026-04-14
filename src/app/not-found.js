import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl sm:text-9xl font-extrabold text-primary">404</h1>
      <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-heading">
        Page not found
      </h2>
      <p className="mt-3 text-base sm:text-lg text-muted max-w-sm">
        Looks like this page doesn&apos;t exist. Maybe the connection was lost.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-2.5 rounded-md text-sm font-semibold text-white bg-primary hover:bg-hover-primary transition-colors duration-200 shadow-sm active:scale-95"
      >
        Back to Home
      </Link>
    </div>
  );
}
