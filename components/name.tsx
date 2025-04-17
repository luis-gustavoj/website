import Typewriter from "./ui/typewriter";

export const Name = () => {
  return (
    <h1>
      <span className="sr-only">Luis Silva</span>
      {"> "}
      <Typewriter cursorChar="_" text="Luis Silva" />
    </h1>
  );
};
