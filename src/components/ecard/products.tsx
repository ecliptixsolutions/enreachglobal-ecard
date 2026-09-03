import { useEffect, useRef, useState } from "react";
import { productCategories } from "@/lib/ecard-data";

const AUTOPLAY_MS = 2200;

export function ProductsSection() {
  const [active, setActive] = useState(productCategories[0]!.key);
  const category = productCategories.find((c) => c.key === active) ?? productCategories[0]!;

  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const indexRef = useRef(0);
  const interactingRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetCarousel = () => {
    indexRef.current = 0;
    const el = scrollRef.current;
    if (el) el.scrollTo({ left: 0, behavior: "auto" });
  };

  const scrollToIndex = (i: number) => {
    const el = scrollRef.current;
    const card = cardRefs.current[i];
    if (el && card) {
      el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
    }
  };

  const pause = () => {
    interactingRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const resume = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      interactingRef.current = false;
    }, 800);
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (interactingRef.current || !scrollRef.current) return;
      const count = category.items.length;
      if (count <= 1) return;
      const next = (indexRef.current + 1) % count;
      indexRef.current = next;
      scrollToIndex(next);
    }, AUTOPLAY_MS);

    return () => clearInterval(id);
  }, [category.items.length]);

  useEffect(() => {
    resetCarousel();
  }, [active]);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Product categories"
        className="mx-auto mb-5 flex w-full max-w-sm gap-2 rounded-full bg-secondary p-1"
      >
        {productCategories.map((c) => (
          <button
            key={c.key}
            role="tab"
            type="button"
            aria-selected={active === c.key}
            onClick={() => setActive(c.key)}
            className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === c.key
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div
        ref={scrollRef}
        onPointerDown={pause}
        onPointerUp={resume}
        onPointerLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
        onScroll={() => {
          const el = scrollRef.current;
          if (!el || category.items.length <= 1) return;
          const card = cardRefs.current[0];
          if (!card) return;
          const step = card.offsetWidth + 16;
          indexRef.current = Math.round(el.scrollLeft / step);
        }}
        className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3"
        style={{ scrollbarWidth: "thin" }}
      >
        {category.items.map((item, i) => (
          <article
            key={item.name}
            ref={(node) => { cardRefs.current[i] = node; }}
            className="surface w-[68%] max-w-64 shrink-0 snap-start overflow-hidden pointer-events-none sm:w-56"
          >
            <img
              src={item.image}
              alt={`${item.name} ${category.label.toLowerCase()}`}
              loading="lazy"
              decoding="async"
              width={500}
              height={500}
              className="aspect-square w-full object-cover"
            />
            <div className="px-4 py-3">
              <h3 className="font-sans text-sm font-semibold leading-snug">{item.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{item.note}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-2 text-center text-xs text-muted-foreground">Swipe to explore grades</p>
    </div>
  );
}
