/*
  Warnings:

  - You are about to drop the column `product_id` on the `PowerSupplySpecs` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_powerSupplySpecsId_fkey";

-- DropIndex
DROP INDEX "PowerSupplySpecs_product_id_key";

-- AlterTable
ALTER TABLE "PowerSupplySpecs" DROP COLUMN "product_id";
