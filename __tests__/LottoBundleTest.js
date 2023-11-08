import { MissionUtils } from '@woowacourse/mission-utils';
import { CONSTANT, ERROR, LOTTO_NUMBER } from '../src/constants/Constant.js';
import LottoBundle from '../src/model/LottoBundle.js';
import Lotto from '../src/Lotto.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

const isValidLottoNumber = (number) =>
  number >= LOTTO_NUMBER.minNum && number <= LOTTO_NUMBER.maxNum;

describe('로또 번들(구매 금액) 검증 테스트', () => {
  test.each([['yuna'], ['!'], ['']])('금액이 숫자가 아니면 예외가 발생한다.', (input) => {
    // when & then
    expect(() => {
      new LottoBundle(input);
    }).toThrow(ERROR.isNotNumber);
  });

  test.each([[-1], [0], ['-3.02']])('금액이 양수가 아니면 예외가 발생한다.', (input) => {
    // when & then
    expect(() => {
      new LottoBundle(input);
    }).toThrow(ERROR.isNotPositive);
  });

  test.each([[1200], [1000.01], [222], ['3500']])(
    `금액이 ${CONSTANT.amountUnit}원 단위가 아니면 예외가 발생한다.`,
    (input) => {
      // when & then
      expect(() => {
        new LottoBundle(input);
      }).toThrow(ERROR.isNotInAmountUnit);
    },
  );

  test.each([[1000], [30000.0], ['25000']])(
    `금액이 ${CONSTANT.amountUnit}원 단위의 양수이면 예외가 발생하지 않는다.`,
    (input) => {
      // when & then
      expect(() => {
        new LottoBundle(input);
      }).not.toThrow();
    },
  );
});

describe('로또 번들 클래스 기능 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test(`생성된 로또 번호가 ${LOTTO_NUMBER.count}개의 ${LOTTO_NUMBER.minNum}에서 ${LOTTO_NUMBER.maxNum} 사이의 숫자인지 테스트 `, () => {
    // given
    const lottoBundle = new LottoBundle(50000);

    // when
    lottoBundle.buyLottos();
    const lottoList = lottoBundle.getLottoList();

    // then
    lottoList.forEach((lotto) => {
      expect(lotto.length).toBe(LOTTO_NUMBER.count);

      lotto.forEach((number) => {
        expect(isValidLottoNumber(number)).toBe(true);
      });
    });
  });

  test.each([
    { amount: 1000, random: [[1, 2, 3, 4, 5, 6]], lottoList: [[1, 2, 3, 4, 5, 6]] },
    {
      amount: 2000,
      random: [
        [12, 15, 3, 29, 33, 45],
        [6, 5, 4, 3, 2, 1],
      ],
      lottoList: [
        [3, 12, 15, 29, 33, 45],
        [1, 2, 3, 4, 5, 6],
      ],
    },
  ])('로또를 구매했을 때 각각의 로또가 잘 생성되는지 테스트', ({ amount, random, lottoList }) => {
    // given
    mockRandoms(random);
    const lottoBundle = new LottoBundle(amount);

    // when
    lottoBundle.buyLottos();
    const result = lottoBundle.getLottoList();

    // then
    expect(result).toStrictEqual(lottoList);
  });

  test.each([
    {
      lottoList: [[1, 2, 3, 4, 5, 6]],
      winningNumber: [1, 2, 3, 4, 5, 6],
      bonusNumber: 7,
      totalRank: [1, 0, 0, 0, 0],
    },
    {
      lottoList: [[1, 2, 3, 4, 5, 6]],
      winningNumber: [1, 2, 3, 4, 5, 7],
      bonusNumber: 6,
      totalRank: [0, 1, 0, 0, 0],
    },
    {
      lottoList: [
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
      ],
      winningNumber: [1, 2, 3, 7, 8, 9],
      bonusNumber: 10,
      totalRank: [0, 0, 0, 0, 2],
    },
  ])(
    '각 로또의 순위를 구해서 배열에 저장하는 기능 테스트',
    ({ lottoList, winningNumber, bonusNumber, totalRank }) => {
      // given
      const lottoBundle = new LottoBundle(CONSTANT.amountUnit * lottoList.length);
      const winningLotto = new Lotto(winningNumber);
      mockRandoms(lottoList);
      lottoBundle.buyLottos();

      // when
      lottoBundle.calculateTotalRank(winningLotto, bonusNumber);
      const result = lottoBundle.getTotalRank();

      // then
      expect(result).toStrictEqual(totalRank);
    },
  );

  test.each([
    {
      lottoList: [[1, 2, 3, 4, 5, 6]],
      winningNumber: [1, 2, 3, 4, 5, 6],
      bonusNumber: 7,
      profit: 2_000_000_000,
    },
    {
      lottoList: [[1, 2, 3, 4, 5, 6]],
      winningNumber: [1, 2, 3, 4, 5, 7],
      bonusNumber: 6,
      profit: 30_000_000,
    },
    {
      lottoList: [
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
      ],
      winningNumber: [1, 2, 3, 7, 8, 9],
      bonusNumber: 10,
      profit: 10_000,
    },
  ])(
    '로또 번들의 총 수익을 구하는 기능 테스트',
    ({ lottoList, winningNumber, bonusNumber, profit }) => {
      // given
      const lottoBundle = new LottoBundle(CONSTANT.amountUnit * lottoList.length);
      const winningLotto = new Lotto(winningNumber);

      mockRandoms(lottoList);
      lottoBundle.buyLottos();
      lottoBundle.calculateTotalRank(winningLotto, bonusNumber);

      // when
      const result = lottoBundle.getProfit();

      // then
      expect(result).toStrictEqual(profit);
    },
  );

  test.each([
    { lottoCount: 5, profit: 0, profitRate: '0.0' },
    { lottoCount: 3, profit: 10_000, profitRate: '333.3' },
    { lottoCount: 1, profit: 2_000_000_000, profitRate: '200000000.0' },
  ])('로또 번들의 수익률을 구하는 기능 테스트', ({ lottoCount, profit, profitRate }) => {
    // given
    const lottoBundle = new LottoBundle(lottoCount * CONSTANT.amountUnit);
    const mockGetProfit = jest.fn();
    mockGetProfit.mockReturnValueOnce(profit);

    // when
    lottoBundle.getProfit = mockGetProfit;
    const result = lottoBundle.getProfitRate();

    // then
    expect(result).toBe(profitRate);
  });
});
