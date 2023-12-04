"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { Session } from "next-auth";
import { revalidatePath } from "next/cache";

async function getSession(): Promise<Session> {
  const session = await auth();

  if (!session || !session.user) {
    throw new Error("Unauthorized");
  }

  return session;
}

export async function saveGuestbookEntry(formData: FormData) {
  const session = await getSession();

  if (!session.user) {
    throw new Error("Unauthorized");
  }

  const email = session.user.email as string;
  const name = session.user.name as string;
  const message = formData.get("message")?.toString() || "";

  await prisma.guestbook.create({
    data: {
      email,
      author: name,
      message,
    },
  });

  revalidatePath("/guestbook");
}

export async function getGuestbookEntries() {
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return entries;
}

export async function getGuestbookEntriesCount() {
  const count = await prisma.guestbook.count();

  return count;
}
