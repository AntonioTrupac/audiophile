import { prisma } from "~/server/db";
import { categoryImage } from "./data/categoryImage";
import { imageSizes } from "./data/imageSizes";
import { product } from "./data/product";
import { accessory, productAccessories } from "./data/productAccessories";

async function main() {
  console.log("Start seeding ...");

  await prisma.accessory.deleteMany();
  console.log("Deleted records in accessory table");

  await prisma.productAccessory.deleteMany();
  console.log("Deleted records in productAccessory table");

  await prisma.imageSize.deleteMany();
  console.log("Deleted records in imageSize table");

  await prisma.categoryImage.deleteMany();
  console.log("Deleted records in categoryImage table");

  await prisma.product.deleteMany();
  console.log("Deleted records in product table");

  await prisma.$queryRaw`ALTER TABLE Product AUTO_INCREMENT = 1`;
  await prisma.$queryRaw`ALTER TABLE CategoryImage AUTO_INCREMENT = 1`;
  await prisma.$queryRaw`ALTER TABLE ImageSize AUTO_INCREMENT = 1`;
  await prisma.$queryRaw`ALTER TABLE Accessory AUTO_INCREMENT = 1`;
  await prisma.$queryRaw`ALTER TABLE ProductAccessory AUTO_INCREMENT = 1`;

  const p = await prisma.product.createMany({
    data: product,
  });
  console.log("Created records in product table");

  const a = await prisma.accessory.createMany({
    data: accessory,
  });
  console.log("Created records in accessory table");

  const pA = await prisma.productAccessory.createMany({
    data: productAccessories,
  });
  console.log("Created records in productAccessory table");

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
