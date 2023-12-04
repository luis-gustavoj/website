"use client";

import { signIn, signOut } from "next-auth/react";
import { LocaleText } from "../LocaleText";
import { LOCALE_BASE_PATH } from ".";
import { GithubIcon } from "@/shared/icons";

export const SignOutButton = () => (
  <button className="text-xs mt-2" onClick={() => signOut()}>
    <LocaleText basePath={LOCALE_BASE_PATH} path="signOutButton" />
  </button>
);

export const SignInButton = () => (
  <button
    type="button"
    onClick={() => signIn("github")}
    className="flex items-center justify-center py-3 text-sm leading-none font-semibold w-full bg-zinc-500 text-zinc-50 rounded-md"
  >
    <GithubIcon className="h-4 w-4 mr-2" />
    <LocaleText basePath={LOCALE_BASE_PATH} path="signInButton" />
  </button>
);
