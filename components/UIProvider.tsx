"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { Product } from "@/lib/content";

type Overlay = "search" | "shop" | null;

type UIState = {
  overlay: Overlay;
  openSearch: () => void;
  openShop: () => void;
  closeOverlay: () => void;
  quickView: Product | null;
  openQuickView: (p: Product) => void;
  closeQuickView: () => void;
};

const UIContext = createContext<UIState | null>(null);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [overlay, setOverlay] = useState<Overlay>(null);
  const [quickView, setQuickView] = useState<Product | null>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const rememberTrigger = useCallback(() => {
    const active = document.activeElement;
    if (
      active instanceof HTMLElement &&
      active !== document.body &&
      !active.closest('[role="dialog"]')
    ) {
      returnFocusRef.current = active;
    }
  }, []);

  const closeOverlay = useCallback(() => setOverlay(null), []);
  const closeQuickView = useCallback(() => setQuickView(null), []);

  const openSearch = useCallback(() => {
    rememberTrigger();
    setQuickView(null);
    setOverlay("search");
  }, [rememberTrigger]);

  const openShop = useCallback(() => {
    rememberTrigger();
    setQuickView(null);
    setOverlay("shop");
  }, [rememberTrigger]);

  const openQuickView = useCallback((p: Product) => {
    rememberTrigger();
    setOverlay(null);
    setQuickView(p);
  }, [rememberTrigger]);

  const anyOpen = overlay !== null || quickView !== null;

  /* Lock the page behind any overlay. */
  useEffect(() => {
    document.body.dataset.locked = anyOpen ? "true" : "false";
    const background = document.querySelectorAll<HTMLElement>("body > header, body > main, body > footer");
    background.forEach((element) => {
      element.inert = anyOpen;
    });

    const trigger = !anyOpen ? returnFocusRef.current : null;
    const restoreTimer = trigger
      ? window.setTimeout(() => {
          if (trigger.isConnected) trigger.focus();
          returnFocusRef.current = null;
        }, 760)
      : undefined;

    return () => {
      if (restoreTimer) window.clearTimeout(restoreTimer);
      background.forEach((element) => {
        element.inert = false;
      });
    };
  }, [anyOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearch();
        return;
      }
      if (e.key === "Escape") {
        setOverlay(null);
        setQuickView(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openSearch]);

  const value = useMemo(
    () => ({
      overlay,
      openSearch,
      openShop,
      closeOverlay,
      quickView,
      openQuickView,
      closeQuickView,
    }),
    [overlay, openSearch, openShop, closeOverlay, quickView, openQuickView, closeQuickView],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used inside UIProvider");
  return ctx;
}
