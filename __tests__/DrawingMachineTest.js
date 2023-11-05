import DrawingMachine from '../src/DrawingMachine';
import { ERROR_MESSAGE } from '../src/constant';
import { getErrorMessage, getRandomNumbers } from '../src/utils';
import { mockQuestions } from '../testUtils';

describe('DrawingMachine 테스트', () => {
  test('당첨 번호 입력값 유효성 테스트1: 잘못된 당첨 번호 입력 시 예외 발생', () => {
    const wrongItems = [
      '1,2,3,0,5,6',
      '40,41,42,43,44,50',
      '1,1,2,3,4,5',
      '1,2,3,4,5,NaN',
      '하나,1,3,4,6,7',
    ];

    wrongItems.forEach(async (v) => {
      mockQuestions([v]);
      const drawingMachine = new DrawingMachine();

      await expect(() => drawingMachine.drawWinningLotto()).rejects.toThrow(
        ERROR_MESSAGE.header,
      );
    });
  });
  test('당첨 번호 입력값 유효성 테스트2 : ","로 숫자를 구분하지 않았을 시 예외 발생', async () => {
    const wrongItems = '123456';
    mockQuestions([wrongItems]);
    const drawingMachine = new DrawingMachine();
    await expect(drawingMachine.drawWinningLotto()).rejects.toThrow(
      getErrorMessage(ERROR_MESSAGE.noReset),
    );
  });
  test('당첨 번호 입력 받기 및 저장 테스트 : 유효한 당첨 번호', async () => {
    const numbers = '1,2,3,4,5,6';
    const lottoNumbers = numbers.split(',').map((v) => Number(v));

    mockQuestions([numbers]);

    const drawingMachine = new DrawingMachine();
    const winningNumbers = await drawingMachine.getWinningNumbers();
    drawingMachine.setWinningLotto(lottoNumbers);
    const winningLotto = drawingMachine.getWinningLottoAndBonusBall().lotto;

    expect(winningNumbers.join(',')).toBe(numbers);
    expect(winningLotto.getLottoNumbers().join(',')).toEqual(numbers);
  });

  test('보너스 번호 입렵 받기 및 저장 테스트1: 잘못된 보너스 번호 입력 시 예외 발생', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const wrongItems = ['1', '이십', 'seven'];
    const messageArray = [
      ERROR_MESSAGE.duplicateBonusBall,
      ERROR_MESSAGE.isNotNumber,
      ERROR_MESSAGE.isNotNumber,
    ];

    wrongItems.forEach(async (v, i) => {
      mockQuestions([v]);
      const drawingMachine = new DrawingMachine();
      drawingMachine.setWinningLotto(winningNumbers);

      await expect(drawingMachine.drawBonusBall()).rejects.toThrow(
        getErrorMessage(messageArray[i]),
      );
    });
  });

  test('보너스 번호 입렵 받기 및 저장 테스트2: 유효한 보너스 번호', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const correctNumbers = getRandomNumbers({ min: 7, max: 45 }, 4);

    correctNumbers.forEach(async (v) => {
      mockQuestions([v.toString()]);

      const drawingMachine = new DrawingMachine();
      drawingMachine.setWinningLotto(winningNumbers);

      await drawingMachine.drawBonusBall();

      const { bonusBall } = drawingMachine.getWinningLottoAndBonusBall();

      expect(bonusBall.getNumber()).toEqual(v);
    });
  });
});
