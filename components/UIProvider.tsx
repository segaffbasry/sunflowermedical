"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/content";

type Overlay = "search" | "shop" | null;

type UIState = {
  overlay: Overlay;
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

  const closeOverlay = useCallback(() => setOverlay(null), []);
  const closeQuickView = useCallback(() => setQuickView(null), []);

  const openShop = useCallback(() => {
    setQuickView(null);
    setOverlay("shop");
  }, []);

  const openQuickView = useCallback((p: Product) => {
    setOverlay(null);
    setQuickView(p);
  }, []);

  const anyOpen = overlay !== null || quickView !== null;

  /* Lock the page behind any overlay. */
  useEffect(() => {
    document.body.dataset.locked = anyOpen ? "true" : "false";
    const background = document.querySelectorAll<HTMLElement>("body > header, body > main, body > footer");
    background.forEach((element) => {
      element.inert = anyOpen;
    });
    return () => {
      background.forEach((element) => {
        element.inert = false;
      });
    };
  }, [anyOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOverlay(null);
        setQuickView(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const value = useMemo(
    () => ({
      overlay,
      openShop,
      closeOverlay,
      quickView,
      openQuickView,
      closeQuickView,
    }),
    [overlay, openShop, closeOverlay, quickView, openQuickView, closeQuickView],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used inside UIProvider");
  return ctx;
}
