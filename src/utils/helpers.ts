export const trimProductName = (productName: string) => {
  return productName
    .replace(/\s*(headphones|earphones)\s*/gi, " ")
    .replace(/Mark/gi, "Mk")
    .trim();
};
