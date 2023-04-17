import { prisma } from "~/server/db";
import { categoryImage } from "./data/categoryImage";
import { imageSizes } from "./data/imageSizes";
import { product } from "./data/product";

async function main() {
  console.log("Start seeding ...");

  await prisma.imageSize.deleteMany();
  console.log("Deleted records in imageSize table");

  await prisma.categoryImage.deleteMany();
  console.log("Deleted records in categoryImage table");

  await prisma.product.deleteMany();
  console.log("Deleted records in product table");

  await prisma.$queryRaw`ALTER TABLE Product AUTO_INCREMENT = 1`;
  await prisma.$queryRaw`ALTER TABLE CategoryImage AUTO_INCREMENT = 1`;
  await prisma.$queryRaw`ALTER TABLE ImageSize AUTO_INCREMENT = 1`;

  const p = await prisma.product.createMany({
    data: product,
  });
  console.log("Created records in product table");

  const cI = await prisma.categoryImage.createMany({ data: categoryImage });
  console.log("Created records in categoryImage table");

  const iS = await prisma.imageSize.createMany({
    data: imageSizes,
  });

  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
