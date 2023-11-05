import MatchingTable from '../src/MatchingTable';

describe('매칭 테이블 테스트', () => {
  test('로또번호와 일치 갯수에 맞게 매칭 테이블을 업데이트합니다.', () => {
    const mapTable = new MatchingTable();
    const updatedTable = mapTable.updateTable(3);
    const entry = [...updatedTable].find(
      ([key, value]) => key.matchCount === 3,
    );

    expect(entry[1]).toBe(1);
  });

  test('5개가 일치하고 보너스 번호가 일치합니다.', () => {
    const mapTable = new MatchingTable();
    const updatedTable = mapTable.updateTable(5, true);
    const entry = [...updatedTable].find(
      ([key, value]) => key.matchCount === 5 && key.isBonusMatch,
    );

    expect(entry[1]).toBe(1);
  });

  test('5개가 일치하고 보너스 번호가 일치하지 않습니다.', () => {
    const mapTable = new MatchingTable();
    const updatedTable = mapTable.updateTable(5, false);
    const entry = [...updatedTable].find(
      ([key, value]) => key.matchCount === 5 && !key.isBonusMatch,
    );

    expect(entry[1]).toBe(1);
  });
});
