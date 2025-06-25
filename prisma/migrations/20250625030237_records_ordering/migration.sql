/*
  Warnings:

  - Added the required column `order` to the `feature_descriptions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `features` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `plans` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_feature_descriptions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "featureId" TEXT,
    "icon" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    CONSTRAINT "feature_descriptions_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "features" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_feature_descriptions" ("description", "featureId", "icon", "id", "title") SELECT "description", "featureId", "icon", "id", "title" FROM "feature_descriptions";
DROP TABLE "feature_descriptions";
ALTER TABLE "new_feature_descriptions" RENAME TO "feature_descriptions";
CREATE TABLE "new_features" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "planId" TEXT,
    "key" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "paneTitle" TEXT NOT NULL,
    "paneTitleIcon" TEXT,
    "description" TEXT,
    "order" INTEGER NOT NULL,
    CONSTRAINT "features_planId_fkey" FOREIGN KEY ("planId") REFERENCES "plans" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_features" ("description", "id", "key", "paneTitle", "paneTitleIcon", "planId", "title") SELECT "description", "id", "key", "paneTitle", "paneTitleIcon", "planId", "title" FROM "features";
DROP TABLE "features";
ALTER TABLE "new_features" RENAME TO "features";
CREATE TABLE "new_plans" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "order" INTEGER NOT NULL
);
INSERT INTO "new_plans" ("id", "name", "price") SELECT "id", "name", "price" FROM "plans";
DROP TABLE "plans";
ALTER TABLE "new_plans" RENAME TO "plans";
CREATE UNIQUE INDEX "plans_name_key" ON "plans"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
