import Lotto from '../src/Lotto.js';
import buyLotto from '../src/lottogame/BuyLotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR] 6개의 당첨번호를 입력해야 합니다.');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR] 중복되는 번호가 존재합니다.');
  });

  test('로또 번호가 1에서 45사이의 수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([100, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR] 로또 번호의 숫자 범위는 1에서 45까지의 수입니다.');
  });

  test('로또 번호가 유효하지 않은 숫자 형식일때 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['1a', '-', 3, 4, 5, 5]);
    }).toThrow('[ERROR] 유효하지 않은 숫자 형식입니다.');
  });

  test('로또 구입 금액이 1,000원 단위가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      const payMoney = 8100;
      buyLotto(payMoney);
    }).toThrow('[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.');
  });

  test('보너스 번호가 당첨 번호와 중복되는 경우 예외가 발생한다.', () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.checkBonusNumber(1);
    }).toThrow('[ERROR] 보너스 번호가 당첨 번호와 중복됩니다.');
  });

  test('보너스 번호가 1에서 45사이의 숫자가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.checkBonusNumber(46);
    }).toThrow('[ERROR] 보너스 번호의 숫자 범위는 1에서 45까지의 수입니다.');
  });
});
