import { GeistSans } from "geist/font/sans";
import "@/styles/globals.css";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import NextAuthProvider from "@/contexts/NextAuthProvider";
import { notFound } from "next/navigation";
import { LOCALES } from "@/shared/locales";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = params;

  if (!LOCALES.includes(locale as any)) notFound();

  const messages = await getMessages();

  return (
    <html
      className={`min-h-full ${GeistSans.className} ${GeistMono.variable} overflow-x-hidden`}
      lang={locale}
      suppressHydrationWarning
    >
      <body className="bg-zinc-100 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-300 min-h-screen relative flex flex-col">
        <NextAuthProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
              {children}
            </ThemeProvider>
          </NextIntlClientProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
