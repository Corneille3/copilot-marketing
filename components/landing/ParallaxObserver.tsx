"use client";

import { useEffect } from "react";

export function ParallaxObserver() {
  useEffect(() => {
    const imgs = document.querySelectorAll<HTMLElement>("[data-parallax-img]");
    if (!imgs.length) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          imgs.forEach((img) => {
            const rect = img.getBoundingClientRect();
            const viewportCenter = window.innerHeight / 2;
            const imgCenter = rect.top + rect.height / 2;
            const offset = (viewportCenter - imgCenter) * 0.06;
            img.style.transform = `translateY(${offset}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
