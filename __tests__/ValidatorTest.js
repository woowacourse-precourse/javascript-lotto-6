/* eslint-disable */
import Validator from '../src/utils/Validator';
import Exception from '../src/utils/Exception';

describe('기본 예외 검증 테스트', () => {
  let input;
  test('isNumber()', () => {
    // given
    input = 'a';
    // then
    expect(() => Exception.isNumber(input)).toThrow('[ERROR]');

    // given
    input = 1000;
    // then
    expect(() => Exception.isNumber(input)).not.toThrow();
  });

  test('isValidUnit()', () => {
    // given
    input = 1001;
    // then
    expect(() => Exception.isValidUnit(input)).toThrow('[ERROR]');

    // given
    input = 1000;
    // then
    expect(() => Exception.isValidUnit(input)).not.toThrow();
  });

  test('isDuplicate()', () => {
    // given
    input = [1, 2, 3, 4, 5, 5];
    // then
    expect(() => Exception.isDuplicate(input)).toThrow('[ERROR]');

    // given
    input = [1, 2, 3, 4, 5, 6];
    // then
    expect(() => Exception.isDuplicate(input)).not.toThrow();
  });

  test('isValidDigit()', () => {
    // given
    input = [1, 2, 3, 4];
    // then
    expect(() => Exception.isValidDigit(input)).toThrow('[ERROR]');

    // given
    input = [1, 2, 3, 4, 5, 6];
    // then
    expect(() => Exception.isValidDigit(input)).not.toThrow();
  });

  test('isValidRange()', () => {
    // given
    input = [0, 46];
    // then
    input.forEach((value) => {
      expect(() => Exception.isValidRange(value)).toThrow('[ERROR]');
    });

    // given
    input = [1, 45];
    // then
    input.forEach((value) => {
      expect(() => Exception.isValidRange(value)).not.toThrow();
    });
  });

  test('isAscending()', () => {
    // given
    input = [1, 2, 3, 4, 6, 5];
    // then
    expect(() => Exception.isAscending(input)).toThrow('[ERROR]');

    // given
    input = [1, 2, 3, 4, 5, 6];
    // then
    expect(() => Exception.isAscending(input)).not.toThrow();
  });
});

describe('Input Validator 테스트', () => {
  test('validatePrice()', () => {
    // given
    let price;
    price = [1001, '1000d'];
    // then
    price.forEach((value) => {
      expect(() => Validator.validatePrice(value)).toThrow('[ERROR]');
    });

    // given
    price = [1000, 2000, 3000];
    // then
    price.forEach((value) => {
      expect(() => Validator.validatePrice(value)).not.toThrow();
    });
  });

  test('validateWinNum()', () => {
    // given
    let win;
    win = [
      [1, 2, 3, 4],
      [1, 2, 3, 4, 5, 6, 7],
      [1, 2, 3, 4, 5, 5],
      [0, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 46],
      [1, 2, 3, 4, 5, 'a'],
    ];
    // then
    win.forEach((value) => {
      expect(() => Validator.validateWinNum(value)).toThrow('[ERROR]');
    });

    // given
    win = [[1, 2, 3, 4, 5, 6]];
    // then
    win.forEach((value) => {
      expect(() => Validator.validateWinNum(value)).not.toThrow();
    });
  });

  test('validateBonusNum()', () => {
    // given
    let bonus;
    const win = [1, 2, 3, 4, 5, 6];
    bonus = [1, 2, 3, 4, 5, 6, 'a', 0, 46];
    // then
    bonus.forEach((value) => {
      expect(() => Validator.validateBonusNum(value, win)).toThrow('[ERROR]');
    });

    // given
    bonus = [7, 10, 30];
    // then
    bonus.forEach((value) => {
      expect(() => Validator.validateBonusNum(value, win)).not.toThrow();
    });
  });
});
