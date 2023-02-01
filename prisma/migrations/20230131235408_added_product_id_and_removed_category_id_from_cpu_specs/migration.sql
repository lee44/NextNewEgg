/*
  Warnings:

  - You are about to drop the column `category_id` on the `CPUSpecs` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[product_id]` on the table `CPUSpecs` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "CPUSpecs" DROP CONSTRAINT "CPUSpecs_category_id_fkey";

-- DropIndex
DROP INDEX "CPUSpecs_category_id_key";

-- AlterTable
ALTER TABLE "CPUSpecs" DROP COLUMN "category_id",
ADD COLUMN     "product_id" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "CPUSpecs_product_id_key" ON "CPUSpecs"("product_id");

-- AddForeignKey
ALTER TABLE "CPUSpecs" ADD CONSTRAINT "CPUSpecs_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
