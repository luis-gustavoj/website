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
      <div className="flex absolute bottom-0 left-0 w-full overflow-x-hidden pointer-events-none">
        <WaveSVG className="relative fill-zinc-200 dark:fill-zinc-900 -z-10 min-w-[1440px] max-md:-left-1/4" />
      </div>
    </>
  );
}
