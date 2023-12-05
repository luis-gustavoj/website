import { GeistSans } from "geist/font/sans";
import "@/styles/globals.css";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import NextAuthProvider from "@/contexts/NextAuthProvider";
import { notFound } from "next/navigation";
import { LOCALES } from "@/shared/locales";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "pages.home.meta",
  });

  return {
    metadataBase: new URL("https://luisoila.dev"),
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        pt: "/pt",
      },
    },
    title: {
      default: "Luis Gustavo Silva",
      template: "%s | Luis Gustavo Silva",
    },
    description: t("description"),
    openGraph: {
      title: "Luis Gustavo Silva",
      description: t("description"),
      url: "https://luisoila.dev",
      siteName: "Luis Gustavo Silva",
      locale: locale,
      type: "website",
    },
  };
}

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
      className={`min-h-full ${GeistSans.className} ${GeistMono.variable}`}
      lang={locale}
      suppressHydrationWarning
    >
      <body className="bg-zinc-100 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-300 min-h-screen relative flex flex-col overflow-x-hidden max-md:px-8 max-sm:px-4">
        <NextAuthProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
              {children}
            </ThemeProvider>
          </NextIntlClientProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
