import MatchingTable from '../src/MatchingTable';

describe('로또 당첨내역 테스트', () => {
  test('당첨순위를 전달하면 순위에 맞게 몇 개의 로또를 맞췄는지 매칭테이블 생성', () => {
    const matchingTable = new MatchingTable();
    const rankingList = [5, 4, 3, 2, 1];
    matchingTable.updateMatchingCount(rankingList);

    expect(matchingTable.getMatchingTable()).toEqual({
      threeMatching: 1,
      fourMatching: 1,
      fiveMatchingNotBonus: 1,
      fiveMatchingAndBonus: 1,
      allMatching: 1,
    });
  });
});
