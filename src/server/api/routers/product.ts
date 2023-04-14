import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { z } from "zod";

export const productRouter = createTRPCRouter({
  createOrderProduct: privateProcedure
    .input(
      z.object({
        productId: z.string(),
        quantity: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.currentUser.id;

      const createdOrder = await ctx.prisma.cart.create({
        data: {
          userId,
          // productId: input.productId,
          // quantity: input.quantity,
          cartItems: {
            create: [
              {
                productId: input.productId,
                quantity: input.quantity,
              },
            ],
          },
          updatedAt: new Date(),
        },
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.product.findMany({
      include: {
        images: {
          include: {
            imageSizes: true,
          },
        },
      },
    });
  }),

  getHeadphonesCategory: publicProcedure.query(async ({ ctx }) => {
    const product = await ctx.prisma.product.findMany({
      where: {
        category: "headphones",
      },
      include: {
        categoryImages: {
          include: {
            imageSizes: true,
          },
        },
      },
    });

    return product.map((p) => {
      return p;
    });
  }),

  getCategories: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.productCategory.findMany({
      include: {
        products: {
          include: {
            images: {
              include: {
                imageSizes: true,
              },
            },
          },
        },
      },
    });
  }),
});
