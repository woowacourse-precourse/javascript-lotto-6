import MatchingTable from '../src/MatchingTable';
import { RANKING } from '../src/constants/conditions';

const MATCHING_COUNT_INDEX = 1;

describe('매칭 테이블 테스트', () => {
  let mapTable;
  beforeEach(() => {
    mapTable = new MatchingTable();
  });

  test('로또번호와 일치 갯수에 맞게 매칭 테이블을 업데이트합니다.', () => {
    const lottoMatchCount = 3;
    mapTable.updateTable(lottoMatchCount);
    const updatedTable = mapTable.getTable();
    const entry = [...updatedTable].find(
      ([{ matchCount }]) => matchCount === lottoMatchCount,
    );

    expect(entry[MATCHING_COUNT_INDEX]).toBe(1);
  });

  test('5개가 일치하고 보너스 번호가 일치합니다.', () => {
    const lottoMatchCount = 5;
    const hasBonus = true;
    mapTable.updateTable(lottoMatchCount, hasBonus);
    const updatedTable = mapTable.getTable();
    const entry = [...updatedTable].find(
      ([{ matchCount, isBonusMatch }]) =>
        matchCount === lottoMatchCount && isBonusMatch,
    );

    expect(entry[MATCHING_COUNT_INDEX]).toBe(1);
  });

  test('5개가 일치하고 보너스 번호가 일치하지 않습니다.', () => {
    const lottoMatchCount = 5;
    const hasBonus = false;
    mapTable.updateTable(lottoMatchCount, hasBonus);
    const updatedTable = mapTable.getTable();
    const entry = [...updatedTable].find(
      ([{ matchCount, isBonusMatch }]) =>
        matchCount === lottoMatchCount && !isBonusMatch,
    );

    expect(entry[MATCHING_COUNT_INDEX]).toBe(1);
  });

  test('랭킹과 해당 랭킹에 몇 번 당첨되었는지 결과를 출력한다.', () => {
    const lottoMatchCount = 3;
    mapTable.updateTable(lottoMatchCount);
    mapTable.getSummaryResult();

    expect(mapTable.getSummaryResult()).toEqual([
      { ranking: RANKING.fifth, count: 1 },
      { ranking: RANKING.fourth, count: 0 },
      { ranking: RANKING.third, count: 0 },
      { ranking: RANKING.second, count: 0 },
      { ranking: RANKING.first, count: 0 },
    ]);
  });
});
