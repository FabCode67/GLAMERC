/*
  Warnings:

  - You are about to drop the `Appointment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_clinicianId_fkey";

-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_userId_fkey";

-- DropForeignKey
ALTER TABLE "GuestAppointment" DROP CONSTRAINT "GuestAppointment_clinicianId_fkey";

-- DropTable
DROP TABLE "Appointment";

-- AddForeignKey
ALTER TABLE "GuestAppointment" ADD CONSTRAINT "GuestAppointment_clinicianId_fkey" FOREIGN KEY ("clinicianId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
