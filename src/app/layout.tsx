import "./globals.css";
import type { ReactNode } from "react";

export const metadata = { title: "Quote Generator", description: "Searchable random quotes" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en"><body>{children}</body></html>
  );
}
