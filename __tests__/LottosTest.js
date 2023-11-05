import { MissionUtils } from '@woowacourse/mission-utils';
import Lottos from '../src/models/Lottos.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('Lottos 테스트', () => {
  test('Lottos 구입 갯수 테스트', () => {
    const lottos = new Lottos();
    lottos.setPurchase(30000);
    lottos.generateLotto();

    expect(lottos.getLottos()).toHaveLength(30);

    lottos.setPurchase(50000);
    lottos.generateLotto();

    expect(lottos.getLottos()).toHaveLength(50);

    expect(() => lottos.setPurchase(34926)).toThrow();
  });

  test('Lottos 구입금액 테스트', () => {
    const lottos = new Lottos();

    expect(() => lottos.setPurchase(34926)).toThrow();
    expect(() => lottos.setPurchase(4926)).toThrow();
  });

  test('Lottos 최종 결과 값 테스트', async () => {
    const lottos = new Lottos();
    const randomNumber = [1, 2, 3, 4, 5, 6];
    mockRandoms([randomNumber]);
    lottos.setPurchase(1000);
    lottos.generateLotto();

    expect(lottos.getWinningResult([1, 2, 3, 7, 8, 9], 43)).toEqual({
      rate: '500.0',
      results: { five_rank: 1, four_rank: 0, one_rank: 0, three_rank: 0, two_rank: 0 },
    });
  });
});
