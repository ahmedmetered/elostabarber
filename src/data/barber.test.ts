import { describe, expect, it } from 'vitest';
import { data, earnedFreeCut, isAvailable, nextDays, number, price, validPhone } from './barber';

describe('Barber demo rules', () => {
  it('offers exactly the next fourteen calendar days', () => {
    const days = nextDays(new Date(2026, 10, 11, 12));
    expect(days).toHaveLength(14);
    expect(days[0]?.getDate()).toBe(11);
    expect(days[13]?.getDate()).toBe(24);
  });
  it('blocks unavailable appointment slots', () => {
    expect(isAvailable('11:00')).toBe(false);
    expect(isAvailable('10:00')).toBe(true);
    expect(isAvailable('03:00')).toBe(false);
  });
  it('unlocks the free haircut at the sixth stamp, not the fifth', () => {
    expect(earnedFreeCut(5)).toBe(false);
    expect(earnedFreeCut(6)).toBe(true);
  });
  it('formats Egyptian pounds and numerals for each language', () => {
    expect(price(200, 'ar')).toBe('٢٠٠ ج.م');
    expect(price(200, 'en')).toBe('EGP 200');
    expect(number(14, 'ar')).toBe('١٤');
  });
  it('accepts Egyptian mobile numbers in both numeral systems', () => {
    expect(validPhone('01012345678')).toBe(true);
    expect(validPhone('٠١٠١٢٣٤٥٦٧٨')).toBe(true);
    expect(validPhone('01234')).toBe(false);
    expect(validPhone('01912345678')).toBe(false);
  });
  it('provides both language fields for each service and barber', () => {
    expect(data.services).toHaveLength(6);
    for (const service of data.services) { expect(service.name.ar).toBeTruthy(); expect(service.name.en).toBeTruthy(); expect(service.description.ar).toBeTruthy(); expect(service.description.en).toBeTruthy(); }
    expect(data.barbers).toHaveLength(3);
  });
});