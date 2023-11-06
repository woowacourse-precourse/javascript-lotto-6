import App from '../src/App';
import BonusBall from '../src/BonusBall';
import Lotto from '../src/Lotto';
import { ERROR_MESSAGE, FIVE_AND_BONUS, FIVE_NO_BONUS } from '../src/constant';
import { sortNumbers } from '../src/utils';
import { getLogSpy, mockQuestions, mockRandoms } from '../testUtils';

describe('App 클래스 테스트', () => {
  test('로또 구매 후 구매 금액 만큼 로또 발행', async () => {
    const app = new App();
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
    const app = new App();

    mockQuestions([WINNING_NUMBERS, BONUS_NUMBER]);

    const { winningLotto, bonusBall } = await app.drawWinningLottoAndBonus();

    expect(winningLotto.getLottoNumbers().join(',')).toBe(
      sortNumbers(WINNING_NUMBERS.split(',')).join(','),
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
      { rank: 'three', number: 1 },
      { rank: 'four', number: 0 },
      { rank: FIVE_NO_BONUS, number: 0 },
      { rank: FIVE_AND_BONUS, number: 1 },
      { rank: 'six', number: 0 },
    ];
    const EXPECTED_RATE_OF_RETURN = 1000166.67;
    const app = new App();

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

  test('당첨 통계 출력', () => {
    const WINNING_RESULT = [
      { rank: 'three', number: 1 },
      { rank: 'four', number: 0 },
      { rank: 'fiveNoBonus', number: 0 },
      { rank: 'fiveAndBonus', number: 1 },
      { rank: 'six', number: 0 },
    ];
    const RATE_OF_RETURN = 50.85;
    const logs = [
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 0개',
      `총 수익률은 ${RATE_OF_RETURN}%입니다.`,
    ];

    const logSpy = getLogSpy();

    const app = new App();
    app.printResult(WINNING_RESULT, RATE_OF_RETURN);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
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

    const app = new App();
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
