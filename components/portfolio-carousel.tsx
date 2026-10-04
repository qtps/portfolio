'use client';

import { useEffect, useRef, useState, type PointerEvent } from 'react';
import Link from 'next/link';
import type { PortfolioItem } from '../utils/portfolio-data';

type PortfolioCarouselProps = Readonly<{
  items: PortfolioItem[];
}>;

export function PortfolioCarousel({ items }: PortfolioCarouselProps) {
  const [activePage, setActivePage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<number | null>(null);
  const dragDistance = useRef(0);
  const suppressClick = useRef(false);
  const pageCount = Math.max(1, items.length - visibleItems + 1);

  useEffect(() => {
    const updateLayout = () => {
      const viewport = viewportRef.current;
      if (!viewport) {
        return;
      }

      let nextVisibleItems = 1;

      if (window.innerWidth >= 1024) {
        nextVisibleItems = 3;
      } else if (window.innerWidth >= 640) {
        nextVisibleItems = 2;
      }

      const gap = 32;
      setVisibleItems(nextVisibleItems);
      setCardWidth(
        (viewport.getBoundingClientRect().width -
          gap * (nextVisibleItems - 1)) /
          nextVisibleItems,
      );
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  useEffect(() => {
    setActivePage((page) => Math.min(page, Math.max(0, pageCount - 1)));
  }, [pageCount]);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragStart.current = event.clientX;
    dragDistance.current = 0;
    suppressClick.current = false;
    setIsDragging(false);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) {
      return;
    }

    dragDistance.current = event.clientX - dragStart.current;

    if (Math.abs(dragDistance.current) > 8 && !isDragging) {
      setIsDragging(true);
      event.currentTarget.setPointerCapture(event.pointerId);
      event.preventDefault();
    }

    setDragOffset(dragDistance.current);
    if (Math.abs(dragDistance.current) > 8) {
      suppressClick.current = true;
    }
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStart.current !== null) {
      const threshold = 50;
      suppressClick.current = Math.abs(dragDistance.current) > 8;

      if (dragDistance.current < -threshold) {
        setActivePage((page) => Math.min(page + 1, pageCount - 1));
      } else if (dragDistance.current > threshold) {
        setActivePage((page) => Math.max(page - 1, 0));
      }
    }

    dragStart.current = null;
    dragDistance.current = 0;
    setDragOffset(0);
    setIsDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handlePointerCancel = (event: PointerEvent<HTMLDivElement>) => {
    dragStart.current = null;
    dragDistance.current = 0;
    setDragOffset(0);
    suppressClick.current = false;
    setIsDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div>
      <div
        className={`overflow-hidden select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onPointerDownCapture={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        ref={viewportRef}
        style={{ touchAction: 'none' }}
        onDragStart={(event) => event.preventDefault()}
      >
        <div
          className={`flex ${isDragging ? '' : 'transition-transform duration-500 ease-out'}`}
          style={{
            gap: '2rem',
            transform: `translate3d(-${activePage * (cardWidth + 32) - dragOffset}px, 0, 0)`,
          }}
        >
          {items.map((item) => (
            <article
              className="portfolio-card shrink-0 overflow-hidden"
              key={`${item.slug}-${item.image}`}
              style={{ width: cardWidth || undefined }}
            >
              <div className="overflow-hidden">
                <Link
                  href={`/portfolio/${item.slug}`}
                  onClick={(event) => {
                    if (suppressClick.current) {
                      event.preventDefault();
                      suppressClick.current = false;
                    }
                  }}
                >
                  <img
                    src={`/images/${item.image}`}
                    alt={item.title}
                    draggable={false}
                    className="aspect-4/5 w-full object-cover"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-between gap-3 pt-4">
                <span className="text-ink text-sm font-bold capitalize">
                  {item.title}
                </span>
                <span className="bg-coral px-2 py-1 text-xs text-white uppercase">
                  {item.format}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div
        className="mt-6 flex justify-center gap-2"
        aria-label="Portfolio slides"
      >
        {Array.from({ length: pageCount }, (_, page) => (
          <button
            type="button"
            key={page}
            aria-label={`Show portfolio slide ${page + 1}`}
            aria-current={activePage === page ? 'true' : undefined}
            onClick={() => setActivePage(page)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              activePage === page ? 'bg-coral' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
