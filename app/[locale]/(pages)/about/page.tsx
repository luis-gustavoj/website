import { Link } from "@/lib/navigation";
import profilePicture from "@/public/me.jpg";
import { BlurImage } from "@/ui/BlurImage";
import { LocaleText } from "@/ui/LocaleText";
import { useFormatter } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "pages.about.meta",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const MY_AGE = new Date().getFullYear() - 2001;
const EXPERIENCE_TIME = new Date().getFullYear() - 2019;

const WORK_EXPERIENCES = [
  {
    role: (
      <LocaleText basePath="pages.about" path="workExperience.ioasys.role" />
    ),
    company: "Ioasys",
    companyLink: "https://ioasys.com.br/",
    location: (
      <LocaleText
        basePath="pages.about"
        path="workExperience.ioasys.location"
      />
    ),
    startDate: "02-21-2022",
    descriptions: ["01", "02", "03", "04"].map((path) => (
      <LocaleText
        key={path}
        basePath="pages.about"
        variant="markup"
        path={`workExperience.ioasys.descriptions.${path}`}
      />
    )),
  },
  {
    role: (
      <LocaleText basePath="pages.about" path="workExperience.korin.role" />
    ),
    company: "Korin Alimentos",
    companyLink: "https://www.korin.com.br/",
    location: (
      <LocaleText basePath="pages.about" path="workExperience.korin.location" />
    ),
    startDate: "02-21-2021",
    endDate: "02-21-2022",
    descriptions: ["01", "02", "03"].map((path) => (
      <LocaleText
        key={path}
        basePath="pages.about"
        variant="markup"
        path={`workExperience.korin.descriptions.${path}`}
      />
    )),
  },
];

type WorkExperienceDateProps = {
  startDate: string;
  endDate?: string;
};

const WorkExperienceDate = ({
  startDate,
  endDate,
}: WorkExperienceDateProps) => {
  const formatter = useFormatter();

  const startDateText = formatter.dateTime(new Date(startDate), {
    year: "numeric",
    month: "long",
  });

  if (endDate) {
    const endDateText = formatter.dateTime(new Date(endDate), {
      year: "numeric",
      month: "long",
    });

    return `${startDateText} - ${endDateText}`;
  }

  return (
    <>
      {startDateText} - <LocaleText basePath="pages.about" path="current" />
    </>
  );
};

const LOCALE_BASE_PATH = "pages.about";

export default function About() {
  return (
    <div className="w-full flex flex-col gap-8 max-md:gap-4 pt-36">
      <h1 className="font-medium text-2xl tracking-tighter">
        <LocaleText basePath={LOCALE_BASE_PATH} path="title" />
      </h1>
      <div className="flex justify-between gap-20 max-md:flex-col max-md:gap-4">
        <BlurImage
          className="rounded-md min-w-[336px]"
          src={profilePicture}
          alt="Me at a rooftop"
        />
        <div className="flex flex-col gap-5 leading-relaxed max-w-md">
          <p>
            <LocaleText
              basePath={LOCALE_BASE_PATH}
              path="greeting"
              variant="markup"
              values={{ age: MY_AGE }}
            />
          </p>
          <p>
            <LocaleText
              basePath={LOCALE_BASE_PATH}
              path="description"
              variant="markup"
              values={{ experience: EXPERIENCE_TIME }}
            />
          </p>
          <p>
            <LocaleText
              basePath={LOCALE_BASE_PATH}
              path="description02"
              values={{ experience: EXPERIENCE_TIME }}
            />
          </p>
        </div>
      </div>
      <div>
        <h2 className="font-medium text-2xl tracking-tighter">
          <LocaleText
            basePath={LOCALE_BASE_PATH}
            path="career"
            values={{ experience: EXPERIENCE_TIME }}
          />
        </h2>
        {WORK_EXPERIENCES.map((workExperience, ind) => (
          <div className="flex flex-col" key={ind}>
            <h3 className="font-medium mt-4">{workExperience.role}</h3>
            <p className="dark:text-zinc-400 text-zinc-600">
              <Link
                className="underline "
                target="_blank"
                href={workExperience.companyLink}
              >
                {workExperience.company}
              </Link>
              <span> • {workExperience.location}</span>
              <span>
                {" "}
                •{" "}
                <WorkExperienceDate
                  startDate={workExperience.startDate}
                  endDate={workExperience.endDate}
                />
              </span>
            </p>
            <ul className="list-disc mt-4 pl-4 marker:text-zinc-600">
              {workExperience.descriptions.map((description, ind) => (
                <li className="pl-1 my-1 leading-relaxed" key={ind}>
                  {description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
