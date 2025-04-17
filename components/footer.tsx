import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export const Footer = () => {
  const links = [
    {
      name: "@luisoila",
      url: "https://x.com/luisoilaa",
    },
    {
      name: "github",
      url: "https://github.com/luis-gustavoj",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/luis-gustavosilva/",
    },
  ];

  return (
    <footer>
      <div className="flex gap-4 mx-auto max-w-3xl">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-zinc-400 hover:text-purple-500 transition-all"
          >
            {link.name}
            <ArrowUpRightIcon className="inline-block w-3 h-3 ml-2" />
          </a>
        ))}
      </div>
    </footer>
  );
};
