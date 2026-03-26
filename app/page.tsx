export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <nav className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-blue-600">nextstep</span>.lk
          </h1>
          <button className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="inline-block rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
          Sri Lanka course discovery platform
        </p>

        <h2 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
          Find external degrees,
          <br />
          diplomas, and certificates
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          A single place for students to discover university and institute courses,
          understand course details, and get AI help to choose the right path.
        </p>

        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Search BIT, Diploma in IT, Management, English..."
            className="flex-1 rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-500"
          />
          <button className="rounded-2xl bg-slate-900 px-6 py-4 text-white hover:bg-slate-800">
            Search
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-8">
          <h3 className="text-2xl font-bold">Latest Opportunities</h3>
          <p className="mt-2 text-slate-600">
            These are placeholder cards for now. Later they will come from Supabase.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border p-6 shadow-sm">
            <p className="text-sm font-semibold text-blue-600">University of Colombo</p>
            <h4 className="mt-2 text-xl font-bold">Bachelor of Information Technology</h4>
            <p className="mt-3 text-slate-600">
              External degree option with flexible learning support.
            </p>
          </div>

          <div className="rounded-3xl border p-6 shadow-sm">
            <p className="text-sm font-semibold text-blue-600">University of Kelaniya</p>
            <h4 className="mt-2 text-xl font-bold">Diploma Program</h4>
            <p className="mt-3 text-slate-600">
              Continuing and distance education based professional study path.
            </p>
          </div>

          <div className="rounded-3xl border p-6 shadow-sm">
            <p className="text-sm font-semibold text-blue-600">University of Moratuwa</p>
            <h4 className="mt-2 text-xl font-bold">IT / Computing Programs</h4>
            <p className="mt-3 text-slate-600">
              Technology-focused programs with strong market relevance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}