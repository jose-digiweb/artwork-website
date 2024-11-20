-- CreateTable
CREATE TABLE "Artwork" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "dimensions" VARCHAR(255) NOT NULL,
    "size" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "year" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Artwork_pkey" PRIMARY KEY ("id")
);
