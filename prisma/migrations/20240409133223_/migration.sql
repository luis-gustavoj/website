-- CreateTable
CREATE TABLE "luisgustavosilva_accounts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "luisgustavosilva_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "luisgustavosilva_sessions" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "luisgustavosilva_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "luisgustavosilva_users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "luisgustavosilva_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "luisgustavosilva_verification_tokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "luisgustavosilva_guestbooks" (
    "id" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "luisgustavosilva_guestbooks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "luisgustavosilva_accounts_userId_idx" ON "luisgustavosilva_accounts"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "luisgustavosilva_accounts_provider_providerAccountId_key" ON "luisgustavosilva_accounts"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "luisgustavosilva_sessions_sessionToken_key" ON "luisgustavosilva_sessions"("sessionToken");

-- CreateIndex
CREATE INDEX "luisgustavosilva_sessions_userId_idx" ON "luisgustavosilva_sessions"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "luisgustavosilva_users_email_key" ON "luisgustavosilva_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "luisgustavosilva_verification_tokens_token_key" ON "luisgustavosilva_verification_tokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "luisgustavosilva_verification_tokens_identifier_token_key" ON "luisgustavosilva_verification_tokens"("identifier", "token");
