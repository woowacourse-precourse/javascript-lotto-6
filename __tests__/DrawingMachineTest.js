import DrawingMachine from '../src/DrawingMachine';
import { ERROR_MESSAGE, MESSAGE } from '../src/constant';
import { DELIMITER } from '../src/constant/Rule';
import { getErrorMessage, getRandomNumbers } from '../src/utils';
import { getLogSpy, mockQuestions } from '../testUtils';

describe('DrawingMachine 테스트', () => {
  test('당첨 번호 입력값 유효성 테스트1: 잘못된 당첨 번호 입력 시 예외 발생', () => {
    const INPUT_VALUE_ARRAY = [
      '1,2,3,0,5,6',
      '40,41,42,43,44,50',
      '1,1,2,3,4,5',
      '1,2,3,4,5,NaN',
      '하나,1,3,4,6,7',
    ];

    INPUT_VALUE_ARRAY.forEach(async (v) => {
      mockQuestions([v]);
      const drawingMachine = new DrawingMachine();
      const numbers = await drawingMachine.getWinningNumbers();
      expect(() => drawingMachine.setWinningLotto(numbers)).toThrow(
        ERROR_MESSAGE.header,
      );
    });
  });
  test(`당첨 번호 입력값 유효성 테스트2 : ${DELIMITER}로 숫자를 구분하지 않았을 시 예외 발생`, async () => {
    const INPUT_VALUE = '123456';
    mockQuestions([INPUT_VALUE]);
    const drawingMachine = new DrawingMachine();
    await expect(drawingMachine.getWinningNumbers()).rejects.toThrow(
      getErrorMessage(ERROR_MESSAGE.noDelimiter),
    );
  });
  test('유효하지 않은 당첨 번호 입력 시, [ERROR]로 시작하는 오류를 출력하고 다시 당첨 번호 입력값을 받는다.', async () => {
    const INPUT_VALUE_ARRAY = [
      '1,2,3,0,5,6',
      '123456',
      '1,1,2,3,4,5',
      '1,2,3,4,5,NaN',
      '1,2,3,4,5,6',
    ];
    const logSpy = getLogSpy();

    mockQuestions(INPUT_VALUE_ARRAY);

    const drawingMachine = new DrawingMachine();
    await drawingMachine.drawWinningLotto();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(MESSAGE.winningNumbersQuery),
    );
  });
  test('당첨 번호 입력 받기 및 저장 테스트 : 유효한 당첨 번호', async () => {
    const INPUT_NUMBERS = '1,2,3,4,5,6';
    const LOTTO_NUMBERS = INPUT_NUMBERS.split(',').map((v) => Number(v));

    mockQuestions([INPUT_NUMBERS]);

    const drawingMachine = new DrawingMachine();
    const winningNumbers = await drawingMachine.getWinningNumbers();
    drawingMachine.setWinningLotto(LOTTO_NUMBERS);
    const winningLotto = drawingMachine.getWinningLottoAndBonusBall().lotto;

    expect(winningNumbers.join(',')).toBe(INPUT_NUMBERS);
    expect(winningLotto.getLottoNumbers().join(',')).toEqual(INPUT_NUMBERS);
  });

  test('보너스 번호 입렵 받기 및 저장 테스트1: 잘못된 보너스 번호 입력 시 예외 발생', () => {
    const TEST_ITEMS = ['이십', 'seven'];
    TEST_ITEMS.forEach(async (v) => {
      const drawingMachine = new DrawingMachine();
      expect(() => drawingMachine.setBonusBall(v)).toThrow(
        getErrorMessage(ERROR_MESSAGE.isNotNumber),
      );
    });
  });

  test('보너스 번호 입렵 받기 및 저장 테스트2: 당천 번호와 중복되는 보너스 번호 입력 시 예외 발생', () => {
    const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
    const TEST_ITEMS = [1, 2, 5];

    TEST_ITEMS.forEach((v) => {
      const drawingMachine = new DrawingMachine();
      drawingMachine.setWinningLotto(WINNING_NUMBERS);
      expect(() => drawingMachine.setBonusBall(v)).toThrow(
        getErrorMessage(ERROR_MESSAGE.duplicateBonusBall),
      );
    });
  });

  test('올바르지 않은 보너스 번호를 입력하면, [ERROR]로 시작하는 문구를 출력한 후 사용자에게 다시 보너스 번호를 입력받는다.', async () => {
    const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
    const INPUT_VALUE_ARRAY = ['1', '2', 'one', '7'];

    const logSpy = getLogSpy();

    mockQuestions(INPUT_VALUE_ARRAY);

    const drawingMachine = new DrawingMachine();
    drawingMachine.setWinningLotto(WINNING_NUMBERS);

    await drawingMachine.drawBonusBall();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGE.header),
    );

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(MESSAGE.bonusBallNumberQuery),
    );
  });

  test('보너스 번호 입렵 받기 및 저장 테스트4: 유효한 보너스 번호', () => {
    const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
    const BONUS_NUMBERS = getRandomNumbers({ min: 7, max: 45 }, 4);

    BONUS_NUMBERS.forEach(async (v) => {
      mockQuestions([v.toString()]);

      const drawingMachine = new DrawingMachine();
      drawingMachine.setWinningLotto(WINNING_NUMBERS);

      await drawingMachine.drawBonusBall();

      const { bonusBall } = drawingMachine.getWinningLottoAndBonusBall();

      expect(bonusBall.getNumber()).toEqual(v);
    });
  });
});
