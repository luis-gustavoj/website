"use client";

import { useRef } from "react";
import { SignInButton, SignOutButton } from "./Buttons";
import { saveGuestbookEntry } from "@/db/actions";
import { useFormStatus } from "react-dom";
import { LocaleText } from "../LocaleText";
import { useTranslations } from "next-intl";

export const LOCALE_BASE_PATH = "components.guestbookMessageBox";

type GuestBookMessageBoxProps = {
  isUserSignedIn: boolean;
};

export const GuestbookMessageBox = ({
  isUserSignedIn,
}: GuestBookMessageBoxProps) => {
  const t = useTranslations(LOCALE_BASE_PATH);
  const formRef = useRef<HTMLFormElement>();
  const { pending } = useFormStatus();

  const handlePostForm = async (formData: FormData) => {
    await saveGuestbookEntry(formData);
    formRef.current?.reset();
  };

  return (
    <div className="relative overflow-hidden rounded-lg p-[1.5px]">
      <span className="absolute min-h-screen inset-[-1000%] animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#bbbbbe_0%,#9f9fa8_50%,#bbbbbe_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#27272A_0%,#71717a_50%,#27272A_100%)]" />
      <div className="w-full h-full bg-zinc-200 text-zinc-700 dark:bg-gradient-to-r dark:from-[#27272A] dark:to-[#2f2f35] dark:text-zinc-300 rounded-lg backdrop-blur-3xl p-4">
        <p className="text-xl mb-2 leading-none font-semibold">
          <LocaleText basePath={LOCALE_BASE_PATH} path="title" />
        </p>
        <p className="text-sm mb-4 leading-none">
          <LocaleText basePath={LOCALE_BASE_PATH} path="subtitle" />
        </p>
        {isUserSignedIn ? (
          <>
            <form
              className="flex w-full bg-zinc-300 dark:bg-zinc-500 h-[40px] rounded-lg p-1"
              action={handlePostForm}
            >
              <input
                required
                placeholder={t("inputPlaceholder")}
                minLength={3}
                maxLength={100}
                name="message"
                className="flex-1 px-4 dark:text-zinc-100 bg-transparent outline-none placeholder:text-zinc-500 dark:placeholder:text-zinc-300"
              />
              <button
                type="submit"
                className="bg-zinc-50 text-zinc-900 px-2 rounded-lg font-medium"
                disabled={pending}
              >
                <LocaleText basePath={LOCALE_BASE_PATH} path="submitButton" />
              </button>
            </form>
            <SignOutButton />
          </>
        ) : (
          <SignInButton />
        )}
      </div>
    </div>
  );
};
