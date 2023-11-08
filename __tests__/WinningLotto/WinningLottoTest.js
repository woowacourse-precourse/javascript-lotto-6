import WinningLotto from '../../src/domains/WinningLotto.js';
import WinningLottoError from '../../src/errors/WinningLottoError.js';
import { ERROR_MESSAGES } from '../../src/constants/errorMessages.js';

describe('WinningLotto 클래스 테스트', () => {
  test('보너스 번호가 숫자가 아니라면 예외가 발생한다', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 'a');
    }).toThrow(new WinningLottoError(ERROR_MESSAGES.lotto_not_a_number));
  });

  test('보너스 번호가 유효 범위 밖이라면 예외가 발생한다', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], '46');
    }).toThrow(new WinningLottoError(ERROR_MESSAGES.lotto_out_of_range));
  });

  test('보너스 번호가 당첨 번호 배열과 중복되면 예외가 발생한다', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], '1');
    }).toThrow(new WinningLottoError(ERROR_MESSAGES.winning_lotto_have_duplication_number));
  });

  test('올바른 당첨 번호 배열과 보너스 번호를 전달하면 WinningLotto 인스턴스가 생성된다', () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], '7');
    expect(winningLotto).toBeInstanceOf(WinningLotto);
    expect(winningLotto.getWinningNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    expect(winningLotto.getBonusNumber()).toBe(7);
  });
});
