/*
  Warnings:

  - Added the required column `appoint_date` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `appoint_time` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `appoint_date` to the `GuestAppointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `appoint_time` to the `GuestAppointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "appoint_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "appoint_time" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "GuestAppointment" ADD COLUMN     "appoint_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "appoint_time" TEXT NOT NULL;
