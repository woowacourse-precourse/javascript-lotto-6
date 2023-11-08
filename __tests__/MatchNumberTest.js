import MatchNumber from '../src/lottogame/MatchNumber.js';

describe('MatchNumber 클래스 테스트', () => {
  test('당첨 번호와 일치하는 로또 개수를 찾는다.', () => {
    const matchNumber = new MatchNumber([1, 2, 3, 4, 5, 6]);
    const winnings = [2, 4, 6, 8, 10, 12];
    const matchingCount = matchNumber.findMatchingNumbers(winnings);
    expect(matchingCount).toEqual(3);
  });

  test('보너스 번호와 일치하는 로또 번호가 존재할 경우 true를 반환한다.', () => {
    const matchNumber = new MatchNumber([1, 2, 3, 4, 5, 6]);
    const bonus = 5;
    const hasMatchingBonus = matchNumber.findMatchingBonus(bonus);
    expect(hasMatchingBonus).toBeTruthy();
  });

  test('사용자 로또 번호를 출력한다', () => {
    const userLottoNumbers = [1, 2, 3, 4, 5, 6];
    const matchNumber = new MatchNumber(userLottoNumbers);
    const printedNumbers = matchNumber.printUserLottoNumbers();
    expect(printedNumbers).toEqual(userLottoNumbers);
  });
});
