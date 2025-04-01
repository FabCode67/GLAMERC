/*
  Warnings:

  - You are about to drop the column `date` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `GuestAppointment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "date";

-- AlterTable
ALTER TABLE "GuestAppointment" DROP COLUMN "date";
