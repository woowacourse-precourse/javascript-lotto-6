import { Random } from '@woowacourse/mission-utils';
import Lottos from '../src/domain/Lottos.js';
import RateOfReturn from '../src/domain/RateOfReturn.js';
import WinningStatistics from '../src/domain/WinningStatistics.js';

const mockRandoms = numbers => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.map(number => Random.pickUniqueNumbersInRange.mockReturnValueOnce(number));
};

describe('로또 기능 테스트', () => {
  test('구매금액 만큼 로또 번호를 생성한다.', () => {
    const expectedValue = [
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7],
    ];
    const count = 2;
    mockRandoms(expectedValue);
    const lottos = new Lottos(count);
    const recievedValue = lottos.getLottos();
    expect(recievedValue).toStrictEqual(expectedValue);
  });

  test('당첨 통계를 계산하는 기능', () => {
    const expectedValue = [
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 0개',
    ];
    const winningNumbers = [10, 34, 2, 42, 33, 22];
    const bonusNumber = 21;
    const count = 3;
    const random = [
      [1, 2, 3, 4, 5, 6],
      [3, 4, 5, 6, 2, 8],
      [10, 34, 2, 42, 33, 21],
    ];
    mockRandoms(random);
    const lottos = new Lottos(count).getLottos();
    const winningStatistics = new WinningStatistics(lottos, winningNumbers, bonusNumber).getWinningStaticsString();
    expect(winningStatistics).toStrictEqual(expectedValue);
  });

  test('총 수익률을 계산하는 기능', () => {
    const purchaseAmount = 8000;
    const winningStatistics = [0, 0, 3];
    const expectedValue = '62.5%';
    const rateOfReturn = new RateOfReturn(winningStatistics, purchaseAmount).getRateOfReturn();

    expect(rateOfReturn).toBe(expectedValue);
  });
});
