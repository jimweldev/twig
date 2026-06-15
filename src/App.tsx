import heroLightImg from "./assets/hero-light.jpg";
import heroDarkImg from "./assets/hero-dark.jpg";
import { useTheme } from "./useTheme";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./index.css";

Fancybox.bind("[data-fancybox='hero']", {
  Carousel: {
    Thumbs: false,
    Toolbar: {
      display: {
        left: ["counter"],
        right: ["toggleFull", "close"],
      },
    },
  },
});

const features = [
  {
    icon: "🏫",
    title: "School Management",
    desc: "Organize school years, sections, and student rosters in one place.",
    card: "border-blue-100 bg-blue-50/60 dark:border-blue-500/20 dark:bg-gradient-to-br dark:from-blue-500/10 dark:to-indigo-500/10",
    iconBg: "bg-blue-100 dark:bg-blue-500/10",
  },
  {
    icon: "📊",
    title: "Grade Tracking",
    desc: "Record grades by subject and view instant summaries with analytics.",
    card: "border-violet-100 bg-violet-50/60 dark:border-violet-500/20 dark:bg-gradient-to-br dark:from-violet-500/10 dark:to-purple-500/10",
    iconBg: "bg-violet-100 dark:bg-violet-500/10",
  },
  {
    icon: "📝",
    title: "Lesson Planning",
    desc: "Create, edit, and duplicate lesson plans with a rich text editor.",
    card: "border-emerald-100 bg-emerald-50/60 dark:border-emerald-500/20 dark:bg-gradient-to-br dark:from-emerald-500/10 dark:to-teal-500/10",
    iconBg: "bg-emerald-100 dark:bg-emerald-500/10",
  },
  {
    icon: "📋",
    title: "Exam Builder",
    desc: "Build exams from question banks and export to PDF or Word.",
    card: "border-orange-100 bg-orange-50/60 dark:border-orange-500/20 dark:bg-gradient-to-br dark:from-orange-500/10 dark:to-amber-500/10",
    iconBg: "bg-orange-100 dark:bg-orange-500/10",
  },
  {
    icon: "🎮",
    title: "Classroom Games",
    desc: "Engage students with Round 'Em Up and Squad Up interactive games.",
    card: "border-pink-100 bg-pink-50/60 dark:border-pink-500/20 dark:bg-gradient-to-br dark:from-pink-500/10 dark:to-rose-500/10",
    iconBg: "bg-pink-100 dark:bg-pink-500/10",
  },
  {
    icon: "🔒",
    title: "Fully Offline",
    desc: "All data stays on your device. No server, no account, no internet.",
    card: "border-slate-100 bg-slate-50/60 dark:border-slate-500/20 dark:bg-gradient-to-br dark:from-slate-500/10 dark:to-gray-500/10",
    iconBg: "bg-slate-100 dark:bg-slate-500/10",
  },
];

function SunIcon() {
  return (
    <svg
      className="h-4.5 w-4.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      className="h-4.5 w-4.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
      <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
    </svg>
  );
}

