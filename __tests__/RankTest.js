import Rank from '../src/domain/Rank';
import { LOTTO_RANK } from '../src/utils/constants/constants';

describe('Rank 클래스 테스트', () => {
  const sampleRank = 1;

  test('일치하는 숫자 수가 올바르게 설정되는지 확인한다.', () => {
    const rank = new Rank(sampleRank);
    expect(rank.getMatchCount()).toEqual(LOTTO_RANK[sampleRank].matchCount);
  });

  test('일치하는 보너스 숫자 여부가 올바르게 설정되는지 확인한다.', () => {
    const rank = new Rank(sampleRank);
    expect(rank.getIsMatchBonus()).toEqual(LOTTO_RANK[sampleRank].isMatchBonus);
  });

  test('상금이 올바르게 설정되는지 확인한다.', () => {
    const rank = new Rank(sampleRank);
    expect(rank.getPrize()).toEqual(LOTTO_RANK[sampleRank].prize);
  });
});
