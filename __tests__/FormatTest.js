describe('출력 형식 테스트', () => {
  test.each([
    [0, '0'],
    [1000, '1,000'],
    [10000, '10,000'],
  ])(
    '상금이 1000단위마다 쉼표(,)로 구분되어 출력되는지 확인한다.',
    (money, formattedMoney) => {
      expect(money.toLocaleString()).toBe(formattedMoney);
    },
  );

  test.each([
    [0, '0.0'],
    [1.255, '1.3'],
    [62.455, '62.5'],
  ])(
    '소수점 둘째 자리에서 반올림하여 소수점 첫째자리까지 출력되는지 확인한다.',
    (rate, formattedRate) => {
      expect(rate.toFixed(1)).toBe(formattedRate);
      expect((+(Math.round(rate + 'e+1') + 'e-1')).toFixed(1)).toBe(
        formattedRate,
      );
    },

    test('1000단위마다 쉼표(,)로 구분하고, 소수점 둘째 자리에서 반올림하여 첫째 자리까지 출력되는지 확인한다.', () => {
      const profiRate = 1000.45;

      expect(
        profiRate.toLocaleString(undefined, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        }),
      ).toBe('1,000.5');
    }),
  );
});
