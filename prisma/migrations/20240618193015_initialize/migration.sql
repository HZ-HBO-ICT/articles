-- CreateTable
CREATE TABLE "Articles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT,
    "author" TEXT,
    "date" TEXT,
    "category" TEXT,
    "image" TEXT,
    "intro" TEXT,
    "tags" TEXT
);