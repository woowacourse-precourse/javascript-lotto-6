import MatchingTable from '../src/MatchingTable';

const MATCHING_COUNT_INDEX = 1;

describe('매칭 테이블 테스트', () => {
  let mapTable;
  beforeEach(() => {
    mapTable = new MatchingTable();
  });

  test('로또번호와 일치 갯수에 맞게 매칭 테이블을 업데이트합니다.', () => {
    const lottoMatchCount = 3;
    const updatedTable = mapTable.updateTable(lottoMatchCount);
    const entry = [...updatedTable].find(
      ([{ matchCount }]) => matchCount === lottoMatchCount,
    );

    expect(entry[MATCHING_COUNT_INDEX]).toBe(1);
  });

  test('5개가 일치하고 보너스 번호가 일치합니다.', () => {
    const lottoMatchCount = 5;
    const hasBonus = true;
    const updatedTable = mapTable.updateTable(lottoMatchCount, hasBonus);
    const entry = [...updatedTable].find(
      ([{ matchCount, isBonusMatch }]) =>
        matchCount === lottoMatchCount && isBonusMatch,
    );

    expect(entry[MATCHING_COUNT_INDEX]).toBe(1);
  });

  test('5개가 일치하고 보너스 번호가 일치하지 않습니다.', () => {
    const lottoMatchCount = 5;
    const hasBonus = false;
    const updatedTable = mapTable.updateTable(lottoMatchCount, hasBonus);
    const entry = [...updatedTable].find(
      ([{ matchCount, isBonusMatch }]) =>
        matchCount === lottoMatchCount && !isBonusMatch,
    );

    expect(entry[MATCHING_COUNT_INDEX]).toBe(1);
  });
});
