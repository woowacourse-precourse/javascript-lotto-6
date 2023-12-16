import App from '../src/App.js';
import { BonusBall } from '../src/models/index.js';
import Lotto from '../src/Lotto';
import { CORRECT_NUMBER, ERROR_MESSAGE } from '../src/constants/index.js';
import { sortNumbers } from '../src/utils/index.js';
import { getLogSpy, mockQuestions, mockRandoms } from '../testUtils/index.js';

describe('App 클래스 테스트', () => {
  let app;
  beforeEach(() => {
    app = new App();
  });

  test('로또 구매 후 구매 금액 만큼 로또 발행', async () => {
    const RANDOM_NUMBERS = [
      [1, 9, 8, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ];
    const MONEY = '2000';
    mockQuestions([MONEY]);
    mockRandoms(RANDOM_NUMBERS);

    const { paymentAmount, userLottos } = await app.buyLottos();
    expect(paymentAmount).toEqual(Number(MONEY));

    userLottos.forEach((v, i) => {
      expect(v.getLottoNumbers().join(',')).toBe(
        sortNumbers(RANDOM_NUMBERS[i]).join(','),
      );
    });
  });

  test('당첨 로또, 보너스 번호 뽑기', async () => {
    const WINNING_NUMBERS = '13,6,25,7,15,5';
    const BONUS_NUMBER = '19';

    mockQuestions([WINNING_NUMBERS, BONUS_NUMBER]);

    const { winningLotto, bonusBall } = await app.drawWinningLottoAndBonus();

    expect(winningLotto.getLottoNumbers()).toEqual(
      sortNumbers(WINNING_NUMBERS.split(',').map((v) => Number(v))),
    );
    expect(bonusBall.getNumber()).toEqual(Number(BONUS_NUMBER));
  });

  test('당첨 여부 확인', () => {
    const WINNING_NUMBERS = [13, 6, 25, 7, 15, 5];
    const BONUS_NUMBER = 19;
    const winningLotto = new Lotto(WINNING_NUMBERS);
    const bonusBall = new BonusBall(BONUS_NUMBER, WINNING_NUMBERS);
    const userLottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([5, 6, 13, 20, 21, 40]),
      new Lotto([5, 6, 13, 7, 25, 19]),
    ];
    const PAYMENT_AMOUNT = 3000;
    const EXPECTED_WINNING_RESULT = [
      { rank: CORRECT_NUMBER.three, number: 1 },
      { rank: CORRECT_NUMBER.four, number: 0 },
      { rank: CORRECT_NUMBER.fiveNoBonus, number: 0 },
      { rank: CORRECT_NUMBER.fiveAndBonus, number: 1 },
      { rank: CORRECT_NUMBER.six, number: 0 },
    ];
    const EXPECTED_RATE_OF_RETURN = 1000166.7;

    const { winningResult, rateOfReturn } = app.checkLottos(
      winningLotto,
      bonusBall,
      userLottos,
      PAYMENT_AMOUNT,
    );

    expect(rateOfReturn).toEqual(EXPECTED_RATE_OF_RETURN);

    winningResult.forEach((v, i) => {
      expect(v.number).toEqual(EXPECTED_WINNING_RESULT[i].number);
    });
  });

  test('입력값이 유효하지 않을 경우, [ERROR]로 시작하는 예외문을 출력하고 다시 입력값을 받는다.', async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS = [1, 2, 3, 4, 5, 6];
    const INPUT_VALUES = [
      '1000원',
      '1000',
      '1,2,3,4,5,60',
      '1,2,3,4,5,6',
      '6',
      '7',
    ];

    mockRandoms([RANDOM_NUMBERS]);
    mockQuestions(INPUT_VALUES);

    await app.play();

    const logs = [
      ERROR_MESSAGE.isNotNumber,
      ERROR_MESSAGE.range,
      ERROR_MESSAGE.duplicateBonusBall,
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
