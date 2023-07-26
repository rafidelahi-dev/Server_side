/*
  Warnings:

  - You are about to drop the column `image` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductTransaction" DROP CONSTRAINT "ProductTransaction_productId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "image",
ADD COLUMN     "category" TEXT;
