export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="text-center py-6 border-b">
        <h1 className="text-3x1 font-bold">Welcome to my Next.js Landing page</h1>
        <p className="text-blue-600 mt-2">Built with Next.js</p>
      </header>
      <main className="flex-grow py-10 space-y-10">
        <section className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-semibold mb-2">Section One</h2>
          <p>This is the first section of text for this starter page.</p>
        </section>
        <section className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-semibold mb-2">Section Two</h2>
          <p>This is the section section of text for this starter page.</p>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        &copy; {new Date().getFullYear()} My Next.js App. All rights reserved.
      </footer>
    </div>
  );
}
