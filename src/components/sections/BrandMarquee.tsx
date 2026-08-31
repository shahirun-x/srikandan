"use client";

const ROW_1 = [
  "Dell Technologies",
  "HP Enterprise",
  "Cisco",
  "Microsoft",
  "VMware",
  "Fortinet",
  "Sophos",
  "Lenovo",
];
const ROW_2 = [
  "Adobe",
  "Tally",
  "Zoho",
  "Synology",
  "APC",
  "D-Link",
  "TP-Link",
  "Seagate",
];

/**
 * Injected inline so no CSS build step can strip it. The `!important` on the
 * class rules is deliberate: it out-specifies the global
 * `@media (prefers-reduced-motion) * { animation: ... }` dampener in
 * globals.css, so this decorative ticker keeps scrolling regardless of the OS
 * "reduce motion" setting.
 */
const MARQUEE_CSS = `
@keyframes skMarqueeLeft {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-100% - 3rem)); }
}
@keyframes skMarqueeRight {
  from { transform: translateX(calc(-100% - 3rem)); }
  to { transform: translateX(0); }
}
.sk-mq { will-change: transform; }
.sk-mq-l { animation: skMarqueeLeft 28s linear infinite !important; }
.sk-mq-r { animation: skMarqueeRight 34s linear infinite !important; }
@media (hover: hover) {
  .sk-mq-row:hover .sk-mq-l,
  .sk-mq-row:hover .sk-mq-r { animation-play-state: paused !important; }
}
`;

function Wordmark({ name }: { name: string }) {
  return (
    <span className="flex-shrink-0 whitespace-nowrap font-heading text-lg font-bold tracking-tight text-gray-400 transition-colors duration-300 hover:text-gray-700 sm:text-xl">
      {name}
    </span>
  );
}

function Track({ brands, dir }: { brands: string[]; dir: "l" | "r" }) {
  return (
    <div className="sk-mq-row flex overflow-hidden">
      <div className={`sk-mq sk-mq-${dir} flex shrink-0 gap-12`}>
        {brands.map((b) => (
          <Wordmark key={b} name={b} />
        ))}
      </div>
      <div
        className={`sk-mq sk-mq-${dir} ml-12 flex shrink-0 gap-12`}
        aria-hidden="true"
      >
        {brands.map((b) => (
          <Wordmark key={`d-${b}`} name={b} />
        ))}
      </div>
    </div>
  );
}

export default function BrandMarquee() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: MARQUEE_CSS }} />
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto mb-10 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#4BBFB4]">
            Vendor Partnerships
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Featured Products &amp; Brands
          </h2>
          <div className="mx-auto mb-4 mt-4 h-1 w-12 rounded-full bg-[#E8A838]" />
          <p className="mx-auto max-w-xl text-gray-500">
            We source, license and support solutions from the industry&apos;s most
            trusted names.
          </p>
        </div>
        <div
          className="flex flex-col gap-8 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <Track brands={ROW_1} dir="l" />
          <Track brands={ROW_2} dir="r" />
        </div>
      </section>
    </>
  );
}
