import Image from "next/image";
import profilePicture from "@/public/me.jpg";
import hpImage from "@/public/hp.jpeg";
import barImage from "@/public/bar.jpeg";
import picturesImage from "@/public/pictures.jpeg";
import placeImage from "@/public/place.jpeg";
import roomImage from "@/public/room.jpeg";
import wheelImage from "@/public/wheel.jpeg";
import { WavingHand } from "@/ui/WavingHand";
import { ArrowUpRightIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import { PagesSummary } from "@/ui/PagesSummary";
import Link from "next/link";
import { BlurImage } from "@/ui/BlurImage";
import { LocaleText } from "@/ui/LocaleText";
import { getGuestbookEntriesCount } from "@/db/actions";

const LINKS = [
  {
    platform: "linkedin",
    title: "luis-gustavosilva",
    href: "www.linkedin.com/in/luis-gustavosilva",
  },
  {
    platform: "github",
    title: "luis-gustavoj",
    href: "https://github.com/luis-gustavoj",
  },
  {
    platform: "email",
    title: "luisg.juliao@gmail.com",
    href: "mailto:luisg.juliao@gmail.com",
  },
];

const LOCALE_BASE_PATH = "pages.home";

export default async function Home() {
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

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex justify-between items-center w-full pt-36">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200 leading-normal max-sm:text-2xl">
            <LocaleText basePath={LOCALE_BASE_PATH} path="greeting" />{" "}
            <WavingHand />
          </h1>
          <p className="text-sm leading-normal">
            <LocaleText basePath={LOCALE_BASE_PATH} path="description" />
          </p>
        </div>
        <Image
          alt="Me at a rooftop"
          src={profilePicture}
          className="w-32 h-32 rounded-full -scale-x-100 max-md:hidden"
        />
      </div>
      <p>
        <LocaleText basePath={LOCALE_BASE_PATH} path="paragraph01" />
      </p>

      <div className="grid grid-cols-3 grid-rows-[repeat(3,170px)] gap-4 max-md:grid-cols-2">
        <BlurImage
          className="w-full h-full object-cover row-span-2 rounded-lg"
          src={placeImage}
          alt="A build with a lot of windows and blue sky"
        />
        <BlurImage
          src={picturesImage}
          className="w-full h-full object-cover rounded-lg"
          alt="A group of pictures on a wall"
        />
        <BlurImage
          src={barImage}
          className="w-full h-full object-cover rounded-lg"
          alt="A shelf with lights and bottles of liquor"
        />
        <BlurImage
          src={wheelImage}
          className="w-full h-full object-cover row-span-2 rounded-lg"
          alt="A blighting ferris wheel at night"
        />
        <BlurImage
          src={hpImage}
          alt="A lamp and a statue of Edwiges"
          className="w-full h-full object-cover rounded-lg md:row-span-2"
        />
        <BlurImage
          src={roomImage}
          className="w-full h-full object-cover rounded-lg"
          alt="A wall room with a plant"
        />
      </div>
      <p>
        <LocaleText basePath={LOCALE_BASE_PATH} path="paragraph02" />
      </p>
      <PagesSummary cards={summaryCards} />
      <p>
        <LocaleText basePath={LOCALE_BASE_PATH} path="paragraph03" />
      </p>
      <ul className="flex flex-col gap-2">
        {LINKS.map((link) => (
          <li key={link.href}>
            <span className="pr-4">{link.platform}</span>
            <span className="inline-block">
              <Link href={link.href}>
                {link.title}
                <ArrowUpRightIcon className="inline-block w-3 h-3 ml-2" />
              </Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
