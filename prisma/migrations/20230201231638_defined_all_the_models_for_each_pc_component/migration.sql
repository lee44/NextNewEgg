/*
  Warnings:

  - You are about to drop the column `created_at` on the `CPUSpecs` table. All the data in the column will be lost.
  - You are about to drop the column `release_date` on the `CPUSpecs` table. All the data in the column will be lost.
  - Added the required column `release_date` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CPUSpecs" DROP COLUMN "created_at",
DROP COLUMN "release_date";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "release_date" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "PowerSupplySpecs" (
    "id" SERIAL NOT NULL,
    "power" TEXT,
    "color" TEXT,
    "efficiency" TEXT,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "PowerSupplySpecs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CaseFanSpecs" (
    "id" SERIAL NOT NULL,
    "rpm" TEXT NOT NULL,
    "air_flow" TEXT NOT NULL,
    "noise_level" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "CaseFanSpecs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RAMSpecs" (
    "id" SERIAL NOT NULL,
    "size" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "RAMSpecs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MouseSpecs" (
    "id" SERIAL NOT NULL,
    "track_method" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "wireless" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "MouseSpecs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KeyboardSpecs" (
    "id" SERIAL NOT NULL,
    "style" TEXT NOT NULL,
    "backlit" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "wireless" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "KeyboardSpecs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CPUFanSpecs" (
    "id" SERIAL NOT NULL,
    "rpm" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "noise_level" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "CPUFanSpecs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CaseSpecs" (
    "id" SERIAL NOT NULL,
    "side_panel" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "cabinet_type" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "CaseSpecs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorageSpecs" (
    "id" SERIAL NOT NULL,
    "storage_interface" TEXT NOT NULL,
    "rpm" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "cache_memory" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "StorageSpecs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GPUSpecs" (
    "id" SERIAL NOT NULL,
    "storage_interface" TEXT NOT NULL,
    "memory" TEXT NOT NULL,
    "clock_speed" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "GPUSpecs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MotherboardSpecs" (
    "id" SERIAL NOT NULL,
    "form_factor" TEXT NOT NULL,
    "memory_slots" TEXT NOT NULL,
    "socket_type" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "MotherboardSpecs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PowerSupplySpecs_product_id_key" ON "PowerSupplySpecs"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "CaseFanSpecs_product_id_key" ON "CaseFanSpecs"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "RAMSpecs_product_id_key" ON "RAMSpecs"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "MouseSpecs_product_id_key" ON "MouseSpecs"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "KeyboardSpecs_product_id_key" ON "KeyboardSpecs"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "CPUFanSpecs_product_id_key" ON "CPUFanSpecs"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "CaseSpecs_product_id_key" ON "CaseSpecs"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "StorageSpecs_product_id_key" ON "StorageSpecs"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "GPUSpecs_product_id_key" ON "GPUSpecs"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "MotherboardSpecs_product_id_key" ON "MotherboardSpecs"("product_id");

-- AddForeignKey
ALTER TABLE "PowerSupplySpecs" ADD CONSTRAINT "PowerSupplySpecs_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CaseFanSpecs" ADD CONSTRAINT "CaseFanSpecs_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RAMSpecs" ADD CONSTRAINT "RAMSpecs_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MouseSpecs" ADD CONSTRAINT "MouseSpecs_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KeyboardSpecs" ADD CONSTRAINT "KeyboardSpecs_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CPUFanSpecs" ADD CONSTRAINT "CPUFanSpecs_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CaseSpecs" ADD CONSTRAINT "CaseSpecs_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorageSpecs" ADD CONSTRAINT "StorageSpecs_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GPUSpecs" ADD CONSTRAINT "GPUSpecs_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MotherboardSpecs" ADD CONSTRAINT "MotherboardSpecs_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
