"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import Logo from "./Logo";
import Button from "./ui/Button";
import { useUI } from "./UIProvider";
import { nav } from "@/lib/content";

export default function Header() {
  const { openShop } = useUI();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menu) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menu]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`border-b border-[rgba(27,27,24,0.08)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "bg-[rgba(253,253,247,0.9)] backdrop-blur-xl shadow-[0_8px_30px_-24px_rgba(27,27,24,0.32)]"
            : "bg-[rgba(253,253,247,0.96)] backdrop-blur-md"
        }`}
      >
        <div className="shell grid h-[72px] grid-cols-[1fr_auto] items-center gap-5 lg:grid-cols-[1fr_auto_1fr]">
          <Link href="/" aria-label="Sunflower Medical — home" className="justify-self-start">
            <Logo animate />
          </Link>

          <nav className="hidden items-center gap-1.5 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`rounded-lg px-4 py-2.5 text-[0.9375rem] font-medium tracking-[-0.015em] transition-[background-color,color] duration-200 hover:bg-[rgba(27,27,24,0.055)] hover:text-[#1b1b18] focus-visible:bg-[rgba(27,27,24,0.055)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfdf7] ${
                  pathname === item.href
                    ? "bg-[rgba(27,27,24,0.055)] text-[#1b1b18]"
                    : "text-[#4a4a44]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 justify-self-end">
            <Button variant="primary" size="sm" onClick={openShop}>
              Shop
            </Button>

            <button
              type="button"
              onClick={() => setMenu((m) => !m)}
              aria-label="Menu"
              aria-expanded={menu}
              aria-controls="mobile-navigation"
              className="ml-1 flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-inset ring-[rgba(27,27,24,0.12)] transition-colors hover:bg-[rgba(27,27,24,0.04)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18] lg:hidden"
            >
              <span className="relative block h-[9px] w-[16px]">
                <span
                  className={`absolute left-0 h-[1.5px] w-full bg-[#1b1b18] transition-all duration-300 ${
                    menu ? "top-1 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-[1.5px] w-full bg-[#1b1b18] transition-all duration-300 ${
                    menu ? "top-1 -rotate-45" : "top-2"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menu && (
          <motion.div
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-[rgba(27,27,24,0.08)] bg-[#fdfdf7] lg:hidden"
          >
            <nav className="shell flex max-h-[calc(100svh-72px)] flex-col gap-1 overflow-y-auto py-3">
              {nav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenu(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`rounded-lg px-3 py-3 text-[1rem] font-medium transition-colors hover:bg-[rgba(27,27,24,0.055)] hover:text-[#1b1b18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18] ${
                    pathname === item.href
                      ? "bg-[rgba(27,27,24,0.055)] text-[#1b1b18]"
                      : "text-[#4a4a44]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
