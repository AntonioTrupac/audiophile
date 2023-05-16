import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

const CategoryTypes = z.enum(["headphones", "speakers", "earphones"]);

export const productRouter = createTRPCRouter({
  createOrderProduct: privateProcedure
    .input(
      z.object({
        productId: z.number(),
        quantity: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.currentUser.id;

      return await ctx.prisma.cart.create({
        data: {
          userId: Number(userId),
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

  getProductsByCategory: publicProcedure
    .input(CategoryTypes)
    .query(async ({ ctx, input }) => {
      const product = await ctx.prisma.product.findMany({
        where: {
          category: input,
        },
        include: {
          categoryImages: {
            include: {
              imageSizes: true,
            },
          },
        },
      });

      if (!product) throw new TRPCError({ code: "NOT_FOUND" });

      return product.map((p) => {
        return p;
      });
    }),

  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      const product = await ctx.prisma.product.findUnique({
        where: {
          slug: input.slug,
        },
        include: {
          accessories: {
            include: {
              accessory: true,
            },
          },
          images: {
            include: {
              imageSizes: true,
            },
          },
          productGalleryImages: {
            include: {
              imageSizes: true,
            },
          },
          suggestedProducts: {
            include: {
              suggestedProduct: {
                select: {
                  id: true,
                  images: {
                    include: {
                      imageSizes: true,
                    },
                  },
                  name: true,
                  category: true,
                  slug: true,
                },
              },
            },
          },
        },
      });

      if (!product) throw new TRPCError({ code: "NOT_FOUND" });

      return product;
    }),
});
