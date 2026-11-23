import { describe, expect, it } from 'vitest';
import { calculateDiscountedPrice } from './pricing';

describe('calculateDiscountedPrice', () => {
  it('aplica un porcentaje de descuento válido', () => {
    expect(calculateDiscountedPrice(100, 20)).toBe(80);
  });

  it('limita el descuento a un rango entre 0% y 100%', () => {
    expect(calculateDiscountedPrice(100, -10)).toBe(100);
    expect(calculateDiscountedPrice(100, 150)).toBe(0);
  });

  it('lanza un error si el precio es negativo', () => {
    expect(() => calculateDiscountedPrice(-50, 10)).toThrow(
      'El precio no puede ser negativo'
    );
  });
});