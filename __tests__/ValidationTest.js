import { Console } from '@woowacourse/mission-utils';
import ERROR from '../src/constants/Error.js';
import {
  readBonusNumber,
  readPurchaseLottos,
  readWinningNumbers,
} from '../src/utils/view.js';

const mockQuestions = inputs => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const errorMessage = message => {
  return `[ERROR] ${message}`;
};

describe('로또 구매 금액(purchaseAmount) 입력 값 Validation 관련 예외 처리', () => {
  test('test1: 입력 값이 비어있을 경우', async () => {
    // given
    const inputs = [''];
    mockQuestions(inputs);

    // when
    const userInput = readPurchaseLottos();

    // then
    await expect(userInput).rejects.toThrow(errorMessage(ERROR.EMPTY_INPUT));
  });

  test.each([[['3abc']], [[' 32000']], [['..10000']]])(
    'test2: 입력 값에 숫자가 아닌 다른 문자를 사용했을 경우',
    async inputs => {
      // given
      mockQuestions(inputs);

      // when
      const inputPurchaseAmount = readPurchaseLottos();

      // then
      await expect(inputPurchaseAmount).rejects.toThrow(
        errorMessage(ERROR.INPUT_PURCHASE_AMOUNT.INVALID_FORMAT),
      );
    },
  );

  test.each([[['1000000']], [['900']], [['0']]])(
    'test3: 입력 금액이 가능 범위를 초과한 경우',
    async inputs => {
      // given
      mockQuestions(inputs);

      // when
      const inputPurchaseAmount = readPurchaseLottos();

      // then
      await expect(inputPurchaseAmount).rejects.toThrow(
        errorMessage(ERROR.INPUT_PURCHASE_AMOUNT.INVALID_PRICE_RANGE),
      );
    },
  );

  test.each([[['11100']], [['1234']]])(
    'test4: 입력 금액이 1,000원 단위가 아닌 경우',
    async inputs => {
      // given
      mockQuestions(inputs);

      // when
      const inputPurchaseAmount = readPurchaseLottos();

      // then
      await expect(inputPurchaseAmount).rejects.toThrow(
        errorMessage(ERROR.INPUT_PURCHASE_AMOUNT.INVALID_PRICE_UNIT),
      );
    },
  );
});

describe('당첨 번호(winningNumbers) 입력 값 Validation 관련 예외 처리', () => {
  test('test1: 입력 값이 비어있을 경우', async () => {
    // given
    const inputs = [''];
    mockQuestions(inputs);

    // when
    const inputWinningNumbers = readWinningNumbers();

    // then
    await expect(inputWinningNumbers).rejects.toThrow(
      errorMessage(ERROR.EMPTY_INPUT),
    );
  });

  test.each([
    [['one,two,three,four,five,six']],
    [['1, 2, 3, 4, 5, 6']],
    [['10,20,..']],
  ])(
    'test2: 입력 값에 숫자와 쉼표가 아닌 다른 문자를 사용했을 경우',
    async inputs => {
      // given
      mockQuestions(inputs);

      // when
      const inputWinningNumbers = readWinningNumbers();

      // then
      await expect(inputWinningNumbers).rejects.toThrow(
        errorMessage(ERROR.INPUT_NUMBERS.INVALID_CHARACTER),
      );
    },
  );

  test.each([[['1,,2,3,4,5,6']], [['1,2,3,4,5,6,']]])(
    'test3: 쉼표가 중복되거나, 값이 쉼표로 끝나는 경우',
    async inputs => {
      // given
      mockQuestions(inputs);

      // when
      const inputWinningNumbers = readWinningNumbers();

      // then
      await expect(inputWinningNumbers).rejects.toThrow(
        errorMessage(ERROR.INPUT_NUMBERS.INVALID_FORMAT),
      );
    },
  );
});

describe('보너스 번호(bonusNumbers) 입력 값 Validation 관련 예외 처리', () => {
  test('test1: 입력 값이 비어있을 경우', async () => {
    // given
    const inputs = [''];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    mockQuestions(inputs);

    // when
    const inputBonusNumber = readBonusNumber(winningNumbers);

    // then
    await expect(inputBonusNumber).rejects.toThrow(
      errorMessage(ERROR.EMPTY_INPUT),
    );
  });

  test.each([[['3abc']], [[' 3']], [['..3']]])(
    'test2: 입력 값에 숫자가 아닌 다른 문자를 사용했을 경우',
    async inputs => {
      // given
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      mockQuestions(inputs);

      // when
      const inputBonusNumber = readBonusNumber(winningNumbers);

      // then
      await expect(inputBonusNumber).rejects.toThrow(
        errorMessage(ERROR.INPUT_BONUS_NUMBER.INVALID_FORMAT),
      );
    },
  );

  test.each([[['50']], [['0']]])(
    'test3: 보너스 번호가 입력 가능 범위를 벗어난 경우',
    async inputs => {
      // given
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      mockQuestions(inputs);

      // when
      const inputBonusNumber = readBonusNumber(winningNumbers);

      // then
      await expect(inputBonusNumber).rejects.toThrow(
        errorMessage(ERROR.INPUT_BONUS_NUMBER.INVALID_FORMAT),
      );
    },
  );

  test.each([[['3']], [['6']]])(
    'test4: 당첨 번호에 보너스 번호가 포함되어있는 경우',
    async inputs => {
      // given
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      mockQuestions(inputs);

      // when
      const inputBonusNumber = readBonusNumber(winningNumbers);

      // then
      await expect(inputBonusNumber).rejects.toThrow(
        errorMessage(ERROR.INPUT_BONUS_NUMBER.INCLUDE_WINNING_NUMBERS),
      );
    },
  );
});
