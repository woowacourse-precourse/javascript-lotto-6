import InputValidationService from '../src/service/InputValidationService';
import { INPUT_QUERY } from '../src/util/constant';
import { MissionUtils } from '@woowacourse/mission-utils';

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

describe('InputValidationService 클래스 테스트', () => {
  describe('purchaseMoney 예외처리', () => {
    test('purchaseMoney입력하지 않은경우 ', async () => {
      const logSpy = getLogSpy();

      mockQuestions(['', '1000']);
      await InputValidationService.setPurchaseMoney(INPUT_QUERY.PURCHASE_MONEY);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
    });
    test('purchaseMoney 숫자만 입력하지 않은 경우 ', async () => {
      const logSpy = getLogSpy();

      mockQuestions(['-', '21a', '2 1', '1000']);
      await InputValidationService.setPurchaseMoney(INPUT_QUERY.PURCHASE_MONEY);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
    });
    test('purchaseMoney 1000원 단위로 입력하지 않은 경우 ', async () => {
      const logSpy = getLogSpy();

      mockQuestions(['1999', '200', '10002', '1000']);
      await InputValidationService.setPurchaseMoney(INPUT_QUERY.PURCHASE_MONEY);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
    });
  });
  describe('winningNumber 예외처리', () => {
    test('winningNumber 입력하지 않은경우 ', async () => {
      const logSpy = getLogSpy();

      mockQuestions(['', '1,2,3,4,5,6']);
      await InputValidationService.setWinningNumber(INPUT_QUERY.WINNING_NUMBER);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
    });
    test('winningNumber 숫자와 , 만 입력하지 않은 경우 ', async () => {
      const logSpy = getLogSpy();

      mockQuestions(['1, 2,3,4,5,6', '1 2 3 4 5 6', '1,2,3,4,5,6']);
      await InputValidationService.setWinningNumber(INPUT_QUERY.WINNING_NUMBER);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
    });
    test('winningNumber 중복하지않는 6개의 숫자를 입력하지 않은 경우 ', async () => {
      const logSpy = getLogSpy();

      mockQuestions(['1,1,2,3,4,5', '1,2,3,4,5,6,7,8', '1,2,3,4,5,6']);
      await InputValidationService.setWinningNumber(INPUT_QUERY.WINNING_NUMBER);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
    });
    test('winningNumber 1에서45사이의 6개의 숫자를 입력하지 않은 경우 ', async () => {
      const logSpy = getLogSpy();

      mockQuestions(['0,1,2,3,4,5', '100,2,3,4,5,6', '1,2,3,4,5,6']);
      await InputValidationService.setWinningNumber(INPUT_QUERY.WINNING_NUMBER);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
    });
  });
  describe('bonusNumber 예외처리', () => {
    test('bonusNumber 입력하지 않은경우 ', async () => {
      const logSpy = getLogSpy();

      mockQuestions(['', '7']);
      await InputValidationService.setBonusNumber(
        INPUT_QUERY.BONUS_NUMBER,
        '1,2,3,4,5,6'
      );
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
    });
    test('winningNumber와 중복한 bonusNumber 숫자를 입력한 경우 ', async () => {
      const logSpy = getLogSpy();

      mockQuestions(['1', '2', '7']);
      await InputValidationService.setBonusNumber(
        INPUT_QUERY.BONUS_NUMBER,
        '1,2,3,4,5,6'
      );
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
    });
    test('bonusNumber 중복하지않는 6개의 숫자를 입력하지 않은 경우 ', async () => {
      const logSpy = getLogSpy();

      mockQuestions(['1,1,2,3,4,5', '1,2,3,4,5,6,7,8', '7']);
      await InputValidationService.setBonusNumber(
        INPUT_QUERY.BONUS_NUMBER,
        '1,2,3,4,5,6'
      );
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
    });
    test('bonusNumber 1에서45사이의 숫자를 입력하지 않은 경우 ', async () => {
      const logSpy = getLogSpy();

      mockQuestions(['0', '100', '7']);
      await InputValidationService.setBonusNumber(
        INPUT_QUERY.BONUS_NUMBER,
        '1,2,3,4,5,6'
      );
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
    });
  });
});
