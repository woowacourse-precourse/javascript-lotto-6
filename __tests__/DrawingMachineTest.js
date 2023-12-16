import { MissionUtils } from '@woowacourse/mission-utils';
import { DrawingMachine } from '../src/controllers/index.js';
import { ERROR_MESSAGE } from '../src/constants/index.js';
import { getRandomNumbers } from '../src/utils/index.js';
import { getLogSpy, mockQuestions } from '../testUtils/index.js';

describe('DrawingMachine 테스트', () => {
  describe('당첨 번호에 대한 테스트', () => {
    let drawingMachine;

    beforeEach(() => {
      drawingMachine = new DrawingMachine();
    });

    test('잘못된 당첨 번호 입력 시, [ERROR]로 시작하는 오류를 출력하고 유효한 당첨 번호가 입력 될 때 까지 다시 당첨 번호 입력값을 받는다.', async () => {
      const WRONG_NUMBERS = [
        '1,2,3,0,5,6',
        '1,2,3,4,5,50',
        '123456',
        '1,2,3,4,5',
        '1,2,,4,5',
        '1,1,2,3,4,5',
      ];
      const INPUT_VALUE_ARRAY = [...WRONG_NUMBERS, '1,2,3,4,5,6'];
      const logSpy = getLogSpy();

      mockQuestions(INPUT_VALUE_ARRAY);

      await drawingMachine.drawWinningLotto();

      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining(ERROR_MESSAGE.header),
      );
      expect(logSpy).toHaveBeenLastCalledWith(
        expect.stringContaining(ERROR_MESSAGE.duplicateNumber),
      );
    });

    test('유효한 당첨 번호 입력 시, 당첨 번호를 가진 로또 생성', async () => {
      const INPUT_NUMBERS = '1,2,3,4,5,6';
      mockQuestions([INPUT_NUMBERS]);

      await drawingMachine.drawWinningLotto();

      const winningLotto = drawingMachine.getWinningLottoAndBonusBall().lotto;

      expect(winningLotto.getLottoNumbers()).toEqual(
        INPUT_NUMBERS.split(',').map((v) => Number(v)),
      );
    });
  });

  describe('보너스 번호에 대한 테스트', () => {
    let drawingMachine;
    beforeEach(() => {
      drawingMachine = new DrawingMachine();
    });

    test('잘못된 보너스 번호를 입력하면, [ERROR]로 시작하는 문구를 출력한 후 유효한 보너스 번호를 받을 때까지 사용자에게 다시 보너스 번호를 입력받는다.', async () => {
      const WINNING_NUMBERS = '1, 2, 3, 4, 5, 6';
      const WRONG_NUMBERS = ['이십', 'seven', '50', '6'];
      const INPUT_VALUE_ARRAY = [WINNING_NUMBERS, ...WRONG_NUMBERS, '7'];

      const logSpy = getLogSpy();

      mockQuestions(INPUT_VALUE_ARRAY);

      await drawingMachine.drawWinningLotto();
      await drawingMachine.drawBonusBall();

      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining(ERROR_MESSAGE.header),
      );
      expect(logSpy).toHaveBeenLastCalledWith(
        expect.stringContaining(ERROR_MESSAGE.duplicateBonusBall),
      );
    });

    test('유효한 보너스 번호 입력시, 보너스 볼 생성', async () => {
      const WINNING_NUMBERS = '1, 2, 3, 4, 5, 6';
      const bonusNumber = getRandomNumbers({ min: 7, max: 45 }, 1)[0];

      mockQuestions([WINNING_NUMBERS, bonusNumber.toString()]);

      await drawingMachine.drawWinningLotto();
      await drawingMachine.drawBonusBall();

      const { bonusBall } = drawingMachine.getWinningLottoAndBonusBall();

      expect(bonusBall.getNumber()).toEqual(bonusNumber);
    });
  });
});
