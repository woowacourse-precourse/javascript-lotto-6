import { getLogSpy, mockQuestions, mockRandoms } from '../testUtils/index.js';
import { Cashier } from '../src/controllers/index.js';
import { ERROR_MESSAGE, LOTTO_FORM } from '../src/constants/index.js';
import { sortNumbers } from '../src/utils/index.js';

describe('Cashier 클래스 테스트', () => {
  let cashier;

  beforeEach(() => {
    cashier = new Cashier();
  });

  test('손님이 지불한 금액이 유효하지 않으면,[ERROR]로 시작하는 문구를 출력한 후 유효한 입력값을 다시 받는다.', async () => {
    const INPUT_VALUE_ARRAY = ['1500', '1000원', '1000'];
    const logSpy = getLogSpy();

    mockQuestions(INPUT_VALUE_ARRAY);
    await cashier.getPayment();

    expect(logSpy).toHaveBeenNthCalledWith(
      1,
      expect.stringContaining(ERROR_MESSAGE.payment),
    );

    expect(logSpy).toHaveBeenNthCalledWith(
      2,
      expect.stringContaining(ERROR_MESSAGE.isNotNumber),
    );
  });
  test('로또를  손님이 지불한 만큼의 수량대로 발행한다.', async () => {
    const { price } = LOTTO_FORM;
    const NUMBER_OF_LOTTOS = 3;
    const PAYMENT_AMOUNT = price * NUMBER_OF_LOTTOS;

    const RANDOM_NUMBERS = [
      [1, 2, 6, 3, 4, 5],
      [7, 11, 12, 8, 9, 10],
      [13, 14, 10, 16, 17, 1],
    ];

    mockRandoms(RANDOM_NUMBERS);

    cashier.getNumberOfTickets(PAYMENT_AMOUNT);
    const lottos = cashier.issueLottos();
    const lottoNumbers = lottos.map((v) => v.getLottoNumbers());

    expect(lottos.length).toEqual(NUMBER_OF_LOTTOS);

    lottoNumbers.forEach((v, i) => {
      expect(v.join(',')).toBe(sortNumbers(RANDOM_NUMBERS[i]).join(','));
    });
  });
});
