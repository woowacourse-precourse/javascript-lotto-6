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
        [21, 2, 43, 34, 15, 26],
        [7, 28, 19, 30, 41, 12],
        [13, 24, 35, 16, 37, 29],
        [4, 7, 8, 12, 45, 9],
      ];
      const expected = [
        [2, 15, 21, 26, 34, 43],
        [7, 12, 19, 28, 30, 41],
        [13, 16, 24, 29, 35, 37],
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
