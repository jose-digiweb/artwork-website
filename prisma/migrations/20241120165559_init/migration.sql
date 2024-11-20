/*
  Warnings:

  - You are about to drop the column `image` on the `Artwork` table. All the data in the column will be lost.
  - Added the required column `imagePublicId` to the `Artwork` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageSecureUrl` to the `Artwork` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Artwork` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnailUrl` to the `Artwork` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Artwork" DROP COLUMN "image",
ADD COLUMN     "imagePublicId" VARCHAR(255) NOT NULL,
ADD COLUMN     "imageSecureUrl" VARCHAR(255) NOT NULL,
ADD COLUMN     "imageUrl" VARCHAR(255) NOT NULL,
ADD COLUMN     "thumbnailUrl" VARCHAR(255) NOT NULL;
