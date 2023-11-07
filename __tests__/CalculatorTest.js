import Calculator from '../src/Calculator';
import { WINNINGS_MONEY } from '../src/constant';
import { makeExpectedWinningResult } from '../testUtils';

describe('Calculator 클래스 테스트', () => {
  const RANK_ARRAY = [
    [1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
  ];
  const WINNING_RESULT_ARRAY = RANK_ARRAY.map((v) =>
    makeExpectedWinningResult(...v),
  );

  const WINNINGS_ARRAY = [
    [
      WINNINGS_MONEY.three,
      WINNINGS_MONEY.four,
      WINNINGS_MONEY.fiveNoBonus,
      WINNINGS_MONEY.fiveAndBonus,
      WINNINGS_MONEY.six,
    ],
    [0, 0, 0, WINNINGS_MONEY.fiveAndBonus, WINNINGS_MONEY.six],
    [0, 0, 0, 0, 0],
  ];

  test('당첨금 계산', () => {
    const calculator = new Calculator();
    WINNING_RESULT_ARRAY.forEach((v, i) => {
      const winnings = calculator.calculateWinnings(v);
      const isEqual = winnings.join(',') === WINNINGS_ARRAY[i].join(',');
      expect(isEqual).toBeTruthy();
    });
  });

  test('총 당첨금 계산', () => {
    const calculator = new Calculator();
    WINNING_RESULT_ARRAY.forEach((v, i) => {
      const totalWinnings = calculator.getTotalWinnings(v);
      const expectedTotalWinnings = WINNINGS_ARRAY[i].reduce(
        (a, c) => a + c,
        0,
      );
      expect(totalWinnings).toEqual(expectedTotalWinnings);
    });
  });
  test('소수점 둘째 자리에서 반올림', () => {
    const calculator = new Calculator();
    const NUMBERS = [12.2345, 20.136];
    const RESULTS = [12.23, 20.14];
    NUMBERS.forEach((v, i) => {
      expect(calculator.round(v)).toEqual(RESULTS[i]);
    });
  });

  test('수익률 계산', () => {
    const makeItems = (paymentAmount, winnings, rateOfReturn) => ({
      paymentAmount: paymentAmount,
      winnings: winnings,
      rateOfReturn: rateOfReturn,
    });

    const TEST_ITEMS = [
      makeItems(8000, 5000, 62.5),
      makeItems(2000, 0, 0),
      makeItems(10000, 5000, 50),
      makeItems(500000, 15000, 3),
      makeItems(1000, WINNINGS_MONEY.six, 200000000),
    ];

    TEST_ITEMS.forEach((v) => {
      const calculator = new Calculator();
      const rateOfReturn = calculator.calculateRateOfReturn(
        v.paymentAmount,
        v.winnings,
      );
      expect(rateOfReturn).toEqual(v.rateOfReturn);
    });
  });
});
