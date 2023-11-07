import { MissionUtils } from '@woowacourse/mission-utils';

import getInputAmount from '../src/input/getInputAmount';
import { ERROR_MESSAGES } from '../src/constants/messages';
import getWinningNumbers from '../src/input/getWinningNumbers';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('getInputAmount() 함수 테스트', () => {
  test('1000 ~ 100_000 사이의 정수를 입력하면 정수값을 리턴한다.', async () => {
    // Arrange
    const input = 2000;

    mockQuestions([input]);

    // Act
    const result = await getInputAmount();

    // Assert
    expect(result).toBe(input);
  });

  test('올바르지 않은 값을 입력하면 예외 메시지를 출력하고 올바른 값을 입력할 때까지 반복한다.', async () => {
    // Arrange
    const logSpy = getLogSpy();
    const errorInput = 3600;
    const correctInput = 2000;

    mockQuestions([errorInput, correctInput]);

    // Act
    const result = await getInputAmount();

    // Assert
    const expectedErrorMessage = ERROR_MESSAGES.inputAmount.unit;

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expectedErrorMessage));
    expect(result).toBe(correctInput);
  });
});

describe('getWinningNumbers() 함수 테스트', () => {
  test('1 ~ 45 사이의 정수이면서 중복되지 않은 정수 6자리일 경우 정수 6자리 배열 반환', async () => {
    // Arrange
    const input = '1,2,3,4,5,6';
    const output = [1, 2, 3, 4, 5, 6];

    mockQuestions([input]);

    // Act
    const result = await getWinningNumbers();

    // Assert
    expect(result).toEqual(output);
  });

  test('올바르지 않은 값을 입력하면 예외 메시지를 출력하고 올바른 값을 입력할 때까지 반복한다.', async () => {
    // Arrange
    const logSpy = getLogSpy();
    const errorInput = '1,2,3,4,4,4';
    const correctInput = '1,2,3,4,5,6';

    const output = [1, 2, 3, 4, 5, 6];

    mockQuestions([errorInput, correctInput]);

    // Act
    const result = await getWinningNumbers();

    // Assert
    const expectedErrorMessage = ERROR_MESSAGES.winningNumbersAndBonusNumber.duplicate;

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expectedErrorMessage));
    expect(result).toEqual(output);
  });
});
