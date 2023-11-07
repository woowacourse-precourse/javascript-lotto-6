/* eslint-disable */
import WinningLotto from '../src/model/WinningLotto.js';
import { ERRORMESSAGE } from '../src/constants/constants.js';


describe('WinningLotto 클래스', () => {
	const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6]);

  test('유효하지 않은 숫자로 보너스 번호가 주어지면 예외가 발생', () => {
    expect(() => {
      winningLotto.setBonusNumber(NaN);
    }).toThrow(ERRORMESSAGE.bonusType);
  });

  test('1 미만의 보너스 번호가 주어지면 예외가 발생.', () => {
    expect(() => {
      winningLotto.setBonusNumber(0);
    }).toThrow(ERRORMESSAGE.bonusInput);
  });

  test('45를 초과하는 보너스 번호가 주어지면 예외가 발생.', () => {
    expect(() => {
      winningLotto.setBonusNumber(46);
    }).toThrow(ERRORMESSAGE.bonusInput);
  });

  test('로또 번호와 중복된 보너스 번호가 주어지면 예외가 발생.', () => {
    expect(() => {
      winningLotto.setBonusNumber(1);
    }).toThrow(ERRORMESSAGE.bonusDuplicate);
  });
});
