import { GeistSans } from "geist/font/sans";
import "@/styles/globals.css";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/contexts/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`min-h-full ${GeistSans.className} ${GeistMono.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <body className="bg-zinc-100 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-300 h-full relative">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
