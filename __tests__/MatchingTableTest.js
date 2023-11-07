import MatchingTable from '../src/MatchingTable';

describe('매칭 테이블 테스트', () => {
  let matchingTable;
  beforeEach(() => {
    matchingTable = new MatchingTable();
  });

  test('자동로또와 일치하는 갯수를 전달하면 매칭 테이블을 생성합니다.', () => {
    const matchingCounts = [3, 4, 6];
    matchingTable.updateTable(matchingCounts);

    expect(matchingTable.getTable()).toEqual({
      three: 1,
      four: 1,
      fiveNotBonus: 0,
      fiveAndBonus: 0,
      all: 1,
    });
  });

  test('2이하의 수는 매칭 테이블에 기록되지 않습니다.', () => {
    const matchingCounts = [1, 2];
    matchingTable.updateTable(matchingCounts);

    expect(matchingTable.getTable()).toEqual({
      three: 0,
      four: 0,
      fiveNotBonus: 0,
      fiveAndBonus: 0,
      all: 0,
    });
  });

  test('5개 일치, 보너스 불일치', () => {
    const matchingCounts = [[5, false]];
    matchingTable.updateTable(matchingCounts);

    expect(matchingTable.getTable()).toEqual({
      three: 0,
      four: 0,
      fiveNotBonus: 1,
      fiveAndBonus: 0,
      all: 0,
    });
  });

  test('5개 일치, 보너스 일치', () => {
    const matchingCounts = [[5, true]];
    matchingTable.updateTable(matchingCounts);

    expect(matchingTable.getTable()).toEqual({
      three: 0,
      four: 0,
      fiveNotBonus: 0,
      fiveAndBonus: 1,
      all: 0,
    });
  });
});
