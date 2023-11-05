import { MissionUtils } from '@woowacourse/mission-utils';
import Cashier from '../src/Cashier';
import { ERROR_MESSAGE, LOTTO_FORM } from '../src/constant';
import { getErrorMessage } from '../src/uttils';

describe('Cashier 클래스 테스트', () => {
  const errorMessage = getErrorMessage(ERROR_MESSAGE.payment);

  test('Cashier는 NaN이 아닌 숫자만 파라미터로 받는다. 그렇지 않을 경우 예외가 발생한다.', () => {
    const wrongParameters = ['1000', '1000원', NaN];
    wrongParameters.forEach((v) =>
      expect(() => new Cashier(v)).toThrow(
        getErrorMessage(ERROR_MESSAGE.isNotNumber),
      ),
    );
  });

  test('손님이 지불한 금액이 1000원 미만이면 예외가 발생한다', () => {
    expect(() => {
      new Cashier(500);
    }).toThrow(errorMessage);
  });

  test('손님이 지불한 금액이 1000원 단위로 떨어지지 않으면  예외가 발생한다', () => {
    expect(() => {
      new Cashier(1500);
    }).toThrow(errorMessage);
  });

  test('로또를  손님이 지불한 만큼의 수량대로 발행한다.: 발행한 로또 수량 테스트', () => {
    const { price } = LOTTO_FORM;
    const paymentArray = [price * 1, price * 3, price * 4];
    const tickets = [1, 3, 4];

    paymentArray.forEach((v, i) => {
      const cashier = new Cashier(v);
      const number = cashier.getNumberOfTickets(v);
      expect(number).toEqual(tickets[i]);
    });
  });

  test('로또를  손님이 지불한 만큼의 수량대로 발행한다.: 로또 발행', () => {
    const { price } = LOTTO_FORM;
    const payment = price * 3;

    const RANDOM_NUMBERS = [
      [1, 2, 6, 3, 4, 5],
      [7, 11, 12, 8, 9, 10],
      [13, 14, 10, 16, 17, 1],
    ];

    const mockRandoms = (numbers) => {
      MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
      numbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
      }, MissionUtils.Random.pickUniqueNumbersInRange);
    };

    mockRandoms(RANDOM_NUMBERS);

    const cashier = new Cashier(payment);
    const lottos = cashier.issueLottos();
    const lottoNumbers = lottos.map((v) => v.getLottoNumbers());

    lottoNumbers.forEach((v, i) => {
      expect(v.join(',')).toBe(RANDOM_NUMBERS[i].sort().join(','));
    });
  });
});
