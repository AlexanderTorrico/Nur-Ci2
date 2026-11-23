export function calculateDiscountedPrice(price, discountPercent) {
  if (price < 0) {
    throw new Error('El precio no puede ser negativo');
  }

  const clampedDiscount = Math.min(Math.max(discountPercent, 0), 100);
  const finalPrice = price * (1 - clampedDiscount / 100);

  return Number(finalPrice.toFixed(2));
}