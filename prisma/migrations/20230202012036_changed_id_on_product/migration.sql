-- DropIndex
DROP INDEX "Product_id_key";

-- AlterTable
ALTER TABLE "Product" ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");
