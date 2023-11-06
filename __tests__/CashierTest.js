import { getLogSpy, mockQuestions, mockRandoms } from '../testUtils';
import Cashier from '../src/Cashier';
import { ERROR_MESSAGE, LOTTO_FORM, MESSAGE } from '../src/constant';
import { getErrorMessage } from '../src/utils';
import User from '../src/User';

describe('Cashier 클래스 테스트', () => {
  const errorMessage = getErrorMessage(ERROR_MESSAGE.payment);

  test('Cashier는 NaN이 아닌 숫자만 파라미터로 받는다. 그렇지 않을 경우 예외가 발생한다.', () => {
    const wrongParameters = ['1000원', NaN];
    const user = new User();
    const cashier = new Cashier(user);
    wrongParameters.forEach((v) =>
      expect(() => cashier.isNumber(v)).toThrow(
        getErrorMessage(ERROR_MESSAGE.isNotNumber),
      ),
    );
  });

  test('손님이 지불한 금액이 1000원 미만이면 예외가 발생한다', () => {
    const user = new User();
    expect(() => {
      new Cashier(user).validatePayment(500);
    }).toThrow(errorMessage);
  });

  test('손님이 지불한 금액이 1000원 단위로 떨어지지 않으면  예외가 발생한다', () => {
    const user = new User();
    expect(() => {
      new Cashier(user).validatePayment(1500);
    }).toThrow(errorMessage);
  });

  test('손님이 지불한 금액이 유효하지 않으면,[ERROR]로 시작하는 문구를 출력한 후 유효한 입력값을 다시 받는다.', async () => {
    const items = ['1500', '1000원', '1000'];
    const user = new User();
    const cashier = new Cashier(user);
    const logSpy = getLogSpy();

    mockQuestions(items);
    await cashier.getPayment();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(MESSAGE.paymentQuery),
    );
  });

  test('로또를  손님이 지불한 만큼의 수량대로 발행한다.: 발행한 로또 수량 테스트', () => {
    const { price } = LOTTO_FORM;
    const paymentArray = [price * 1, price * 3, price * 4];
    const tickets = [1, 3, 4];
    const user = new User();
    paymentArray.forEach(async (v, i) => {
      const cashier = new Cashier(user);
      const number = cashier.getNumberOfTickets(v);
      expect(number).toEqual(tickets[i]);
    });
  });

  test('로또를  손님이 지불한 만큼의 수량대로 발행한다.: 로또 발행', async () => {
    const { price } = LOTTO_FORM;
    const payment = price * 3;

    const RANDOM_NUMBERS = [
      [1, 2, 6, 3, 4, 5],
      [7, 11, 12, 8, 9, 10],
      [13, 14, 10, 16, 17, 1],
    ];
    const user = new User();

    mockRandoms(RANDOM_NUMBERS);
    const cashier = new Cashier(user);
    cashier.getNumberOfTickets(payment);
    const lottos = cashier.issueLottos();
    const lottoNumbers = lottos.map((v) => v.getLottoNumbers());

    lottoNumbers.forEach((v, i) => {
      expect(v.join(',')).toBe(
        RANDOM_NUMBERS[i].sort((a, b) => a - b).join(','),
      );
    });
  });
});
