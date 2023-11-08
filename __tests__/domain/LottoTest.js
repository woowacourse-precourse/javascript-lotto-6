import ERROR from '../../src/constant/Error.js';
import LOTTO from '../../src/constant/Lotto.js';
import Lotto from '../../src/domain/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 위 까진 기존 코드

  // LottoNumber에서 체크되는 사항이지만 이중 검사
  test('로또 번호에 nan이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 'pakxe', 3, 4, 5, 5]);
    }).toThrow(ERROR.isNan);
  });

  test(`로또 번호가 ${LOTTO.minLottoNum} ~ ${LOTTO.maxLottoNum} 사이가 아니면 예외가 발생한다.`, () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR.range);
  });

  test('보너스 번호가 중복이면 예외가 발생한다.', () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.createBonusNumber(6);
    }).toThrow(ERROR.bonusNumberDup);
  });
});
