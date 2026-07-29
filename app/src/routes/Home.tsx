export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Welcome
      </p>
      <h1
        className="font-heading text-5xl font-semibold tracking-tight text-foreground text-balance sm:text-6xl"
        style={{
          color: "#C16F53"
        }}>
        Hello, world
      </h1>
      <p className="max-w-md text-base text-muted-foreground text-pretty">
        Your app is up and running. This is the starting point — build from here.
      </p>
    </main>
  );
}
