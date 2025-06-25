-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_plans" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "order" INTEGER NOT NULL,
    "isPopular" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_plans" ("id", "name", "order", "price") SELECT "id", "name", "order", "price" FROM "plans";
DROP TABLE "plans";
ALTER TABLE "new_plans" RENAME TO "plans";
CREATE UNIQUE INDEX "plans_name_key" ON "plans"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
