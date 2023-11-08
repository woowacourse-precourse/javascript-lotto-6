import { Lotto, LottoCalculator, LottoValidation } from '../src/domain/index.js';
import { FIXED_POINT, LOTTO, RATE } from '../src/constant/index.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  describe('로또 번호 생성 테스트', () => {
    test('생성한 로또 번호 중복 테스트', () => {
      for (let i = 0; i < 50; i++) {
        const numbers = Lotto.generateLottoNumbers();
        const set = new Set(numbers);
        expect(set.size).toBe(numbers.length);
      }
    });
    test('생성한 로또 번호 길이 테스트', () => {
      const numbers = Lotto.generateLottoNumbers();
      expect(numbers.length).toBe(LOTTO.COUNT);
    });
    test('생성한 로또 번호 오름차순 테스트', () => {
      const numbers = Lotto.generateLottoNumbers();
      const sortedNumbers = numbers.sort((a, b) => a - b);
      expect(numbers).toEqual(sortedNumbers);
    });
  });

  test.each(['1000', '2000', '3000'])('금액에 따른 로또 발행 테스트', (input) => {
    const lottos = Lotto.createLottos(input);
    expect(lottos.length).toBe(input / LOTTO.PRICE);
  });
});

describe('로또 유효성 검사 클래스 테스트', () => {
  describe('로또 번호 유효성 검사 테스트', () => {
    test.each([[[]], [[1, 2, 3, 4, 5]], [[1, 2, 3, 4, 5, 6, 7]]])(
      '로또 번호 길이가 맞지 않을 시 예외가 발생한다',
      (input) => {
        expect(() => LottoValidation.lotto(input)).toThrow('[ERROR]');
      },
    );
    test('로또 번호가 양의 정수가 아닐 시 예외가 발생한다', () => {
      expect(() => LottoValidation.lotto([1, 2, 3, 4, 5, -1])).toThrow('[ERROR]');
    });
    test('로또 번호가 1~45 사이의 숫자가 아닐 시 예외가 발생한다', () => {
      expect(() => LottoValidation.lotto([1, 2, 3, 4, 5, 46])).toThrow('[ERROR]');
    });

    test('로또 번호가 중복될 시 예외가 발생한다', () => {
      expect(() => LottoValidation.lotto([1, 2, 3, 4, 5, 5])).toThrow('[ERROR]');
    });
  });

  describe('로또 구매 금액 유효성 검사 테스트', () => {
    test('로또 구매 금액이 양의 정수가 아닐 시 예외가 발생한다', () => {
      expect(() => LottoValidation.amount(-1)).toThrow('[ERROR]');
    });
    test('로또 구매 금액이 1000원 미만일 시 예외가 발생한다', () => {
      expect(() => LottoValidation.amount(999)).toThrow('[ERROR]');
    });
    test('로또 구매 금액이 1000원 단위가 아닐 시 예외가 발생한다', () => {
      expect(() => LottoValidation.amount(1001)).toThrow('[ERROR]');
    });
  });

  describe('보너스 번호 유효성 검사 테스트', () => {
    test('보너스 번호가 양의 정수가 아닐 시 예외가 발생한다', () => {
      expect(() => LottoValidation.bonus(-1)).toThrow('[ERROR]');
    });
    test('보너스 번호가 1~45 사이의 숫자가 아닐 시 예외가 발생한다', () => {
      expect(() => LottoValidation.bonus(46)).toThrow('[ERROR]');
    });
    test('보너스 번호가 로또 번호와 중복될 시 예외가 발생한다', () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      expect(() => LottoValidation.bonus(winningNumbers, 1)).toThrow('[ERROR]');
    });
  });
});

