/*
  Warnings:

  - Changed the type of `deadline` on the `Projeto` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "DeadlineOpton" AS ENUM ('month_3', 'month_6', 'month_12');

-- AlterTable
ALTER TABLE "Projeto" DROP COLUMN "deadline",
ADD COLUMN     "deadline" "DeadlineOpton" NOT NULL;
