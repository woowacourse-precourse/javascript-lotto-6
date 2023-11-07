import Lotto from '../src/Lotto.js';
import BuyLotto from '../src/BuyLotto';
import { ERROR, LOTTO } from '../src/Constant';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR.NOT_LOTTO_LENGTH);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR.DUPLICATE_NUMBER);
  });

  // 아래에 추가 테스트 작성 가능

  test.each(['1,000원', '', ' ', '8장이요', '-1'])(
    '로또 구매 예외 테스트',
    input => {
      expect(() => new BuyLotto(input)).toThrow(ERROR.INPUT_ONLY_NUMBER);
    },
  );

  test('로또 구매 금액이 1,000원 단위가 아닐경우', () => {
    expect(() => new BuyLotto('2500')).toThrow(ERROR.NOT_PRICE_UNIT);
  });

  test('로또 번호에 공백이 있을 경우', () => {
    expect(() => {
      new Lotto([1, 2, 3, '', 5, 6]);
    }).toThrow(ERROR.NOT_LOTTO_RANGE);
  });
});
