import { getGuestbookEntriesCount } from "@/db/actions";
import { PagesSummary } from "@/ui/PagesSummary";
import { BookOpenIcon } from "@heroicons/react/24/outline";

export const SummaryCards = async () => {
  const guestbookEntriesCount = await getGuestbookEntriesCount();

  const summaryCards = [
    {
      title: "Guest book",
      href: "/guestbook",
      icon: <BookOpenIcon />,
      count: guestbookEntriesCount,
      localeKey: "guestBookCountLabel",
    },
  ];

  return <PagesSummary cards={summaryCards} />;
};
