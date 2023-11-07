import { ERROR } from '../src/constant/constant.js';
import WinLotto from '../src/model/WinLotto.js';

describe('정답 로또 클래스 테스트', () => {
  let winLotto;
  beforeEach(() => (winLotto = new WinLotto([1, 2, 3, 4, 5, 6])));

  test('보너스 로또 설정 - 성공', () => {
    winLotto.setBonusLotto(7);
    expect(winLotto.getBonusLotto()).toBe(7);
  });

  test('보너스 로또 설정 - 범위 에러', () => {
    expect(() => winLotto.setBonusLotto(99)).toThrow(ERROR.range);
  });

  test('보너스 로또 설정 - 숫자가 아닌 값', () => {
    expect(() => winLotto.setBonusLotto('asdf')).toThrow(ERROR.numberOnly);
  });

  test('보너스 로또 설정 - 중복 로또 번호', () => {
    expect(() => winLotto.setBonusLotto(6)).toThrow(ERROR.duplicatedWithWinLotto);
  });
});
