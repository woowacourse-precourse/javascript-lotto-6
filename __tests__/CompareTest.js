import Compare from '../src/Compare';

describe('Compare 클래스 테스트', () => {
  let compare;

  beforeEach(() => {
    compare = new Compare(
      [
        [8, 21, 23, 41, 42, 43],
        [3, 5, 1, 6, 2, 4],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 2, 3, 5, 4],
        [1, 14, 6, 3, 2, 4],
        [7, 1, 3, 4, 2, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ],
      [1, 2, 3, 4, 5, 6],
      14,
    );
  });

  describe('includesWinningNumber 메서드 테스트', () => {
    test('당첨번호 안에 발행 로또 번호가 포함되어 있을 경우 카운트', () => {
      // given
      const input = compare.lotto.pop();
      const output = 3;

      // when
      const includes = compare.includesWinningNumber(input);

      // then
      expect(includes).toBe(output);
    });
  });

  describe('includesBonusNumber 메서드 테스트', () => {
    test('발행 로또 번호 안에 보너스 번호가 포함되어 있을 경우 카운트', () => {
      // given
      const input = compare.lotto.pop();
      const output = 1;

      // when
      const includes = compare.includesBonusNumber(input);

      // then
      expect(includes).toBe(output);
    });
  });

  describe('compareNumber 메서드 테스트', () => {
    test('카운트 된 당첨 번호와 보너스 번호의 개수에 따라 각 등수 별 카운트', () => {
      // given
      const output = {
        fifthPlace: { sameCount: 1, winningMoney: 5000 },
        fourthPlace: { sameCount: 1, winningMoney: 50000 },
        thirdPlace: { sameCount: 1, winningMoney: 1500000 },
        secondPlace: { sameCount: 1, winningMoney: 30000000 },
        firstPlace: { sameCount: 1, winningMoney: 2000000000 },
      };

      // when
      const rankCounting = compare.compareNumber();

      // then
      expect(rankCounting).toEqual(output);
    });
  });

  describe('sumWinningMoney 메서드 테스트', () => {
    test('당첨 금액 합 테스트', () => {
      // given
      const input = {
        fivePlace: { sameCount: 1, winningMoney: 5000 },
        fourthPlace: { sameCount: 2, winningMoney: 50000 },
        thirdPlace: { sameCount: 0, winningMoney: 1500000 },
        secondPlace: { sameCount: 1, winningMoney: 30000000 },
        firstPlace: { sameCount: 0, winningMoney: 2000000000 },
      };

      // when
      const rorCompare = new Compare();
      const sum = rorCompare.sumWinningMoney(input);
      console.log(sum);

      // then
      expect(sum).toBe(30105000);
    });
  });

  describe('RateOfReturn 메서드 테스트', () => {
    test('수익률 계산 테스트', () => {
      // given
      const inputLotto = {
        fivePlace: { sameCount: 1, winningMoney: 5000 },
        fourthPlace: { sameCount: 2, winningMoney: 50000 },
        thirdPlace: { sameCount: 0, winningMoney: 1500000 },
        secondPlace: { sameCount: 1, winningMoney: 30000000 },
        firstPlace: { sameCount: 0, winningMoney: 2000000000 },
      };

      const inputExpense = 100000;

      // when
      const rorCompare = new Compare();
      const ror = rorCompare.RateOfReturn(inputLotto, inputExpense);

      // then
      expect(ror).toBe('30,105');
    });
  });

  describe('commaAfterRounding 메서드 테스트', () => {
    test('소수점 둘째자리에서 반올림 후 천단위로 콤마찍기 테스트', () => {
      // given
      const input = 34403.5893;

      // when
      const ror = Compare.commaAfterRounding(input);

      // then
      expect(ror).toBe('34,403.6');
    });
  });
});
