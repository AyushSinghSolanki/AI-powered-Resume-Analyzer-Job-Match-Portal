-- AlterTable
ALTER TABLE "public"."Resume" ADD COLUMN     "improvedAnalysis" JSONB,
ADD COLUMN     "improvedResume" TEXT,
ADD COLUMN     "improvedScore" INTEGER;
