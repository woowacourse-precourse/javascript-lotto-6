import Lotto from '../src/Lotto';
import Lottos from '../src/Lottos';

describe('Lottos 클래스 테스트', () => {
  test.each([['2000f'], ['3000n'], ['abc']])(
    '구입 금액이 숫자가 아니면 예외가 발생한다. 구입 금액: %s',
    purchaseAmount => {
      expect(() => {
        new Lottos(purchaseAmount);
      }).toThrow('[ERROR]');
    },
  );

  test.each([['292'], ['33'], ['0']])(
    '구입 금액이 1000보다 작으면 예외가 발생한다. 구입 금액: %s',
    purchaseAmount => {
      expect(() => {
        new Lottos(purchaseAmount);
      }).toThrow('[ERROR]');
    },
  );

  test.each([['3444'], ['1424'], ['3']])(
    '구입 금액이 1000단위가 아니면 예외가 발생한다. 구입 금액: %s',
    purchaseAmount => {
      expect(() => {
        new Lottos(purchaseAmount);
      }).toThrow('[ERROR]');
    },
  );

  test.each([
    ['1000', 1],
    ['2000', 2],
    ['3000', 3],
  ])(
    'count 작동 테스트, 구입 금액: %s, 로또 티켓 개수: %d',
    (purchaseAmount, count) => {
      const lottos = new Lottos(purchaseAmount);
      expect(lottos.count).toEqual(count);
    },
  );

  test.each([
    ['4000', 4],
    ['2000', 2],
    ['3000', 3],
  ])(
    'list 작동 테스트, 구입 금액: %s, 발행 로또 티켓 개수: %d',
    (purchaseAmount, count) => {
      const lottos = new Lottos(purchaseAmount);
      expect(lottos.lists.length).toEqual(count);
    },
  );
});

describe('로또 결과 테스트', () => {
  test('실행 테스트 - 5등이 2개인 경우', () => {
    const lottos = [
      [21, 23, 29, 34, 42, 45],
      [2, 3, 15, 18, 29, 43],
      [12, 16, 27, 29, 37, 44],
      [4, 13, 15, 19, 38, 39],
      [6, 7, 16, 17, 32, 40],
      [2, 5, 6, 18, 24, 41],
      [1, 16, 20, 36, 37, 43],
      [3, 12, 16, 19, 26, 42],
      [1, 4, 15, 18, 28, 32],
      [5, 10, 12, 21, 28, 34],
    ];

    const winningNumbers = [1, 5, 16, 20, 18, 28];
    const bonusNumber = 34;

    const calculateRanks = () => {
      let lottoRanks = [];
      lottos.forEach(numbers => {
        const lotto = new Lotto(numbers);
        lottoRanks.push(lotto.calculateRank(winningNumbers, bonusNumber));
      });

      return lottoRanks.filter(rank => rank <= 5);
    };

    expect(calculateRanks()).toEqual([5, 5]);
  });

  test('실행 테스트 - 낙첨인 경우', () => {
    const lottos = [
      [4, 7, 14, 20, 36, 45],
      [2, 6, 8, 9, 20, 26],
      [5, 6, 19, 23, 27, 40],
    ];

    const winningNumbers = [1, 2, 4, 8, 23, 24];
    const bonusNumber = 42;

    const calculateRanks = () => {
      let lottoRanks = [];
      lottos.forEach(numbers => {
        const lotto = new Lotto(numbers);
        lottoRanks.push(lotto.calculateRank(winningNumbers, bonusNumber));
      });

      return lottoRanks.filter(rank => rank <= 5);
    };

    expect(calculateRanks()).toEqual([]);
  });
});
