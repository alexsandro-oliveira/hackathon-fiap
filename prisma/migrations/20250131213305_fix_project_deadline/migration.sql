/*
  Warnings:

  - Changed the type of `deadline` on the `Projeto` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Projeto" DROP COLUMN "deadline",
ADD COLUMN     "deadline" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "DeadlineType";
