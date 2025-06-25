-- CreateTable
CREATE TABLE "plans" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "features" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "planId" TEXT,
    "key" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "paneTitle" TEXT NOT NULL,
    "paneTitleIcon" TEXT,
    "description" TEXT,
    CONSTRAINT "features_planId_fkey" FOREIGN KEY ("planId") REFERENCES "plans" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "feature_descriptions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "featureId" TEXT,
    "icon" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    CONSTRAINT "feature_descriptions_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "features" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "plans_name_key" ON "plans"("name");
