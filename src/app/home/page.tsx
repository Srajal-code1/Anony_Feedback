export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 text-black dark:bg-black dark:text-white">
      <div className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
        <h1 className="mb-4 text-4xl font-bold">Welcome to Mistry Message</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300">
          This is the home page. Use the navigation or sign in to continue.
        </p>
      </div>
    </div>
  );
}
