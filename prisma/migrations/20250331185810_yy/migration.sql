/*
  Warnings:

  - Added the required column `gender` to the `GuestAppointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GuestAppointment" ADD COLUMN     "gender" TEXT NOT NULL;
