import calculateTotal from '../src/util/calculateTotal.js';
import calcultePercent from '../src/util/calcultePercent.js';
import { MATCH_NUMBER } from '../src/constants/constant.js';

describe('수익률을 정상적으로 계산하는지 테스트 합니다.', () => {
  // given
  const { three, four, five, six, fiveAndBonus } = MATCH_NUMBER;
  const cases = [
    [[{ three: 0, four: 0, five: 0, fiveAndBonus: 0, six: 0 }, 0]],
    [[{ three: 1, four: 0, five: 0, fiveAndBonus: 0, six: 0 }, three]],
    [[{ three: 1, four: 1, five: 0, fiveAndBonus: 0, six: 0 }, three + four]],
    [[{ three: 1, four: 1, five: 1, fiveAndBonus: 0, six: 0 }, three + four + five]],
    [[{ three: 1, four: 1, five: 1, fiveAndBonus: 1, six: 0 }, three + four + five + fiveAndBonus]],
    [[{ three: 1, four: 1, five: 1, fiveAndBonus: 1, six: 1 }, three + four + five + fiveAndBonus + six]],
  ];
  test.each(cases)('각 복권의 일치 여부에 따라 정확한 수령 금액을 반환하는지 테스트 합니다.', ([match, total]) => {
    // when
    const sum = calculateTotal(match);

    // then
    expect(sum).toBe(total);
  });

  // given
  const rateCases = [
    [[1000, 1000, (1000 / 1000) * 100]],
    [[three + four, 4000, ((three + four) / 4000) * 100]],
    [[three + four + five, 100000, ((three + four + five) / 100000) * 100]],
    [[0, 1000, (0 / 1000) * 100]],
  ];
  test.each(rateCases)('정확한 수익률을 연산하는지 테스트 합니다.', ([prize, money, rate]) => {
    // when
    const result = calcultePercent(prize, money);

    // then
    expect(result).toBe(rate);
  });
});
