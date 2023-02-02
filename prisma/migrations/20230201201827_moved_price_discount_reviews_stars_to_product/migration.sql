/*
  Warnings:

  - You are about to drop the column `discount` on the `CPUSpecs` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `CPUSpecs` table. All the data in the column will be lost.
  - You are about to drop the column `reviews` on the `CPUSpecs` table. All the data in the column will be lost.
  - You are about to drop the column `stars` on the `CPUSpecs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CPUSpecs" DROP COLUMN "discount",
DROP COLUMN "price",
DROP COLUMN "reviews",
DROP COLUMN "stars";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "discount" INTEGER,
ADD COLUMN     "price" DOUBLE PRECISION,
ADD COLUMN     "reviews" INTEGER,
ADD COLUMN     "stars" DOUBLE PRECISION;
