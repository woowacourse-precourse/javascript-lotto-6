import Lotto from '../src/Lotto.js';
import { PRIZE } from '../src/constants/constants.js';

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

  // 아래에 추가 테스트 작성 가능
  test('당첨 번호와 보너스 번호를 입력하면, 당첨 개수 및 보너스 번호 당첨 여부를 확인한다.', () => {
    const lotto = [1, 2, 3, 8, 9, 10];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const matchCount = lotto.filter(number =>
      winningNumbers.includes(number),
    ).length;

    const hasBonus = lotto.includes(bonusNumber);

    expect(matchCount).toBe(3);
    expect(hasBonus).toBe(false);
  });

  test('당첨 번호와 보너스 번호를 입력하면, 등수를 반환하는지 확인한다.', () => {
    const lotto = new Lotto([1, 2, 3, 8, 9, 10]);
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const prize = lotto.checkPrize(winningNumbers, bonusNumber);

    expect(prize).toBe(PRIZE.fifth.name);
  });
});
