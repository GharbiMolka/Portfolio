"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export const ThemeProvider = NextThemesProvider;

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}