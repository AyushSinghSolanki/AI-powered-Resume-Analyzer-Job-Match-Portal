/*
  Warnings:

  - Added the required column `updatedAt` to the `Resume` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Resume" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'uploaded',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
