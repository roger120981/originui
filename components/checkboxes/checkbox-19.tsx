"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function CheckboxDemo() {
  const [theme, setTheme] = useState<string>("light");

  return (
    <div className="space-y-4">
      <legend className="text-sm font-medium leading-none text-foreground">
        Dark mode toggle checkbox
      </legend>
      <div className={cn(theme, "flex flex-col justify-center")}>
        <input
          type="checkbox"
          name="theme-checkbox"
          id="theme-checkbox"
          className="peer sr-only"
          checked={theme === "dark"}
          onChange={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
        />
        <label
          className="relative inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border border-input bg-background text-foreground shadow-sm shadow-black/5 transition-colors hover:bg-accent hover:text-accent-foreground peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-ring/70"
          htmlFor="theme-checkbox"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <Moon
            size={16}
            strokeWidth={2}
            className="shrink-0 scale-0 opacity-0 transition-all dark:scale-100 dark:opacity-100"
            aria-hidden="true"
          />
          <Sun
            size={16}
            strokeWidth={2}
            className="absolute shrink-0 scale-100 opacity-100 transition-all dark:scale-0 dark:opacity-0"
            aria-hidden="true"
          />
        </label>
      </div>
    </div>
  );
}