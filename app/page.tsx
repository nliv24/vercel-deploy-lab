export default function Home() {
  const greeting = process.env.NEXT_PUBLIC_GREETING || "Hello from Vercel";
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
        {greeting}
      </h1>
      <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">{today}</p>
    </div>
  );
}
