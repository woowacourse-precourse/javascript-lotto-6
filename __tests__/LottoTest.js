import { Random } from '@woowacourse/mission-utils';
import generateLotto from '../src/utils/generateLotto.js';
import getWinningStatistics from '../src/utils/getWinningStatistics.js';
import Lotto from '../src/domain/Lotto.js';
import getRateOfReturn from '../src/utils/getRateOfReturn.js';

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
    const recievedValue = Array.from({ length: count }, () => generateLotto().getNumbers());
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
    const array = [
      [1, 2, 3, 4, 5, 6],
      [3, 4, 5, 6, 2, 8],
      [10, 34, 2, 42, 33, 21],
    ];
    const winningNumbers = [10, 34, 2, 42, 33, 22];
    const bonusNumber = 21;
    const lottos = [];

    array.forEach(lottoNumber => lottos.push(new Lotto(lottoNumber)));

    expect(getWinningStatistics(lottos, winningNumbers, bonusNumber)).toStrictEqual(expectedValue);
  });

  test('총 수익률을 계산하는 기능', () => {
    const purchaseAmount = 8000;
    const returns = [5000];
    const expectedValue = '62.5%';
    expect(getRateOfReturn(purchaseAmount, returns)).toBe(expectedValue);
  });
});
