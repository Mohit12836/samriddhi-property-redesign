"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { DESIGN_THEMES, DesignTheme } from "@/config/designThemes";

interface ThemeContextType {
  activeDesignId: number;
  currentTheme: DesignTheme;
  setDesignId: (id: number) => void;
  allThemes: DesignTheme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [activeDesignId, setActiveDesignId] = useState<number>(1);

  // Read URL query parameter ?design=X on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const designParam = params.get("design");
      if (designParam) {
        const parsed = parseInt(designParam, 10);
        if (parsed >= 1 && parsed <= 10) {
          setActiveDesignId(parsed);
          return;
        }
      }
      // Check localStorage
      const saved = localStorage.getItem("samriddhi_active_design");
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (parsed >= 1 && parsed <= 10) {
          setActiveDesignId(parsed);
        }
      }
    }
  }, []);

  const handleSetDesignId = (id: number) => {
    if (id >= 1 && id <= 10) {
      setActiveDesignId(id);
      if (typeof window !== "undefined") {
        localStorage.setItem("samriddhi_active_design", id.toString());
        // Update URL query parameter smoothly without full reload
        const url = new URL(window.location.href);
        url.searchParams.set("design", id.toString());
        window.history.pushState({}, "", url.toString());
      }
    }
  };

  const currentTheme = DESIGN_THEMES.find((t) => t.id === activeDesignId) || DESIGN_THEMES[0];

  return (
    <ThemeContext.Provider
      value={{
        activeDesignId,
        currentTheme,
        setDesignId: handleSetDesignId,
        allThemes: DESIGN_THEMES,
      }}
    >
      <div 
        style={{ 
          backgroundColor: currentTheme.colors.pageBg,
          color: currentTheme.colors.textPrimary,
          minHeight: "100vh"
        }}
        data-theme-layout={currentTheme.layoutType}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
