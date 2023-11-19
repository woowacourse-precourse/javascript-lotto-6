import { getLogSpy, mockQuestions, mockRandoms } from '../testUtils/index.js';
import { Payment } from '../src/models/index.js';
import { ERROR_MESSAGE, LOTTO_FORM } from '../src/constants/index.js';
import { sortNumbers } from '../src/utils/index.js';

describe('Payment 클래스 테스트', () => {
  const TEST_ERROR_MESSAGE = ERROR_MESSAGE.payment;

  test('로또 구매 금액은 NaN이 아닌 숫자여야 한다. 그렇지 않을 경우 예외가 발생한다.', () => {
    const INPUT_ARRAY = ['1000원', NaN];

    INPUT_ARRAY.forEach((v) =>
      expect(() => new Payment(v)).toThrow(ERROR_MESSAGE.isNotNumber),
    );
  });

  test('로또 구매 금액이 1000원 미만이면 예외가 발생한다', () => {
    expect(() => {
      new Payment(500);
    }).toThrow(TEST_ERROR_MESSAGE);
  });

  test(' 로또 구매 금액이 1000원 단위로 떨어지지 않으면  예외가 발생한다', () => {
    expect(() => {
      new Payment(1500);
    }).toThrow(TEST_ERROR_MESSAGE);
  });
});
