import { getGuestbookEntries } from "@/db/actions";
import { auth } from "@/lib/auth";
import { GuestbookMessageBox } from "@/ui/GuestbookMessageBox";
import { getFormatter } from "next-intl/server";
import { Suspense } from "react";

const LoadingGuestbookEntries = () => {
  const ITEMS = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="flex flex-col">
      {ITEMS.map((_, i) => (
        <div key={i} className="mb-4">
          <span className="h-3 w-20 bg-zinc-70 bg-zinc-300 dark:bg-zinc-700 rounded-md block animate-pulse mb-1" />
          <span className="h-4 w-40 bg-zinc-70 bg-zinc-300 dark:bg-zinc-700 rounded-md block animate-pulse" />
        </div>
      ))}
    </div>
  );
};

export default async function GuestBook() {
  const session = await auth();
  const isUserSignedIn = !!session?.user?.email;

  return (
    <div className="w-full flex flex-col gap-8 pt-36">
      <h1 className="font-medium text-2xl tracking-tighter ">guestbook</h1>
      <GuestbookMessageBox isUserSignedIn={isUserSignedIn} />
      <Suspense fallback={<LoadingGuestbookEntries />}>
        <GuestbookEntries />
      </Suspense>
    </div>
  );
}

const GuestbookEntries = async () => {
  const entries = await getGuestbookEntries();
  const formatter = await getFormatter();

  return (
    <div className="flex flex-col">
      {entries.map((entry) => (
        <div key={entry.id} className="mb-4">
          <span className="text-zinc-500 dark:text-zinc-400 font-medium">
            {entry.author} ·{" "}
            {formatter.dateTime(entry.createdAt, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <p>– {entry.message}</p>
        </div>
      ))}
    </div>
  );
};
