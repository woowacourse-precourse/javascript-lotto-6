import { LOTTO_RANK } from '../../src/constants/LottoOption.js';
import LottoResultCalculator from '../../src/model/LottoResultCalculator.js';

describe('로또 결과 계산 클래스 테스트', () => {
  test.each([
    {
      matchList: [
        { mainNumber: 4, bonusNumber: false },
        { mainNumber: 5, bonusNumber: true },
        { mainNumber: 3, bonusNumber: true },
      ],
      expectPrizeTable: [0, 1, 0, 1, 1],
      expectPrizeTotal:
        LOTTO_RANK.second.prizeValue +
        LOTTO_RANK.fourth.prizeValue +
        LOTTO_RANK.fifth.prizeValue,
    },
    {
      matchList: [
        { mainNumber: 6, bonusNumber: false },
        { mainNumber: 3, bonusNumber: true },
        { mainNumber: 3, bonusNumber: true },
      ],
      expectPrizeTable: [1, 0, 0, 0, 2],
      expectPrizeTotal:
        LOTTO_RANK.first.prizeValue + LOTTO_RANK.fifth.prizeValue * 2,
    },
  ])(
    '결과 정상 반환 테스트',
    ({ matchList, expectPrizeTable, expectPrizeTotal }) => {
      // given
      const lottoResultCalculator = new LottoResultCalculator();
      // when
      const result = lottoResultCalculator.calculateResults(matchList);

      // then
      expect(result.prizeAmount).toEqual(expectPrizeTable);
      expect(result.prizeTotal).toBe(expectPrizeTotal);
    }
  );
});
