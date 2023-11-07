import { MissionUtils } from '@woowacourse/mission-utils';
import LottoGame from '../src/models/LottoGame.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('Lottogame 테스트', () => {
  test('Lotto 구입 갯수 테스트', () => {
    const lottogame = new LottoGame();
    lottogame.setPurchase(30000);

    expect(lottogame.getLottos()).toHaveLength(30);

    lottogame.setPurchase(50000);

    expect(lottogame.getLottos()).toHaveLength(50);

    expect(() => lottogame.setPurchase(34926)).toThrow();
  });

  test('Lottogame 구입금액 테스트', () => {
    const lottogame = new LottoGame();

    expect(() => lottogame.setPurchase(34926)).toThrow();
    expect(() => lottogame.setPurchase(4926)).toThrow();
  });

  test('Lottogame 최종 결과 값 테스트', async () => {
    const lottogame = new LottoGame();
    const randomNumber = [1, 2, 3, 4, 5, 6];
    mockRandoms([randomNumber]);
    lottogame.setPurchase(1000);

    expect(lottogame.getWinningResult([1, 2, 3, 7, 8, 9], 43)).toEqual({
      rate: '500.0',
      results: { five_rank: 1, four_rank: 0, one_rank: 0, three_rank: 0, two_rank: 0 },
    });
  });
});
