import { getLogSpy, mockQuestions, mockRandoms } from '../testUtils';
import Cashier from '../src/Cashier';
import { ERROR_MESSAGE, LOTTO_FORM, MESSAGE } from '../src/constant';
import { getErrorMessage, sortNumbers } from '../src/utils';
import User from '../src/User';

describe('Cashier 클래스 테스트', () => {
  const TEST_ERROR_MESSAGE = getErrorMessage(ERROR_MESSAGE.payment);
  let cashier;

  beforeEach(() => {
    const user = new User();
    cashier = new Cashier(user);
  });

  test('Cashier는 NaN이 아닌 숫자만 파라미터로 받는다. 그렇지 않을 경우 예외가 발생한다.', () => {
    const INPUT_ARRAY = ['1000원', NaN];

    INPUT_ARRAY.forEach((v) =>
      expect(() => cashier.isNumber(v)).toThrow(
        getErrorMessage(ERROR_MESSAGE.isNotNumber),
      ),
    );
  });

  test('손님이 지불한 금액이 1000원 미만이면 예외가 발생한다', () => {
    expect(() => {
      cashier.validatePayment(500);
    }).toThrow(TEST_ERROR_MESSAGE);
  });

  test('손님이 지불한 금액이 1000원 단위로 떨어지지 않으면  예외가 발생한다', () => {
    expect(() => {
      cashier.validatePayment(1500);
    }).toThrow(TEST_ERROR_MESSAGE);
  });

  test('손님이 지불한 금액이 유효하지 않으면,[ERROR]로 시작하는 문구를 출력한 후 유효한 입력값을 다시 받는다.', async () => {
    const INPUT_VALUE_ARRAY = ['1500', '1000원', '1000'];
    const logSpy = getLogSpy();

    mockQuestions(INPUT_VALUE_ARRAY);
    await cashier.getPayment();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(MESSAGE.paymentQuery),
    );
  });

  test('로또를  손님이 지불한 만큼의 수량대로 발행한다.: 발행한 로또 수량 테스트', () => {
    const { price } = LOTTO_FORM;
    const PAYMENT_ARRAY = [price * 1, price * 3, price * 4];
    const NUMBER_OF_TICKETS_ARRAY = [1, 3, 4];
    PAYMENT_ARRAY.forEach((v, i) => {
      const number = cashier.getNumberOfTickets(v);
      expect(number).toEqual(NUMBER_OF_TICKETS_ARRAY[i]);
    });
  });

  test('로또를  손님이 지불한 만큼의 수량대로 발행한다.: 로또 발행', async () => {
    const { price } = LOTTO_FORM;
    const PAYMENT_AMOUNT = price * 3;

    const RANDOM_NUMBERS = [
      [1, 2, 6, 3, 4, 5],
      [7, 11, 12, 8, 9, 10],
      [13, 14, 10, 16, 17, 1],
    ];

    mockRandoms(RANDOM_NUMBERS);

    cashier.getNumberOfTickets(PAYMENT_AMOUNT);
    const lottos = cashier.issueLottos();
    const lottoNumbers = lottos.map((v) => v.getLottoNumbers());

    lottoNumbers.forEach((v, i) => {
      expect(v).toEqual(sortNumbers(RANDOM_NUMBERS[i]));
    });
  });
});