describe('로또 당첨 결과 테스트', () => {
  const { FIRST, SECOND, THIRD, FOURTH, FIFTH, NONE } = LOTTO.WINNING;
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;
  const firstNumbers = [1, 2, 3, 4, 5, 6];
  const secondNumbers = [1, 2, 3, 4, 5, 7];
  const thirdNumbers = [1, 2, 3, 4, 5, 8];
  const fourthNumbers = [1, 2, 3, 4, 9, 10];
  const fifthNumbers = [1, 2, 3, 8, 9, 10];
  const noneNumbers = [10, 11, 12, 13, 14, 15];

  test.each([
    {
      numbers: firstNumbers,
      result: FIRST.PRIZE,
    },
    {
      numbers: secondNumbers,
      result: SECOND.PRIZE,
    },
    {
      numbers: thirdNumbers,
      result: THIRD.PRIZE,
    },
    {
      numbers: fourthNumbers,
      result: FOURTH.PRIZE,
    },
    {
      numbers: fifthNumbers,
      result: FIFTH.PRIZE,
    },
    {
      numbers: noneNumbers,
      result: NONE.PRIZE,
    },
  ])('당첨 금액 계산 테스트', (input) => {
    const { numbers, result } = input;
    const lotto = new Lotto(numbers);

    const lottoResult = LottoCalculator.calculatePrizeAmount(lotto, winningNumbers, bonusNumber);
    expect(lottoResult).toBe(result);
  });

  test.each([
    {
      lottosNumbers: [firstNumbers, secondNumbers, thirdNumbers, fourthNumbers, fifthNumbers],
      result: {
        [FIRST.PRIZE]: 1,
        [SECOND.PRIZE]: 1,
        [THIRD.PRIZE]: 1,
        [FOURTH.PRIZE]: 1,
        [FIFTH.PRIZE]: 1,
      },
    },
    {
      lottosNumbers: [firstNumbers, secondNumbers, thirdNumbers, fourthNumbers, noneNumbers],
      result: {
        [FIRST.PRIZE]: 1,
        [SECOND.PRIZE]: 1,
        [THIRD.PRIZE]: 1,
        [FOURTH.PRIZE]: 1,
        [FIFTH.PRIZE]: 0,
      },
    },
    {
      lottosNumbers: [firstNumbers, secondNumbers, thirdNumbers, noneNumbers, noneNumbers],
      result: {
        [FIRST.PRIZE]: 1,
        [SECOND.PRIZE]: 1,
        [THIRD.PRIZE]: 1,
        [FOURTH.PRIZE]: 0,
        [FIFTH.PRIZE]: 0,
      },
    },
    {
      lottosNumbers: [firstNumbers, secondNumbers, noneNumbers, noneNumbers, noneNumbers],
      result: {
        [FIRST.PRIZE]: 1,
        [SECOND.PRIZE]: 1,
        [THIRD.PRIZE]: 0,
        [FOURTH.PRIZE]: 0,
        [FIFTH.PRIZE]: 0,
      },
    },
    {
      lottosNumbers: [firstNumbers, noneNumbers, noneNumbers, noneNumbers, noneNumbers],
      result: {
        [FIRST.PRIZE]: 1,
        [SECOND.PRIZE]: 0,
        [THIRD.PRIZE]: 0,
        [FOURTH.PRIZE]: 0,
        [FIFTH.PRIZE]: 0,
      },
    },
    {
      lottosNumbers: [noneNumbers, noneNumbers, noneNumbers, noneNumbers, noneNumbers],
      result: {
        [FIRST.PRIZE]: 0,
        [SECOND.PRIZE]: 0,
        [THIRD.PRIZE]: 0,
        [FOURTH.PRIZE]: 0,
        [FIFTH.PRIZE]: 0,
      },
    },
    {
      lottosNumbers: [firstNumbers, firstNumbers, firstNumbers, firstNumbers, firstNumbers],
      result: {
        [FIRST.PRIZE]: 5,
        [SECOND.PRIZE]: 0,
        [THIRD.PRIZE]: 0,
        [FOURTH.PRIZE]: 0,
        [FIFTH.PRIZE]: 0,
      },
    },
  ])('당첨 통계 테스트', (input) => {
    const { lottosNumbers, result } = input;
    const lottos = lottosNumbers.map((numbers) => new Lotto(numbers));
    const statistics = LottoCalculator.calculateStatistics(lottos, winningNumbers, bonusNumber);

    expect(statistics).toEqual(result);
  });

  function calculateProfitRate(amount, count) {
    return ((amount * RATE) / (count * LOTTO.PRICE)).toFixed(FIXED_POINT);
  }
  test.each([
    {
      lottosNumbers: [firstNumbers, secondNumbers, thirdNumbers, fourthNumbers, fifthNumbers],
      result: calculateProfitRate(FIRST.PRIZE + SECOND.PRIZE + THIRD.PRIZE + FOURTH.PRIZE + FIFTH.PRIZE, 5),
    },
    {
      lottosNumbers: [firstNumbers, secondNumbers, thirdNumbers, fourthNumbers, noneNumbers],
      result: calculateProfitRate(FIRST.PRIZE + SECOND.PRIZE + THIRD.PRIZE + FOURTH.PRIZE, 5),
    },
    {
      lottosNumbers: [firstNumbers, secondNumbers, thirdNumbers, noneNumbers, noneNumbers],
      result: calculateProfitRate(FIRST.PRIZE + SECOND.PRIZE + THIRD.PRIZE, 5),
    },
    {
      lottosNumbers: [firstNumbers, secondNumbers, noneNumbers, noneNumbers, noneNumbers],
      result: calculateProfitRate(FIRST.PRIZE + SECOND.PRIZE, 5),
    },
    {
      lottosNumbers: [firstNumbers, noneNumbers, noneNumbers, noneNumbers, noneNumbers],
      result: calculateProfitRate(FIRST.PRIZE, 5),
    },
    {
      lottosNumbers: [noneNumbers, noneNumbers, noneNumbers, noneNumbers, noneNumbers],
      result: calculateProfitRate(0, 5),
    },
    {
      lottosNumbers: [
        fifthNumbers,
        noneNumbers,
        noneNumbers,
        noneNumbers,
        noneNumbers,
        noneNumbers,
        noneNumbers,
        noneNumbers,
      ],
      result: calculateProfitRate(FIFTH.PRIZE, 8),
    },
  ])('수익률 계산 테스트', (input) => {
    const { lottosNumbers, result } = input;
    const lottos = lottosNumbers.map((numbers) => new Lotto(numbers));
    const statistics = LottoCalculator.calculateStatistics(lottos, winningNumbers, bonusNumber);
    const purchaseAmount = lottos.length * LOTTO.PRICE;
    const profitRate = LottoCalculator.calculateProfitRate(statistics, purchaseAmount);

    expect(profitRate).toBe(result);
  });
});
