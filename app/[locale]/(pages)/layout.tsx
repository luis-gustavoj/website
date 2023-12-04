import { Footer } from "@/ui/Footer";
import { Navbar } from "@/ui/Navbar";
import { WaveSVG } from "@/ui/Wave";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="max-w-3xl mx-auto w-full flex-1">
        <Navbar />
        {children}
      </main>
      <Footer />
      <WaveSVG className="absolute bottom-0 fill-zinc-200 dark:fill-zinc-900 -z-10 min-w-[1440px]" />
    </>
  );
}
