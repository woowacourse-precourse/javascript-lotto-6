import Validate from '../src/Validate';

describe('Validate 클래스 유효성 테스트', () => {
  let validate;

  beforeEach(() => {
    validate = new Validate();
  });

  test('DivisibleBy1000 1000으로 안 나뉘어지면 [ERROR] 코드 발생하는지', () => {
    expect(() => validate.DivisibleBy1000(900)).toThrowError('[ERROR]');
  });

  test('checkNumbersType 숫자 아닌 값이 들어오면 [ERROR] 코드 발생하는지', () => {
    expect(() => validate.checkNumbersType([1, 2, 'a', 4, 5])).toThrowError('[ERROR]');
  });

  test('checkNumberRange 1에서 45사이의 범위를 벗어난 숫자가 나오면 [ERROR] 코드 발생하는지', () => {
    expect(() => validate.checkNumberRange([1, 2, 50, 4, 5])).toThrowError('[ERROR]');
  });

  test('checkedBonusLength 숫자 1기 초과의 값이 들어오면 [ERROR] 코드 발생하는지', () => {
    expect(() => validate.checkedBonusLength([1, 2])).toThrowError('[ERROR]');
  });

  test('checkDuplicateBonus 당첨번호와 중복된 값을 입력했을 때 [ERROR] 코드 발생하는지', () => {
    const numbers = [1, 2, 3, 4, 5];
    const bonus = [3];
    expect(() => validate.checkDuplicateBonus(bonus, numbers)).toThrowError('[ERROR]');
  });
})