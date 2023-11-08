import { MissionUtils } from '@woowacourse/mission-utils';
import LottoGenerator from '../src/Domain/LottoGenerator';
import Lotto from '../src/Lotto';
import { LOTTO_INFO } from '../src/Utils/constants';

const mockRandoms = numbers => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

describe('LottoGenerator', () => {
  describe('LottoGenerator 생성자 테스트', () => {
    test('purchaseAmount에 따라 난수를 통해 로또 번호 목록을 생성한다.', () => {
      const random = [
        [6, 5, 4, 3, 2, 1],
        [7, 28, 19, 30, 41, 12],
        [25, 7, 43, 32, 15, 26],
      ];
      const expected = [
        [1, 2, 3, 4, 5, 6],
        [7, 12, 19, 28, 30, 41],
        [7, 15, 25, 26, 32, 43],
      ];
      mockRandoms(random);
      const lottoGenerator = new LottoGenerator(
        expected.length * LOTTO_INFO.PRICE,
      );
      expect(
        lottoGenerator.lottos.every(lotto => lotto instanceof Lotto),
      ).toBeTruthy();
      expect(lottoGenerator.lottos).toEqual(
        expected.map(numbers => new Lotto(numbers)),
      );
    });
  });
});
