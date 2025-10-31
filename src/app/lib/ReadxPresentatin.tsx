import { Link } from "react-router";

export const ReadxPresentation = () => {
  return (
    <main className="grid place-content-center gap-2 min-h-svh">
      <h1 className="text-4xl font-bold">Welcome to ReaDx</h1>
      <p className="text-neutral-300">
        Your go-to platform for managing users efficiently.
      </p>
      <Link className="underline text-blue-500" to="users">
        Go to Users Page
      </Link>
    </main>
  );
};
