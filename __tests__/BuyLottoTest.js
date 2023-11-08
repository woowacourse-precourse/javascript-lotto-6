import { Random } from '@woowacourse/mission-utils';
import IssuedLotteryTicket from '../src/IssuedLotteryTicket';

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickUniqueNumbersInRange);
};

describe('로또 발행 기능 테스트', () => {
  let issuedLotteryTicket;

  beforeEach(() => {
    issuedLotteryTicket = new IssuedLotteryTicket();
  });

  test('구매한 개수 구하기 테스트', () => {
    // given
    const input = 8000;
    const output = 8;

    // when
    const lottoCount = IssuedLotteryTicket.buyLottoCount(input);

    // then
    expect(lottoCount).toBe(output);
  });

  test('구매한 개수에 따라 로또 생성 테스트', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);

    // given
    const input = 8;
    const output = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];

    // when
    const lottoArray = issuedLotteryTicket.issuedLotto(input);

    // then
    expect(lottoArray).toEqual(output);
  });
});