export default function App() {
  const { isDark, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0f] text-gray-900 dark:text-white antialiased selection:bg-violet-500/30 transition-colors duration-300">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-gray-200 dark:border-white/5 bg-white/80 dark:bg-[#0a0a0f]/80 backdrop-blur-xl transition-colors duration-300">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2.5">
            <img
              src="/favicon.svg"
              alt="Twig logo"
              className="h-8 w-8 rounded-xl object-contain"
            />
            <span className="text-lg font-semibold tracking-tight">Twig</span>
          </a>
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="flex items-center justify-center h-9 w-9 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            <a
              href="#download"
              className="rounded-lg bg-gray-900 dark:bg-white px-4 py-2 text-sm font-semibold text-white dark:text-gray-900 transition hover:bg-gray-700 dark:hover:bg-white/90"
            >
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 px-6">
        {/* Background glow orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-violet-400/10 dark:bg-violet-600/20 blur-[120px]" />
          <div className="absolute top-20 -left-20 h-[400px] w-[400px] rounded-full bg-blue-400/8 dark:bg-blue-600/10 blur-[100px]" />
          <div className="absolute top-20 -right-20 h-[400px] w-[400px] rounded-full bg-indigo-400/8 dark:bg-indigo-600/10 blur-[100px]" />
        </div>

        {/* Grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(100,100,120,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(100,100,120,0.8) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <img
            src="/favicon.svg"
            alt="Twig logo"
            className="mx-auto mb-8 h-20 w-20 rounded-2xl object-contain drop-shadow-xl"
          />

          <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/50 dark:border-violet-500/30 bg-violet-50 dark:bg-violet-500/10 px-4 py-1.5 text-sm text-violet-600 dark:text-violet-300 mb-8">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-500 dark:bg-violet-400 animate-pulse" />
            Free for teachers · No account needed
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-gray-900 dark:text-white">
            The classroom tool
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 dark:from-violet-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              teachers deserve
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-500 dark:text-white/50 leading-relaxed">
            Twig is a free desktop app for managing school operations — grades,
            lesson plans, exams, and student rosters — all stored locally on
            your device.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#download"
              className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-b from-violet-500 to-violet-700 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:shadow-violet-500/40 hover:brightness-110"
            >
              <DownloadIcon />
              Download Free
            </a>
          </div>

          {/* Hero screenshots — light + dark layered */}
          <div className="relative mt-20 px-4">
            <div className="absolute inset-x-0 -top-6 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-b from-violet-400/10 dark:from-violet-500/20 via-transparent to-transparent blur-2xl" />

            {/* Dark screenshot — behind, offset right */}
            <div className="absolute top-6 left-[52%] right-0 z-0 hidden sm:block">
              <a
                data-fancybox="hero"
                href={heroDarkImg}
                className="block cursor-zoom-in"
              >
                <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/50 opacity-80 transition hover:opacity-100">
                  <img
                    src={heroDarkImg}
                    alt="Twig dark mode"
                    className="w-full object-cover"
                  />
                </div>
              </a>
            </div>

            {/* Light screenshot — front, left-aligned */}
            <div className="relative z-10 sm:w-[58%]">
              <a
                data-fancybox="hero"
                href={heroLightImg}
                className="block cursor-zoom-in"
              >
                <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-white/15 shadow-2xl shadow-gray-300/60 dark:shadow-black/70">
                  <div className="absolute inset-0 bg-gradient-to-b from-violet-100/20 dark:from-violet-900/10 to-transparent pointer-events-none z-10" />
                  <img
                    src={heroLightImg}
                    alt="Twig light mode"
                    className="w-full object-cover"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-gray-50/80 dark:bg-transparent">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3">
              Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Everything in one place
            </h2>
            <p className="mt-4 text-gray-500 dark:text-white/40 max-w-md mx-auto">
              Built for teachers, designed to stay out of your way.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className={`group relative overflow-hidden rounded-2xl border p-6 transition hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-black/30 ${f.card}`}
              >
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl text-2xl mb-4 ${f.iconBg}`}
                >
                  {f.icon}
                </div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-gradient-to-br from-violet-50 via-white to-blue-50 dark:from-violet-900/30 dark:via-[#0f0f1a] dark:to-blue-900/20 p-12 sm:p-16 text-center transition-colors duration-300">
            {/* Glow */}
            <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[300px] w-[500px] rounded-full bg-violet-300/20 dark:bg-violet-600/15 blur-[80px]" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3">
                Download
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Get Twig for free
              </h2>
              <p className="mt-4 text-gray-500 dark:text-white/40 max-w-sm mx-auto">
                Available for Windows and macOS. No sign-up, no subscription.
              </p>

              <div className="mt-12 grid gap-4 sm:grid-cols-2 max-w-xl mx-auto">
                {/* Windows */}
                <a
                  href="https://github.com/jimweldev/twig/releases/latest/download/twig_windows.exe"
                  className="group flex flex-col items-center gap-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-8 transition hover:border-violet-300 dark:hover:border-white/20 hover:shadow-md dark:hover:bg-white/10"
                >
                  <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-[#00adef]/10 dark:bg-[#00adef]/10">
                    <svg
                      className="h-10 w-10 text-[#00adef]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-base font-semibold text-gray-900 dark:text-white">
                      Windows
                    </div>
                    <div className="text-xs text-gray-400 dark:text-white/40 mt-1">
                      Windows 10 or later
                    </div>
                  </div>
                  <span className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 dark:bg-gradient-to-b dark:from-white/15 dark:to-white/5 border border-transparent dark:border-white/10 px-4 py-2.5 text-sm font-semibold text-white transition group-hover:bg-gray-700 dark:group-hover:border-white/20 dark:group-hover:from-white/20">
                    <DownloadIcon />
                    Download .exe
                  </span>
                </a>

                {/* macOS */}
                <a
                  href="https://github.com/jimweldev/twig/releases/latest/download/twig_macos.dmg"
                  className="group flex flex-col items-center gap-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-8 transition hover:border-violet-300 dark:hover:border-white/20 hover:shadow-md dark:hover:bg-white/10"
                >
                  <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-gray-100 dark:bg-white/8">
                    <svg
                      className="h-10 w-10 text-gray-700 dark:text-white/70"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-base font-semibold text-gray-900 dark:text-white">
                      macOS
                    </div>
                    <div className="text-xs text-gray-400 dark:text-white/40 mt-1">
                      macOS 11 or later
                    </div>
                  </div>
                  <span className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 dark:bg-gradient-to-b dark:from-white/15 dark:to-white/5 border border-transparent dark:border-white/10 px-4 py-2.5 text-sm font-semibold text-white transition group-hover:bg-gray-700 dark:group-hover:border-white/20 dark:group-hover:from-white/20">
                    <DownloadIcon />
                    Download .dmg
                  </span>
                </a>
              </div>

              <p className="mt-8 mx-auto max-w-md text-xs leading-relaxed text-gray-400 dark:text-white/40">
                <span className="font-semibold text-gray-500 dark:text-white/60">
                  macOS note:
                </span>{" "}
                Twig isn't notarized with a paid Apple Developer certificate, so
                Gatekeeper may warn that the app is{" "}
                <span className="whitespace-nowrap">&ldquo;damaged&rdquo;</span>{" "}
                or from an unidentified developer. After moving Twig to your
                Applications folder, open Terminal and run{" "}
                <code className="rounded bg-gray-100 dark:bg-white/10 px-1.5 py-0.5 font-mono text-[11px] text-gray-700 dark:text-white/80">
                  xattr -cr /Applications/Twig.app
                </code>
                , then open it normally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 dark:border-white/5 py-10 px-6 transition-colors duration-300">
        <div className="mx-auto max-w-6xl flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/favicon.svg"
              alt="Twig"
              className="h-5 w-5 rounded-md object-contain opacity-50"
            />
            <span className="text-sm text-gray-400 dark:text-white/30">
              © 2026 Twig. Built for teachers.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
