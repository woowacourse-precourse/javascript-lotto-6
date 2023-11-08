import Calculate from '../../src/util/Calculate';
import { MATCH_NUMBER, MATCH } from '../../src/constants/constant.js';

describe('util Calculate class static 메서드 test', () => {
  // given
  test.each([
    [[[11, 22, 33, 44, 1], [11, 2, 3, 4, 5, 6], 45, { matchCount: 1, bonusMatch: 0 }]],
    [[[1, 2, 3, 4, 5, 6], [1, 2, 7, 8, 9, 10], 11, { matchCount: 2, bonusMatch: 0 }]],
    [[[1, 2, 3, 4, 5, 6], [1, 2, 3, 8, 9, 10], 11, { matchCount: 3, bonusMatch: 0 }]],
    [[[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 9, 10], 11, { matchCount: 4, bonusMatch: 0 }]],
    [[[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 10], 11, { matchCount: 5, bonusMatch: 0 }]],
    [[[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 10], 6, { matchCount: 5, bonusMatch: 1 }]],
    [[[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], 11, { matchCount: 6, bonusMatch: 0 }]],
  ])(
    'calculateMatch method test: 로또 당첨 번호화 로또의 일치 여부를 확인합니다.',
    ([lottolist, lotto, bonus, match]) => {
      // when

      const result = Calculate.calculateMatch(lottolist, lotto, bonus);

      // then
      expect(result).toEqual(match);
    },
  );

  // given
  test.each([
    [[3, 1, { ...MATCH }, { three: 1, four: 0, five: 0, fiveAndBonus: 0, six: 0 }]],
    [[4, 1, { ...MATCH }, { three: 0, four: 1, five: 0, fiveAndBonus: 0, six: 0 }]],
    [[5, 0, { ...MATCH }, { three: 0, four: 0, five: 1, fiveAndBonus: 0, six: 0 }]],
    [[5, 1, { ...MATCH }, { three: 0, four: 0, five: 0, fiveAndBonus: 1, six: 0 }]],
    [[6, 1, { ...MATCH }, { three: 0, four: 0, five: 0, fiveAndBonus: 0, six: 1 }]],
    [[2, 1, { ...MATCH }, { three: 0, four: 0, five: 0, fiveAndBonus: 0, six: 0 }]],
    [[0, 1, { ...MATCH }, { three: 0, four: 0, five: 0, fiveAndBonus: 0, six: 0 }]],
  ])(
    'checkMatch method test: 각 일치여부에 따라 결과지를 올바르게 만드는지 확인합니다.',
    ([matchCount, bonusCount, match, answer]) => {
      // when
      Calculate.checkMatch(matchCount, bonusCount, match);

      // then
      expect(match).toEqual(answer);
    },
  );

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
  test.each(cases)(
    'calculateTotal method test: 각 복권의 일치 여부에 따라 정확한 수령 금액을 반환하는지 테스트 합니다.',
    ([match, total]) => {
      // when
      const sum = Calculate.calculateTotal(match);

      // then
      expect(sum).toBe(total);
    },
  );

  // given
  const rateCases = [
    [[1000, 1000, (1000 / 1000) * 100]],
    [[three + four, 4000, ((three + four) / 4000) * 100]],
    [[three + four + five, 100000, ((three + four + five) / 100000) * 100]],
    [[0, 1000, (0 / 1000) * 100]],
  ];
  test.each(rateCases)(
    'calcultePercent method test : 정확한 수익률을 연산하는지 테스트 합니다.',
    ([prize, money, rate]) => {
      // when
      const result = Calculate.calcultePercent(prize, money);

      // then
      expect(result).toBe(rate);
    },
  );
});
