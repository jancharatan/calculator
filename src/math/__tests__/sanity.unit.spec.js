import math from 'mathjs';

describe('mathjs sanity test', () => {
  test('math works', () => {
    expect(1 + 1).toBe(2);
  });

  it('does a thing', () => {
    expect(420).toBe(420);
  });

  describe('mathjs evaluate', () => {
    test('basic multiplication evaluate', () => {
      // GIVEN
      const expression = '5 * 4';

      // WHEN
      const result = math.eval(expression);

      // THEN
      expect(result).toBe(20);
    });

    test('order of operations', () => {
      // GIVEN
      const expression = '3 + 4 * 5';

      // WHEN
      const result = math.eval(expression);

      // THEN
      expect(result).toBe(23);
    });
  });
});
