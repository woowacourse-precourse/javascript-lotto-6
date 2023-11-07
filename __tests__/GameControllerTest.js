import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../src/constants/messages';
import GameController from '../src/controllers/GameController';

const mockQuestions = inputs => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('게임 컨트롤러 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('올바른 구입금액이 입력될때까지 반복해서 입력받는다.', async () => {
    // given
    const logSpy = getLogSpy();

    mockQuestions([1, -1, 0, 1000]);

    // when
    const gameController = new GameController();
    const count = await gameController.getLottoPublishCount();

    // then
    const logs = [
      ERROR_MESSAGE.notDividedPrice,
      ERROR_MESSAGE.negativePrice,
      ERROR_MESSAGE.notDividedPrice,
    ];
    const publishCount = 1;

    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });

    expect(count).toBe(publishCount);
  });

  test('올바른 당첨번호가 입력될때까지 반복해서 입력받는다.', async () => {
    // given
    const logSpy = getLogSpy();

    mockQuestions([
      '1,2,3,4,4,5',
      '0,1,2,3,4,5',
      '1,2,3,4,5,6,7',
      '1,2,3,4,,5',
      '1,2,3,4,5,6',
    ]);

    // when
    const gameController = new GameController();
    await gameController.setWinningLotto();

    // then
    const logs = [
      ERROR_MESSAGE.duplicateNumber,
      ERROR_MESSAGE.invalidNumber,
      ERROR_MESSAGE.notMatchedLength,
      ERROR_MESSAGE.notMatchedLength,
    ];

    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
