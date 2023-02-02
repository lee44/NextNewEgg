/*
  Warnings:

  - You are about to drop the column `product_id` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CartItems" DROP CONSTRAINT "CartItems_product_id_fkey";

-- DropForeignKey
ALTER TABLE "PowerSupplySpecs" DROP CONSTRAINT "PowerSupplySpecs_product_id_fkey";

-- DropIndex
DROP INDEX "Product_product_id_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "product_id",
ADD COLUMN     "cartItemsId" INTEGER,
ADD COLUMN     "powerSupplySpecsId" INTEGER;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_cartItemsId_fkey" FOREIGN KEY ("cartItemsId") REFERENCES "CartItems"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_powerSupplySpecsId_fkey" FOREIGN KEY ("powerSupplySpecsId") REFERENCES "PowerSupplySpecs"("id") ON DELETE SET NULL ON UPDATE CASCADE;
