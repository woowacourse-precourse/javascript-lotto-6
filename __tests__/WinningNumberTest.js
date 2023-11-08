import { MissionUtils } from '@woowacourse/mission-utils';
import ERROR_MESSAGE from '../src/constants/ErrorMessage';
import Convert from '../src/utils/Convert';
import Validate from '../src/utils/Validate';
import LottoController from '../src/controllers/LottoController';

const mockQuestions = inputs => {
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

describe('당첨 번호 입력 테스트', () => {
  test('당첨 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      const numbers = Convert.convertToList('1,s2,3,4,5,6');
      numbers.forEach(number => Validate.isNumber(number));
    }).toThrow(ERROR_MESSAGE.INVALID_NUMBER);
  });

  test('당첨 번호가 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      const numbers = Convert.convertToList('1,2.7,3,4,5,6');
      numbers.forEach(number => Validate.isInteger(number));
    }).toThrow(ERROR_MESSAGE.INVALID_INTEGER);
  });

  test('당첨 번호가 음수면 예외가 발생한다.', () => {
    expect(() => {
      const numbers = Convert.convertToList('1,2,3,-4,5,6');
      numbers.forEach(number => Validate.isPositive(number));
    }).toThrow(ERROR_MESSAGE.INVALID_POSITIVE);
  });

  test('당첨 번호가 1부터 45 사이의 값이 아니면 예외가 발생한다.', () => {
    expect(() => {
      const numbers = Convert.convertToList('1,2,3,4,5,66');
      numbers.map(number => Validate.isNumberInRange(number));
    }).toThrow(ERROR_MESSAGE.INVALID_RANGE);
  });

  test('당첨 번호 개수가 6개가 아니면 예외가 발생한다.', () => {
    expect(() => {
      const numbers = Convert.convertToNumber('1,2,3,4,5');
      Validate.isWinningNumbersLength(numbers);
    }).toThrow(ERROR_MESSAGE.INVALID_NUMBER_OF_WINNING_NUMBERS);
  });

  test('당첨 번호 내에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      const numbers = Convert.convertToList('1,1,2,3,4,5');
      Validate.isDuplicateWinningNumbers(numbers);
    }).toThrow(ERROR_MESSAGE.INVALID_DUPLICATE_WINNING_NUMBERS);
  });

  test('예외가 발생하면 정상적인 값을 받을 때까지 재입력을 요구한다.', async () => {
    // given
    const logSpy = getLogSpy();
    const inputs = [
      '1,s2,3,4,5,6',
      '1,2.7,3,4,5,6',
      '1,2,3,-4,5,6',
      '1,2,3,4,5,66',
      '1,2,3,4,5',
      '1,1,2,3,4,5',
      '1,2,3,4,5,6',
    ];
    const outputs = [
      ERROR_MESSAGE.INVALID_NUMBER,
      ERROR_MESSAGE.INVALID_INTEGER,
      ERROR_MESSAGE.INVALID_POSITIVE,
      ERROR_MESSAGE.INVALID_RANGE,
      ERROR_MESSAGE.INVALID_NUMBER_OF_WINNING_NUMBERS,
      ERROR_MESSAGE.INVALID_DUPLICATE_WINNING_NUMBERS,
    ];

    mockQuestions(inputs);

    // when
    const lottoGame = new LottoController();
    await lottoGame.getWinningNumbers();

    // then
    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
