import {
  isValidAmount,
  isValidBonusNumber,
  isValidWinningNumbers,
} from '../src/Validation.js';

describe('로또 구입 금액 유효성 검사  테스트', () => {
  test('입력 값 없을 때 false 리턴 확인', () => {
    expect(isValidAmount('')).toBeFalsy();
  });
  test('공백 입력 시 false 리턴 확인', () => {
    expect(isValidAmount(' ')).toBeFalsy();
  });
  test('숫자가 아닌 문자 입력 시 false 리턴 확인', () => {
    expect(isValidAmount('ab')).toBeFalsy();
    expect(isValidAmount('ab12')).toBeFalsy();
  });
  test('1000원 보다 작은 금액 입력 시 false 리턴 확인', () => {
    expect(isValidAmount('500')).toBeFalsy();
    expect(isValidAmount('0')).toBeFalsy();
    expect(isValidAmount('900')).toBeFalsy();
    expect(isValidAmount('00000')).toBeFalsy();
  });
  test('1000원 단위로 나누어 떨어지지 않는 경우 false리턴', () => {
    expect(isValidAmount('1200')).toBeFalsy();
    expect(isValidAmount('1230')).toBeFalsy();
    expect(isValidAmount('10900')).toBeFalsy();
  });
  test('올바른 금액 입력시 true 리턴', () => {
    expect(isValidAmount('1000')).toBeTruthy();
    expect(isValidAmount('10000')).toBeTruthy();
  });
});

describe('당첨 번호 유효성 검사  테스트', () => {
  test('입력 값 없을 때 false 리턴', () => {
    expect(isValidWinningNumbers('')).toBeFalsy();
  });
  test('공백 입력 시 false 리턴', () => {
    expect(isValidWinningNumbers(' ')).toBeFalsy();
  });
  test('당첨번호 입력 형식 지키지 않은 경우 false 리턴', () => {
    expect(isValidWinningNumbers('1,  4,')).toBeFalsy();
    expect(isValidWinningNumbers(',')).toBeFalsy();
    expect(isValidWinningNumbers('1,2,3,4,5,6,')).toBeFalsy();
    expect(isValidWinningNumbers('1,2,3,4,5, 6')).toBeFalsy();
  });
  test('1~45 사이가 아닌 숫자를 입력한 경우 false 리턴', () => {
    expect(isValidWinningNumbers('1,2,3,4,5,46')).toBeFalsy();
    expect(isValidWinningNumbers('0,1,2,3,4,5')).toBeFalsy();
  });
  test('중복된 숫자가 있을 경우 false 리턴', () => {
    expect(isValidWinningNumbers('1,2,3,4,5,5')).toBeFalsy();
    expect(isValidWinningNumbers('5,5,5,5,5,5')).toBeFalsy();
  });
  test('올바른 번호 입력시 true 리턴', () => {
    expect(isValidWinningNumbers('1,2,3,4,5,6')).toBeTruthy();
    expect(isValidWinningNumbers('11,21,30,43,5,6')).toBeTruthy();
  });
});

describe('보너스 번호 유효성 검사  테스트', () => {
  test('입력 값 없을 때 false 리턴', () => {
    expect(isValidBonusNumber([1, 2, 3, 4, 5, 6], '')).toBeFalsy();
  });
  test('공백 입력 시 false 리턴', () => {
    expect(isValidBonusNumber([1, 2, 3, 4, 5, 6], ' ')).toBeFalsy();
  });
  test('숫자가 아닌 문자 입력 시 false 리턴', () => {
    expect(isValidBonusNumber([1, 2, 3, 4, 5, 6], 'a0,')).toBeFalsy();
  });
  test('1~45 사이가 아닌 숫자를 입력한 경우 false 리턴', () => {
    expect(isValidBonusNumber([1, 2, 3, 4, 5, 6], 0)).toBeFalsy();
    expect(isValidBonusNumber([1, 2, 3, 4, 5, 6], 50)).toBeFalsy();
  });
  test('당첨번호를 입력한 경우 false 리턴', () => {
    expect(isValidBonusNumber([1, 2, 3, 4, 5, 6], 6)).toBeFalsy();
    expect(isValidBonusNumber([1, 2, 3, 4, 5, 6], 2)).toBeFalsy();
  });
  test('올바른 번호 입력시 true 리턴', () => {
    expect(isValidBonusNumber([1, 2, 3, 4, 5, 6], 7)).toBeTruthy();
    expect(isValidBonusNumber([1, 2, 3, 4, 5, 6], 45)).toBeTruthy();
  });
});
