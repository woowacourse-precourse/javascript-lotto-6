import ProfitCalculator from '../src/Controller/ProfitCalculator.js';
import LottoTicket from '../src/Model/LottoTicket.js';
import Lotto from '../src/Lotto.js';

describe('이윤 계산기 클래스에 대한 테스트', () => {
  const lottoTicket = LottoTicket.getInstance();
  const profitCalculator = new ProfitCalculator();

  lottoTicket.saveSpecificTypeData('ticket', [
    new Lotto([1, 2, 3, 4, 5, 6]),
    new Lotto([4, 5, 6, 7, 8, 9]),
    new Lotto([1, 10, 11, 12, 13, 14]),
    new Lotto([1, 2, 3, 4, 5, 6]),
    new Lotto([4, 5, 6, 7, 8, 9]),
    new Lotto([1, 2, 3, 4, 5, 6]),
    new Lotto([4, 5, 6, 7, 8, 9]),
    new Lotto([1, 10, 11, 12, 13, 14]),
  ]);

  test('총 수익을 계산할 수 있는가?', () => {
    const inputs = [{
      matchesCount: {
        3: 0, 4: 3, 5: 0, 6: 0, bonus: 0,
      },
    }, {
      matchesCount: {
        3: 3, 4: 3, 5: 0, 6: 0, bonus: 0,
      },
    }];

    const answers = [50000 * 3, (50000 * 3 + 5000 * 3)];

    inputs.forEach((input, i) => {
      const totalIncome = profitCalculator.calculateTotalIncome(input.matchesCount);

      expect(totalIncome).toBe(answers[i]);
    });
  });

  test('로또 번호 5개와 보너스 숫자가 맞은 경우 총 수익 계산이 가능한가?', () => {
    const inputs = [{
      matchesCount: {
        3: 0, 4: 3, 5: 1, 6: 0, bonus: 1,
      },
    }, {
      matchesCount: {
        3: 1, 4: 0, 5: 1, 6: 0, bonus: 1,
      },
    }];
    const answers = [31650000, 31505000];

    inputs.forEach((input, i) => {
      const totalIncome = profitCalculator.calculateTotalIncome(input.matchesCount);

      expect(totalIncome).toBe(answers[i]);
    });
  });

  test('총 수익에 대한 수익률을 소수점 둘째 자리에서 반올림하여 계산이 가능한가?', () => {
    const inputs = [5000, 3000, 1500];
    const answers = [62.5, 37.5, 18.8];

    inputs.forEach((input, i) => {
      const earningRate = profitCalculator.calculateEarningRate(input);

      expect(earningRate).toBe(answers[i]);
    });
  });
});
