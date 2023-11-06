import calculateMatch from '../../src/util/calculateMatch.js';
import checkMatch from '../../src/util/checkMatch.js';

const MATCH = { three: 0, four: 0, five: 0, fiveAndBonus: 0, six: 0 };

describe('입력한 당첨번호와 로또 일치 테스트', () => {
  // given
  test.each([
    [[[11, 22, 33, 44, 1], [11, 2, 3, 4, 5, 6], 45, { matchCount: 1, bonusMatch: 0 }]],
    [[[1, 2, 3, 4, 5, 6], [1, 2, 7, 8, 9, 10], 11, { matchCount: 2, bonusMatch: 0 }]],
    [[[1, 2, 3, 4, 5, 6], [1, 2, 3, 8, 9, 10], 11, { matchCount: 3, bonusMatch: 0 }]],
    [[[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 9, 10], 11, { matchCount: 4, bonusMatch: 0 }]],
    [[[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 10], 11, { matchCount: 5, bonusMatch: 0 }]],
    [[[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 10], 6, { matchCount: 5, bonusMatch: 1 }]],
    [[[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], 11, { matchCount: 6, bonusMatch: 0 }]],
  ])('로또 당첨 번호화 로또의 일치 여부를 확인합니다.', ([lottolist, lotto, bonus, match]) => {
    // when

    const result = calculateMatch(lottolist, lotto, bonus);

    // then
    expect(result).toEqual(match);
  });
});

describe('각 개수별 일치수가 주어졌을떄, 총합을 올바르게 구하는지 테스트하기', () => {
  // given
  test.each([
    [[3, 1, { ...MATCH }, { three: 1, four: 0, five: 0, fiveAndBonus: 0, six: 0 }]],
    [[4, 1, { ...MATCH }, { three: 0, four: 1, five: 0, fiveAndBonus: 0, six: 0 }]],
    [[5, 0, { ...MATCH }, { three: 0, four: 0, five: 1, fiveAndBonus: 0, six: 0 }]],
    [[5, 1, { ...MATCH }, { three: 0, four: 0, five: 0, fiveAndBonus: 1, six: 0 }]],
    [[6, 1, { ...MATCH }, { three: 0, four: 0, five: 0, fiveAndBonus: 0, six: 1 }]],
    [[2, 1, { ...MATCH }, { three: 0, four: 0, five: 0, fiveAndBonus: 0, six: 0 }]],
    [[0, 1, { ...MATCH }, { three: 0, four: 0, five: 0, fiveAndBonus: 0, six: 0 }]],
  ])('각 일치여부에 따라 결과지를 올바르게 만드는지 확인합니다.', ([matchCount, bonusCount, match, answer]) => {
    // when
    checkMatch(matchCount, bonusCount, match);

    // then
    expect(match).toEqual(answer);
  });
});
