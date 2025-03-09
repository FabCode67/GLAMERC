
// model Admin {
//     id        String   @id @default(uuid())
//     name      String
//     email     String   @unique
//     password  String
//     role      Role     @default(ADMIN)
//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt
  
//     @@map("admins")
//   }
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const admins: Prisma.AdminCreateInput[] = [
    {
        name: 'Admin',
        email: 'admin@sample.com',
        password: 'password',
    },

    {
        name: 'Admin2',
        email: 'admin2@sample.com',
        password: 'password',
    },
]

async function main() {
    console.log(`Start seeding ...`)
    for (const a of admins) {
        const admin = await prisma.admin.create({
            data: a,
        })
        console.log(`Created admin with id: ${admin.id}`)
    }
    console.log(`Seeding finished.`)
}


main()