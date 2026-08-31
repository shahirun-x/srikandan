"use client";

import { useRef, useEffect, useState } from "react";

interface Item {
  num: string;
  title: string;
  desc: string;
  stat: string | null;
  suffix?: string;
  display?: string;
  label: string;
}

const ITEMS: Item[] = [
  {
    num: "01",
    title: "Tailored Solutions",
    desc: "We customize our offerings to meet your unique business needs.",
    stat: "98",
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    num: "02",
    title: "Expert Team",
    desc: "Our professionals bring deep expertise and industry experience.",
    stat: "50",
    suffix: "+",
    label: "Certified Professionals",
  },
  {
    num: "03",
    title: "Comprehensive Offerings",
    desc: "From products to services, we provide end-to-end solutions.",
    stat: "200",
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    num: "04",
    title: "Customer Support",
    desc: "Dedicated support team ensuring timely assistance.",
    stat: null,
    display: "< 2hr",
    label: "Response Time",
  },
  {
    num: "05",
    title: "Competitive Pricing",
    desc: "Affordable and transparent pricing for all our solutions.",
    stat: "30",
    suffix: "%",
    label: "Average Cost Saving",
  },
];

function useCountUp(target: number, shouldStart: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [shouldStart, target, duration]);
  return count;
}

function StatBadge({ item, isVisible }: { item: Item; isVisible: boolean }) {
  const numericStat = item.stat ? parseInt(item.stat, 10) : 0;
  const count = useCountUp(numericStat, isVisible);

  return (
    <div className="mt-4 w-full rounded-lg border border-[#4BBFB4]/25 bg-[#4BBFB4]/10 px-4 py-3 text-center">
      <div className="text-2xl font-bold text-[#4BBFB4] lg:text-3xl">
        {item.stat === null ? item.display : `${count}${item.suffix ?? ""}`}
      </div>
      <div className="mt-1 text-[10px] uppercase tracking-wider text-gray-400 sm:text-xs">
        {item.label}
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-us"
      ref={ref}
      className="scroll-mt-24 bg-[#0A1628] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 text-center lg:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#E8A838]">
            The Difference
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Why Choose Sri Kandan Solutions?
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#E8A838]" />
        </div>

        {/* Desktop: 5 columns with connecting line */}
        <div className="relative hidden lg:block">
          {/* Connecting line behind numbers */}
          <div className="absolute left-0 right-0 top-[18px] z-0 h-px bg-gradient-to-r from-transparent via-[#E8A838]/40 to-transparent" />

          <div className="relative z-10 grid grid-cols-5 gap-6">
            {ITEMS.map((item) => (
              <div
                key={item.num}
                className="flex flex-col items-center text-center"
              >
                <span className="bg-[#0A1628] px-3 text-lg font-bold italic text-[#E8A838]">
                  {item.num}
                </span>
                <h3 className="mt-4 text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {item.desc}
                </p>
                <StatBadge item={item} isVisible={isVisible} />
              </div>
            ))}
          </div>
        </div>

        {/* Tablet: 3 + 2 layout */}
        <div className="hidden md:block lg:hidden">
          <div className="mb-6 grid grid-cols-3 gap-6">
            {ITEMS.slice(0, 3).map((item) => (
              <div
                key={item.num}
                className="flex flex-col items-center text-center"
              >
                <span className="text-lg font-bold italic text-[#E8A838]">
                  {item.num}
                </span>
                <h3 className="mt-3 text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
                <StatBadge item={item} isVisible={isVisible} />
              </div>
            ))}
          </div>
          <div className="mx-auto grid max-w-md grid-cols-2 gap-6">
            {ITEMS.slice(3).map((item) => (
              <div
                key={item.num}
                className="flex flex-col items-center text-center"
              >
                <span className="text-lg font-bold italic text-[#E8A838]">
                  {item.num}
                </span>
                <h3 className="mt-3 text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
                <StatBadge item={item} isVisible={isVisible} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: 2-column grid, 5th centered */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-4">
            {ITEMS.slice(0, 4).map((item) => (
              <div
                key={item.num}
                className="flex flex-col items-center text-center"
              >
                <span className="text-base font-bold italic text-[#E8A838]">
                  {item.num}
                </span>
                <h3 className="mt-2 text-sm font-bold">{item.title}</h3>
                <p className="mt-1 hidden text-xs text-gray-400 min-[400px]:block">
                  {item.desc}
                </p>
                <StatBadge item={item} isVisible={isVisible} />
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <div className="flex max-w-[200px] flex-col items-center text-center">
              <span className="text-base font-bold italic text-[#E8A838]">
                {ITEMS[4].num}
              </span>
              <h3 className="mt-2 text-sm font-bold">{ITEMS[4].title}</h3>
              <p className="mt-1 hidden text-xs text-gray-400 min-[400px]:block">
                {ITEMS[4].desc}
              </p>
              <StatBadge item={ITEMS[4]} isVisible={isVisible} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
