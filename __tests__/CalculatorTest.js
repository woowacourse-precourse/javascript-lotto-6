import { Calculator } from '../src/models/index.js';
import { CORRECT_NUMBER, WINNINGS_MONEY } from '../src/constants/index.js';
import { makeExpectedWinningResult } from '../testUtils/index.js';

describe('Calculator 클래스 테스트', () => {
  const PARAMETER_ARRAY = [
    [1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
  ];
  const WINNING_RESULT_ARRAY = PARAMETER_ARRAY.map((v) =>
    makeExpectedWinningResult(...v),
  );

  const WINNINGS_ARRAY = [
    [
      WINNINGS_MONEY[CORRECT_NUMBER.three],
      WINNINGS_MONEY[CORRECT_NUMBER.four],
      WINNINGS_MONEY[CORRECT_NUMBER.fiveNoBonus],
      WINNINGS_MONEY[CORRECT_NUMBER.fiveAndBonus],
      WINNINGS_MONEY[CORRECT_NUMBER.six],
    ],
    [
      0,
      0,
      0,
      WINNINGS_MONEY[CORRECT_NUMBER.fiveAndBonus],
      WINNINGS_MONEY[CORRECT_NUMBER.six],
    ],
    [0, 0, 0, 0, 0],
  ];
  test('당첨금 계산', () => {
    WINNING_RESULT_ARRAY.forEach((v, i) => {
      const winnings = Calculator.calculateWinnings(v);
      const isEqual = winnings.join(',') === WINNINGS_ARRAY[i].join(',');
      expect(isEqual).toBeTruthy();
    });
  });

  test('총 당첨금 계산', () => {
    WINNING_RESULT_ARRAY.forEach((v, i) => {
      const totalWinnings = Calculator.getTotalWinnings(v);
      const expectedTotalWinnings = WINNINGS_ARRAY[i].reduce(
        (a, c) => a + c,
        0,
      );
      expect(totalWinnings).toEqual(expectedTotalWinnings);
    });
  });
  test('소수점 둘째 자리에서 반올림', () => {
    const NUMBERS = [12.235, 20.162];
    const RESULTS = [12.2, 20.2];
    NUMBERS.forEach((v, i) => {
      expect(Calculator.round(v)).toEqual(RESULTS[i]);
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
      makeItems(1000, WINNINGS_MONEY[CORRECT_NUMBER.six], 200000000),
    ];

    TEST_ITEMS.forEach((v) => {
      const rateOfReturn = Calculator.calculateRateOfReturn(
        v.paymentAmount,
        v.winnings,
      );
      expect(rateOfReturn).toEqual(v.rateOfReturn);
    });
  });
});
