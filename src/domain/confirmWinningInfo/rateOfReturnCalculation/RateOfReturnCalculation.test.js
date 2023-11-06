import rateOfReturnCalculation from './rateOfReturnCalculation.module';

describe('수익률 계산 테스트', () => {
  test.each([
    {
      input: {
        purchasedLottoAmount: 5_000,
        prize: 2_031_555_000,
      },
      output: {
        rateOfReturn: '40631100',
      },
    },
    {
      input: {
        purchasedLottoAmount: 5_000,
        prize: 0,
      },
      output: {
        rateOfReturn: '0',
      },
    },
    {
      input: {
        purchasedLottoAmount: 3_000,
        prize: 30_000,
      },
      output: {
        rateOfReturn: '1000',
      },
    },
  ])(
    '구매 로또 금액이 $input.purchasedLottoAmount원, 당첨 금액이 $input.prize원 일때, 수익률은 $output.rateOfReturn%다.',
    ({ input: { purchasedLottoAmount, prize }, output }) => {
      // given - when
      const rateOfReturn = rateOfReturnCalculation.calculate({ purchasedLottoAmount, prize });
      // then
      expect(rateOfReturn).toMatch(output.rateOfReturn);
    },
  );
});
