import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import heroLightImg from "./assets/hero-light.jpg";
import heroDarkImg from "./assets/hero-dark.jpg";
import { useTheme } from "./useTheme";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./index.css";

Fancybox.bind("[data-fancybox]", {
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

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const features = [
  {
    icon: "📅",
    title: "School Years",
    desc: "Organize every record by school year so nothing gets lost between terms.",
  },
  {
    icon: "👥",
    title: "Sections & Students",
    desc: "Manage sections and enroll students with clean, searchable rosters.",
  },
  {
    icon: "📊",
    title: "Class Records",
    desc: "Track grades by subject and compute summaries with instant analytics.",
  },
  {
    icon: "📖",
    title: "Lesson Plans",
    desc: "Write, edit, and duplicate lesson plans with a rich text editor.",
  },
  {
    icon: "📋",
    title: "Exams",
    desc: "Build exams from question banks and export them to PDF or Word.",
  },
  {
    icon: "🎮",
    title: "Classroom Games",
    desc: "Engage students with Round 'Em Up and Squad Up interactive games.",
  },
];

const stats = [
  { value: 6, suffix: "", label: "Tools in one place" },
  { value: 100, suffix: "%", label: "Offline & private" },
  { value: 0, prefix: "₱", label: "Cost, forever" },
  { value: 2, suffix: "", label: "Platforms supported" },
];

/* ------------------------------------------------------------------ */
/* Interactive helpers                                                 */
/* ------------------------------------------------------------------ */

/** Wraps children in a scroll-reveal container that fades/slides in once. */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/** Counts up to `value` when it scrolls into view. */
function CountUp({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (value === 0) {
          setDisplay(0);
          return;
        }
        const duration = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(eased * value));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */

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

function HeartIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* App                                                                 */
/* ------------------------------------------------------------------ */

export default function App() {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0f] text-gray-900 dark:text-white antialiased selection:bg-brand/30 transition-colors duration-300">
      {/* Nav */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-gray-200 dark:border-white/5 bg-white/80 dark:bg-[#0a0a0f]/80 backdrop-blur-xl shadow-sm shadow-black/5"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="group flex items-center gap-2.5">
            <img
              src="/favicon.svg"
              alt="Twig logo"
              className="h-8 w-8 rounded-xl object-contain transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
            />
            <span className="text-lg font-semibold tracking-tight">Twig</span>
          </a>

          <div className="flex items-center gap-1 sm:gap-3">
            <a
              href="#features"
              className="hidden sm:block rounded-lg px-3 py-2 text-sm font-medium text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#download"
              className="hidden sm:block rounded-lg px-3 py-2 text-sm font-medium text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Download
            </a>
            <a
              href="#donate"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-gold hover:opacity-80 transition-opacity"
            >
              <HeartIcon className="h-3.5 w-3.5" />
              Donate
            </a>

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
              className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-brand/30 transition hover:brightness-110 hover:shadow-brand/50"
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
          <div className="animate-blob absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-brand/10 dark:bg-brand/25 blur-[120px]" />
          <div className="animate-blob absolute top-20 -left-20 h-[400px] w-[400px] rounded-full bg-blue-400/10 dark:bg-blue-600/15 blur-[100px] [animation-delay:-6s]" />
          <div className="animate-blob absolute top-20 -right-20 h-[400px] w-[400px] rounded-full bg-gold/10 dark:bg-gold/15 blur-[100px] [animation-delay:-12s]" />
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
          <Reveal>
            <img
              src="/favicon.svg"
              alt="Twig logo"
              className="animate-float mx-auto mb-8 h-20 w-20 rounded-2xl object-contain drop-shadow-xl"
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 dark:bg-brand/10 px-4 py-1.5 text-sm text-brand dark:text-blue-300 mb-8">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand dark:bg-blue-400 animate-pulse" />
              Free for teachers · No account needed
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-gray-900 dark:text-white">
              The classroom tool
              <br />
              <span className="animate-gradient bg-gradient-to-r from-brand via-blue-500 to-gold dark:from-blue-400 dark:via-sky-400 dark:to-gold bg-clip-text text-transparent">
                teachers deserve
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-gray-500 dark:text-white/50 leading-relaxed">
              <span className="font-semibold text-gray-700 dark:text-white/70">
                T.W.I.G.
              </span>{" "}
              — Teacher&apos;s Work Integration Gateway. A free desktop app that
              brings grades, lesson plans, exams, and student rosters together,
              all stored locally on your device.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="#download"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-brand px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/30 transition hover:shadow-brand/50 hover:brightness-110 hover:-translate-y-0.5"
              >
                <DownloadIcon />
                Download Free
              </a>
              <a
                href="#donate"
                className="group inline-flex items-center gap-2.5 rounded-xl border border-gray-200 dark:border-white/15 bg-white dark:bg-white/5 px-6 py-3.5 text-base font-semibold text-gray-700 dark:text-white/80 transition hover:border-gold/50 hover:text-gold hover:-translate-y-0.5"
              >
                <HeartIcon className="h-4 w-4 transition-transform group-hover:scale-125" />
                Support Twig
              </a>
            </div>
          </Reveal>

          {/* Hero screenshots — light + dark layered */}
          <Reveal delay={240}>
            <div className="relative mt-20 px-4">
              <div className="absolute inset-x-0 -top-6 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-b from-brand/10 dark:from-brand/20 via-transparent to-transparent blur-2xl" />

              {/* Dark screenshot — behind, offset right */}
              <div className="absolute top-6 left-[52%] right-0 z-0 hidden sm:block">
                <a
                  data-fancybox="hero"
                  href={heroDarkImg}
                  className="block cursor-zoom-in"
                >
                  <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/50 opacity-80 transition duration-300 hover:opacity-100">
                    <img
                      src={heroDarkImg}
                      alt="Twig dark mode"
                      className="w-full object-cover"
                    />
                  </div>
                </a>
              </div>

              {/* Light screenshot — front, left-aligned */}
              <div className="relative z-10 transition duration-500 hover:-translate-y-1 sm:w-[58%]">
                <a
                  data-fancybox="hero"
                  href={heroLightImg}
                  className="block cursor-zoom-in"
                >
                  <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-white/15 shadow-2xl shadow-gray-300/60 dark:shadow-black/70">
                    <div className="absolute inset-0 bg-gradient-to-b from-brand/10 dark:from-brand/10 to-transparent pointer-events-none z-10" />
                    <img
                      src={heroLightImg}
                      alt="Twig light mode"
                      className="w-full object-cover"
                    />
                  </div>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-8">
        <Reveal>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/5 p-8 sm:grid-cols-4 sm:gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold tracking-tight text-brand dark:text-blue-400 sm:text-4xl">
                  <CountUp
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                  />
                </div>
                <div className="mt-1 text-xs font-medium text-gray-500 dark:text-white/40 sm:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand dark:text-blue-400 mb-3">
                Features
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Everything in one gateway
              </h2>
              <p className="mt-4 text-gray-500 dark:text-white/40 max-w-md mx-auto">
                Built for teachers, designed to stay out of your way.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 80}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10 dark:hover:shadow-black/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-gold/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-2xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      {f.icon}
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                      {f.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-gradient-to-br from-blue-50 via-white to-amber-50/60 dark:from-[#101826] dark:via-[#0f0f1a] dark:to-[#1a160e] p-12 sm:p-16 text-center transition-colors duration-300">
              {/* Glow */}
              <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[300px] w-[500px] rounded-full bg-brand/15 dark:bg-brand/15 blur-[80px]" />

              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-widest text-brand dark:text-blue-400 mb-3">
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
                    className="group flex flex-col items-center gap-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-8 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md dark:hover:bg-white/10"
                  >
                    <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-[#00adef]/10 transition-transform duration-300 group-hover:scale-110">
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
                    <span className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white transition group-hover:brightness-110">
                      <DownloadIcon />
                      Download .exe
                    </span>
                  </a>

                  {/* macOS */}
                  <a
                    href="https://github.com/jimweldev/twig/releases/latest/download/twig_macos.dmg"
                    className="group flex flex-col items-center gap-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-8 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md dark:hover:bg-white/10"
                  >
                    <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-gray-100 dark:bg-white/8 transition-transform duration-300 group-hover:scale-110">
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
                    <span className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white transition group-hover:brightness-110">
                      <DownloadIcon />
                      Download .dmg
                    </span>
                  </a>
                </div>

                <p className="mt-8 mx-auto max-w-md text-xs leading-relaxed text-gray-400 dark:text-white/40">
                  <span className="font-semibold text-gray-500 dark:text-white/60">
                    macOS note:
                  </span>{" "}
                  Twig isn&apos;t notarized with a paid Apple Developer
                  certificate, so macOS may warn that it&apos;s from an
                  unidentified developer the first time you open it.{" "}
                  <span className="font-medium text-gray-500 dark:text-white/60">
                    Easiest fix:
                  </span>{" "}
                  move Twig to your Applications folder, then right-click (or
                  Control-click) the app and choose{" "}
                  <span className="whitespace-nowrap">Open → Open</span>. You
                  only need to do this once. If macOS instead says the app is{" "}
                  <span className="whitespace-nowrap">
                    &ldquo;damaged&rdquo;
                  </span>
                  , open Terminal and run{" "}
                  <code className="rounded bg-gray-100 dark:bg-white/10 px-1.5 py-0.5 font-mono text-[11px] text-gray-700 dark:text-white/80">
                    xattr -cr /Applications/Twig.app
                  </code>
                  , then open it normally.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-amber-50/80 via-white to-amber-50/40 dark:from-[#1a160e] dark:via-[#0f0f1a] dark:to-[#161009] p-10 sm:p-14 transition-colors duration-300">
              <div className="pointer-events-none absolute -top-24 right-0 h-[300px] w-[300px] rounded-full bg-gold/15 blur-[90px]" />

              <div className="relative grid items-center gap-10 sm:grid-cols-2">
                {/* Copy */}
                <div className="text-center sm:text-left">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-sm font-medium text-gold mb-5">
                    <HeartIcon className="h-3.5 w-3.5" />
                    Support Twig
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Keep Twig free for teachers
                  </h2>
                  <p className="mt-4 text-gray-500 dark:text-white/50 leading-relaxed">
                    Twig is free to use and always will be. If it helps your
                    teaching, a small donation is always appreciated — but
                    completely optional. Scan the QR code to send your support.
                  </p>

                  <blockquote className="mt-6 border-l-2 border-gold/50 pl-4 text-left text-sm italic text-gray-500 dark:text-white/50">
                    <p>
                      Each one must give as he has decided in his heart, not
                      reluctantly or under compulsion, for God loves a cheerful
                      giver.
                    </p>
                    <footer className="mt-2 font-medium not-italic text-gray-700 dark:text-white/70">
                      2 Corinthians 9:6-7
                    </footer>
                  </blockquote>
                </div>

                {/* QR */}
                <div className="flex justify-center">
                  <a
                    data-fancybox="donate"
                    href="/donate-qr.jpg"
                    className="group block cursor-zoom-in"
                    aria-label="Open donation QR code"
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/15 bg-white p-3 shadow-xl shadow-gold/10 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-gold/20">
                      <img
                        src="/donate-qr.jpg"
                        alt="Donation QR code"
                        className="h-56 w-56 rounded-lg object-contain"
                      />
                      <span className="mt-3 block text-center text-xs font-medium text-gray-400">
                        Tap to enlarge
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
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
          <div className="flex items-center gap-5 text-sm text-gray-400 dark:text-white/30">
            <a
              href="#features"
              className="hover:text-gray-700 dark:hover:text-white/60 transition-colors"
            >
              Features
            </a>
            <a
              href="#download"
              className="hover:text-gray-700 dark:hover:text-white/60 transition-colors"
            >
              Download
            </a>
            <a
              href="#donate"
              className="hover:text-gold transition-colors"
            >
              Donate
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
