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

function BrandPill({ name }: { name: string }) {
  return (
    <span className="inline-flex flex-shrink-0 items-center whitespace-nowrap rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-600">
      {name}
    </span>
  );
}

function MarqueeRow({
  brands,
  direction,
  duration,
}: {
  brands: string[];
  direction: "left" | "right";
  duration: number;
}) {
  return (
    <div className="marquee-row group flex overflow-hidden">
      <div
        className="flex shrink-0 gap-4"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {brands.map((b) => (
          <BrandPill key={b} name={b} />
        ))}
      </div>
      <div
        className="ml-4 flex shrink-0 gap-4"
        aria-hidden="true"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {brands.map((b) => (
          <BrandPill key={`dup-${b}`} name={b} />
        ))}
      </div>
    </div>
  );
}

export default function BrandMarquee() {
  return (
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
        className="space-y-6 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <MarqueeRow brands={ROW_1} direction="left" duration={30} />
        <MarqueeRow brands={ROW_2} direction="right" duration={35} />
      </div>
    </section>
  );
}
