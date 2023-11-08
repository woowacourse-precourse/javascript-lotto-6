import SetGame from '../src/domain/SetGame.js';
import {
  ERROR_MESSAGES,
  LOTTO_RULE,
  WINNIG_PROFITS,
} from '../src/Constants.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('SetGame 클래스', () => {
  describe('생성자', () => {
    test('새로운 SetGame 인스턴스 생성', () => {
      const setGame = new SetGame(1000);
      expect(setGame).toBeInstanceOf(SetGame);
    });
    test('구매 금액이 양의 정수가 아니면 예외 발생', () => {
      expect(() => new SetGame('1000원')).toThrow(
        ERROR_MESSAGES.LOTTO.NO_POSITIVE,
      );
    });
    test('구매 금액이 로또 가격에 나누어 떨어지지 않는다면 예외 발생', () => {
      expect(() => new SetGame(3500)).toThrow(ERROR_MESSAGES.BUY.BUY_UNIT);
    });
  });

  describe('#issueLotto 메소드', () => {
    test('구매 금액을 기반으로 로또가 생성되야 함.', () => {
      const setGame = new SetGame(LOTTO_RULE.UNIT * 5);
      expect(setGame.getLottoNumbers().length).toBe(5);
    });
  });

  describe('getWinningStatus 메소드', () => {
    test('당첨 번호가 로또 번호의 길이에 맞지 않을 때 예외 발생', () => {
      // given
      const WINNING_NUMBERS = [1, 2, 3, 4, 5];
      const BONUS_NUMBER = 7;

      // when
      const setGame = new SetGame(LOTTO_RULE.UNIT * 5);

      // then
      expect(() =>
        setGame.getWinningStatus(WINNING_NUMBERS, BONUS_NUMBER),
      ).toThrow(ERROR_MESSAGES.LOTTO.NO_LENGTH);
    });

    test('당첨 번호중 중복되는 번호가 있을 떄 예외 발생', () => {
      // given
      const WINNING_NUMBERS = [1, 2, 3, 4, 5, 5];
      const BONUS_NUMBER = 7;

      // when
      const setGame = new SetGame(LOTTO_RULE.UNIT * 5);

      // then
      expect(() =>
        setGame.getWinningStatus(WINNING_NUMBERS, BONUS_NUMBER),
      ).toThrow(ERROR_MESSAGES.LOTTO.NO_UNIQUE);
    });

    test('당첨 번호가 로또 번호의 범위에 맞지 않을 때 예외 발생', () => {
      // given
      const WINNING_NUMBERS = [1, 2, 3, 4, 5, 46];
      const BONUS_NUMBER = 7;

      // when
      const setGame = new SetGame(LOTTO_RULE.UNIT);

      // then
      expect(() =>
        setGame.getWinningStatus(WINNING_NUMBERS, BONUS_NUMBER),
      ).toThrow(ERROR_MESSAGES.LOTTO.NO_RANGE);
    });

    test('보너스 번호가 양의 정수가 아닐 때 예외 발생', () => {
      // given
      const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
      const BONUS_NUMBER = 'a';

      // when
      const setGame = new SetGame(LOTTO_RULE.UNIT);

      // then
      expect(() =>
        setGame.getWinningStatus(WINNING_NUMBERS, BONUS_NUMBER),
      ).toThrow(ERROR_MESSAGES.LOTTO.NO_POSITIVE);
    });

    test('보너스 번호가 1~45의 숫자가 아닐 때 예외 발생', () => {
      // given
      const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
      const BONUS_NUMBER = 46;

      // when
      const setGame = new SetGame(LOTTO_RULE.UNIT * 5);

      // then
      expect(() =>
        setGame.getWinningStatus(WINNING_NUMBERS, BONUS_NUMBER),
      ).toThrow(ERROR_MESSAGES.LOTTO.NO_RANGE);
    });

    test('당첨 번호 및 보너스 번호를 로또 번호와 대조해보고 당첨 현황을 객체로 반환', () => {
      // given
      mockRandoms([
        [1, 2, 3, 4, 5, 7],
        [1, 2, 3, 5, 30, 20],
      ]);
      const WINNIG_NUMBERS = [1, 2, 3, 4, 5, 6];
      const BONUS_NUMBER = 7;

      // when
      const setGame = new SetGame(LOTTO_RULE.UNIT * 2);
      const winningStatus = setGame.getWinningStatus(
        WINNIG_NUMBERS,
        BONUS_NUMBER,
      );

      // then
      expect(winningStatus).toEqual({ 3: 0, 4: 1, 5: 0, bonus: 1, 6: 0 });
    });
  });

  //   describe('#calculateRateOfReturn 메소드', () => {
  //     test('당첨 현황(winningStatus)과 구매금액(purchaseAmount)으로 수익률을 계산 및 반환.', () => {
  //       // given
  //       const PURCHASE_AMOUNT = LOTTO_RULE.UNIT * 2;
  //       const WINNING_STATUS = { 3: 2, 4: 1, 5: 0, 6: 0 };
  //       const SUM_OF_PROFIT = WINNIG_PROFITS[3] * 2 + WINNIG_PROFITS[4];
  //       const RATE_OF_RETURN = ((SUM_OF_PROFIT / PURCHASE_AMOUNT) * 100).toFixed(
  //         1,
  //       );

  //       // when
  //       mockRandoms([
  //         [1, 2, 3, 4, 5, 6],
  //         [3, 4, 5, 6, 7, 8],
  //       ]);
  //       const setGame = new SetGame(PURCHASE_AMOUNT);

  //       // then
  //       expect(setGame.calculateRateOfReturn(WINNING_STATUS)).toBe(
  //         RATE_OF_RETURN,
  //       );
  //     });
  //   });
});
