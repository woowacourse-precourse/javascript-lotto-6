import WinningResult from '../src/WinningResult';

describe('당첨 결과 테스트', () => {
  test('당첨 결과를 반환합니다. - 당첨갯수가 2개이하면 결과에 기록되지 않습니다.', () => {
    const matchCountList = [0, 1, 2];
    const expected = {
      three: 0,
      four: 0,
      fiveNotBonus: 0,
      fiveAndBonus: 0,
      all: 0,
    };
    const winningResult = new WinningResult(matchCountList);

    expect(winningResult.getResult()).toEqual(expected);
  });

  test('당첨 결과를 반환합니다. - 당첨갯수6개 => 1등', () => {
    const matchCountList = [6];
    const expected = {
      three: 0,
      four: 0,
      fiveNotBonus: 0,
      fiveAndBonus: 0,
      all: 1,
    };
    const winningResult = new WinningResult(matchCountList);

    expect(winningResult.getResult()).toEqual(expected);
  });

  test('당첨 결과를 반환합니다. - 당첨갯수5개, 보너스 당첨 => 2등', () => {
    const matchCountList = [[5, true]];
    const expected = {
      three: 0,
      four: 0,
      fiveNotBonus: 0,
      fiveAndBonus: 1,
      all: 0,
    };
    const winningResult = new WinningResult(matchCountList);

    expect(winningResult.getResult()).toEqual(expected);
  });

  test('당첨 결과를 반환합니다. - 당첨갯수5개, 보너스 미당첨 => 3등', () => {
    const matchCountList = [[5, false]];
    const expected = {
      three: 0,
      four: 0,
      fiveNotBonus: 1,
      fiveAndBonus: 0,
      all: 0,
    };
    const winningResult = new WinningResult(matchCountList);

    expect(winningResult.getResult()).toEqual(expected);
  });

  test('당첨 결과를 반환합니다. - 당첨갯수4개 => 4등', () => {
    const matchCountList = [4];
    const expected = {
      three: 0,
      four: 1,
      fiveNotBonus: 0,
      fiveAndBonus: 0,
      all: 0,
    };
    const winningResult = new WinningResult(matchCountList);

    expect(winningResult.getResult()).toEqual(expected);
  });

  test('당첨 결과를 반환합니다. - 당첨갯수3개 => 5등', () => {
    const matchCountList = [3];
    const expected = {
      three: 1,
      four: 0,
      fiveNotBonus: 0,
      fiveAndBonus: 0,
      all: 0,
    };
    const winningResult = new WinningResult(matchCountList);

    expect(winningResult.getResult()).toEqual(expected);
  });
});
