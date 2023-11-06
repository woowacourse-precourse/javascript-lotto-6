/* eslint-disable max-lines-per-function */
import {
  isDivisibleByUnit,
  isLengthEqualTo,
  containUniqueNumbers,
  isCommaSeparated,
  isElementInArray,
  isNumeric,
  isInRange,
} from '../../src/common/validator.js';

describe('구입 금액 단위 테스트', () => {
  test('1000 단위로 떨어지지 않으면 예외가 발생한다.', () => {
    const validMoney = [1000, 220000, 14050000];
    const invalidMoney = [1, 7007, 2500];

    validMoney.forEach((money) => {
      expect(isDivisibleByUnit(money, 1000)).toBe(true);
    });

    invalidMoney.forEach((money) => {
      expect(isDivisibleByUnit(money, 1000)).toBe(false);
    });
  });
});

describe('당첨 번호 테스트', () => {
  test('당첨 번호가 6개가 아니라면 예외가 발생한다.', () => {
    const validLengthWinningNumber = '1,12,33,4,25,45';
    const invalidLengthWinningNumber = '1,2,3,4,5';

    expect(isLengthEqualTo(validLengthWinningNumber, 6)).toBe(true);
    expect(isLengthEqualTo(invalidLengthWinningNumber, 6)).toBe(false);
  });

  test('당첨 번호 중 중복이 있다면 예외가 발생한다.', () => {
    const uniqueWinningNumber = '1,12,33,4,25,45';
    const duplicateWinningNumber = '1,2,3,4,4,6';
  
    expect(containUniqueNumbers(uniqueWinningNumber)).toBe(true);
    expect(containUniqueNumbers(duplicateWinningNumber)).toBe(false);
  });

  test('당첨 번호가 쉼표로 구분되지 않으면 예외가 발생한다.', () => {
    const validFormatWinningNumber = '1,2,3,4,5,6';
    const invalidFormatWinningNumber = '123456';
  
    expect(isCommaSeparated(validFormatWinningNumber, 6)).toBe(true);
    expect(isCommaSeparated(invalidFormatWinningNumber, 6)).toBe(false);
  });

  test('보너스 번호와 당첨 번호 간의 중복이 있다면 예외가 발생한다.', () => {
    const winningNumber = '1,2,3,4,5,6';
    const uniqueBonusNumber = '7';
    const duplicateBonusNumber = '6';

    expect(isElementInArray(winningNumber.split(','), uniqueBonusNumber)).toBe(true);
    expect(isElementInArray(winningNumber.split(','), duplicateBonusNumber)).toBe(false);
  });
});

describe('유효 번호 테스트', () => {
  test('양의 정수가 아니면 예외가 발생한다.', () => {
    const validNumber = ['1', '45', '46'];
    const invalidNumber = ['-1', ' ', '!@#$%^&*', 'aa', '03', '0.4'];

    validNumber.forEach((numbers) => {
      expect(isNumeric(numbers)).toBe(true);
    });

    invalidNumber.forEach((numbers) => {
      expect(isNumeric(numbers)).toBe(false);
    });
  });

  test('1 이상 45 이하의 수가 아니라면 예외가 발생한다.', () => {
    const validRangeNumber = ['1', '20', '45'];
    const invalidRangeNumber = ['0', '46', '-5'];

    validRangeNumber.forEach((numbers) => {
      expect(isInRange(numbers, 1, 45)).toBe(true);
    });q

    invalidRangeNumber.forEach((numbers) => {
      expect(isInRange(numbers, 1, 45)).toBe(false);
    });
  });
});
