import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('[getMatchWinningNumbers]의 인자로 당첨 번호 배열을 넘기면 Lotto클래스가 가진 numbers와 일치하는 숫자 배열을 필터하여 반환한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const resultNumbers = [4, 5];

    const lotto = new Lotto([4, 5, 7, 8, 9, 10]);
    const matchedNumbers = lotto.getMatchWinningNumbers(winningNumbers);

    expect(matchedNumbers).toEqual(resultNumbers);
  });

  test('[getMatchWinningNumbers] 로또 인스턴스가 가진 번호와 당첨 번호에 일치하는 번호가 없으면 빈 배열을 반환한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const resultNumbers = [];

    const lotto = new Lotto([7, 8, 9, 10, 11, 12]);
    const matchedNumbers = lotto.getMatchWinningNumbers(winningNumbers);

    expect(matchedNumbers).toEqual(resultNumbers);
  });

  test('[isMatchBonusNumber] 보너스 번호가 포함되어 있으면 true를 반환한다', () => {
    const lottoNumbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(lottoNumbers);
    const bonusNumber = 6;

    expect(lotto.isMatchBonusNumber(bonusNumber)).toBeTruthy();
  });

  test('[isMatchBonusNumber] 보너스 번호가 포함되어 있지 않으면 false를 반환한다', () => {
    const lottoNumbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(lottoNumbers);
    const bonusNumber = 7;

    expect(lotto.isMatchBonusNumber(bonusNumber)).toBeFalsy();
  });
});
