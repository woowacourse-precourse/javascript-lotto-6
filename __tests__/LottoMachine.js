import { MissionUtils } from '@woowacourse/mission-utils';
import LottoMachine from '../src/LottoMachine';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('로또머신 클래스 테스트', () => {
  test('issueLottos 테스트', () => {
    // given
    const randomNumber = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    mockRandoms(randomNumber);
    const lottoMachine = new LottoMachine();
    lottoMachine.setMoney(8000);

    // when
    lottoMachine.issueLottos();

    // then
    for (let i = 0; i < lottoMachine.getPurchaseCount(); i++) {
      const result = lottoMachine.getLotto(i);
      expect(result).toEqual(randomNumber[i]);
    }
  });
});
