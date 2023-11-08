import Store from '../src/model/Store';
import { MATCH_STRINGS, MATCH_WINNING_AMOUNTS } from '../src/constants/match';

describe('Store 테스트', () => {
  let matchResult;
  let store;

  beforeEach(() => {
    store = new Store(8000);
    matchResult = [
      { matchCount: 3, matchBonus: false },
      { matchCount: 2, matchBonus: false },
      { matchCount: 2, matchBonus: true },
      { matchCount: 2, matchBonus: false },
      { matchCount: 1, matchBonus: false },
      { matchCount: 2, matchBonus: false },
      { matchCount: 2, matchBonus: true },
      { matchCount: 2, matchBonus: false },
    ];

    matchResult.forEach((result) => {
      store.storeMatchResult(result);
    });
  });

  test('Store는 저장된 결과를 { matchString, count, money } 형태로 반환한다', () => {
    const { matchThree, matchFour, matchFive, matchFiveAndBonus, matchSix } = MATCH_STRINGS;
    const OUTPUT = [
      { matchString: matchThree, count: 1, money: MATCH_WINNING_AMOUNTS[matchThree] },
      { matchString: matchFour, count: 0, money: MATCH_WINNING_AMOUNTS[matchFour] },
      { matchString: matchFive, count: 0, money: MATCH_WINNING_AMOUNTS[matchFive] },
      { matchString: matchFiveAndBonus, count: 0, money: MATCH_WINNING_AMOUNTS[matchFiveAndBonus] },
      { matchString: matchSix, count: 0, money: MATCH_WINNING_AMOUNTS[matchSix] },
    ];

    const result = store.getMatchResults();

    expect(result).toEqual(OUTPUT);
  });

  test('Store에 원금을 넣으면 총 수익률을 얻는다.', () => {
    const totalReturn = store.getTotalReturn();
    const OUTPUT = '62.5';

    expect(totalReturn).toBe(OUTPUT);
  });
});
