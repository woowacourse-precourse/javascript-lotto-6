import DrawingMachine from '../src/DrawingMachine';
import { ERROR_MESSAGE, MESSAGE } from '../src/constant';
import { DELIMITER } from '../src/constant/Rule';
import { getErrorMessage, getRandomNumbers } from '../src/utils';
import { getLogSpy, mockQuestions } from '../testUtils';

describe('DrawingMachine 테스트', () => {
  describe('당첨 번호 입력값에 대한 테스트', () => {
    let drawingMachine;

    beforeEach(() => {
      drawingMachine = new DrawingMachine();
    });

    test('잘못된 당첨 번호 테스트1: 로또 번호의 범위를 벗어났거나 숫자가 아닌 입력값이 있을때 예외 발생', () => {
      const INPUT_VALUE_ARRAY = [
        '1,2,3,0,5,6',
        '40,41,42,43,44,50',
        '1,1,2,3,4,5',
        '1,2,3,4,5,NaN',
        '하나,1,3,4,6,7',
      ];

      INPUT_VALUE_ARRAY.forEach(async (v) => {
        mockQuestions([v]);
        const numbers = await drawingMachine.getWinningNumbers();
        expect(() => drawingMachine.setWinningLotto(numbers)).toThrow(
          ERROR_MESSAGE.header,
        );
      });
    });

    test(`잘못된 당첨 번호 테스트2 : ${DELIMITER}로 숫자를 구분하지 않았을 시 예외 발생`, async () => {
      const INPUT_VALUE = '123456';
      mockQuestions([INPUT_VALUE]);
      await expect(drawingMachine.getWinningNumbers()).rejects.toThrow(
        getErrorMessage(ERROR_MESSAGE.noDelimiter),
      );
    });

    test('잘못된 당첨 번호 입력 시, [ERROR]로 시작하는 오류를 출력하고 다시 당첨 번호 입력값을 받는다.', async () => {
      const INPUT_VALUE_ARRAY = [
        '1,2,3,0,5,6',
        '123456',
        '1,1,2,3,4,5',
        '1,2,3,4,5,NaN',
        '1,2,3,4,5,6',
      ];
      const logSpy = getLogSpy();

      mockQuestions(INPUT_VALUE_ARRAY);

      await drawingMachine.drawWinningLotto();

      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));

      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining(MESSAGE.winningNumbersQuery),
      );
    });

    test('유효한 당첨 번호 입력 시, 당첨 번호를 가진 로또 생성', async () => {
      const INPUT_NUMBERS = '1,2,3,4,5,6';
      const LOTTO_NUMBERS = INPUT_NUMBERS.split(',').map((v) => Number(v));

      mockQuestions([INPUT_NUMBERS]);

      const winningNumbers = await drawingMachine.getWinningNumbers();
      drawingMachine.setWinningLotto(LOTTO_NUMBERS);
      const winningLotto = drawingMachine.getWinningLottoAndBonusBall().lotto;

      expect(winningNumbers.join(',')).toBe(INPUT_NUMBERS);
      expect(winningLotto.getLottoNumbers().join(',')).toEqual(INPUT_NUMBERS);
    });
  });

  describe('보너스 번호에 대한 테스트', () => {
    let drawingMachine;
    beforeEach(() => {
      drawingMachine = new DrawingMachine();
    });

    test('잘못된 보너스 번호 입력 테스트1: 보너스 번호 입력 범위를 벗어났거나 숫자가 아닌 입력값이 있을때 예외 발생', () => {
      const TEST_ITEMS = ['이십', 'seven', '50'];
      TEST_ITEMS.forEach((v) => {
        expect(() => drawingMachine.setBonusBall(v)).toThrow(
          getErrorMessage(ERROR_MESSAGE.isNotNumber),
        );
      });
    });

    test('잘못된 보너스 번호 입력 테스트2: 당천 번호와 중복되는 보너스 번호 입력 시 예외 발생', () => {
      const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
      const TEST_ITEMS = [1, 2, 5];

      TEST_ITEMS.forEach((v) => {
        drawingMachine.setWinningLotto(WINNING_NUMBERS);
        expect(() => drawingMachine.setBonusBall(v)).toThrow(
          getErrorMessage(ERROR_MESSAGE.duplicateBonusBall),
        );
      });
    });

    test('잘못된 보너스 번호를 입력하면, [ERROR]로 시작하는 문구를 출력한 후 사용자에게 다시 보너스 번호를 입력받는다.', async () => {
      const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
      const INPUT_VALUE_ARRAY = ['1', '2', 'one', '7'];

      const logSpy = getLogSpy();

      mockQuestions(INPUT_VALUE_ARRAY);

      drawingMachine.setWinningLotto(WINNING_NUMBERS);

      await drawingMachine.drawBonusBall();

      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining(ERROR_MESSAGE.header),
      );

      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining(MESSAGE.bonusBallNumberQuery),
      );
    });

    test('유효한 보너스 번호 입력시, 보너스 볼 생성', async () => {
      const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
      const bonusNumber = getRandomNumbers({ min: 7, max: 45 }, 1)[0];
      mockQuestions([bonusNumber.toString()]);

      drawingMachine.setWinningLotto(WINNING_NUMBERS);
      await drawingMachine.drawBonusBall();

      const { bonusBall } = drawingMachine.getWinningLottoAndBonusBall();
      expect(bonusBall.getNumber()).toEqual(bonusNumber);
    });
  });
});
