import BonusInput from '../src/Bonus';
import ExceptionList from '../src/ExceptionList';

describe('보너스번호입력 클래스 테스트', () => {
  test('번호를 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new BonusInput('');
    }).toThrow('[ERROR]');
  });
  test('숫자가 아닌 값을 입력한 경우 예외가 발생한다.', () => {
    expect(() => {
      new BonusInput('j');
    }).toThrow('[ERROR]');
  });
  test('1 ~ 45 사이의 숫자를 입력하지 않은 경우 예외가 발생한다.', () => {
    expect(() => {
      new BonusInput('48');
    }).toThrow('[ERROR]');
  });
  test('당첨 번호와 중복된 숫자를 입력한 경우 예외가 발생한다.', () => {
    expect(() => {
      const exception = new ExceptionList();
      exception.sameBonusError('1,2,3,4,5,6', '6');
    }).toThrow('[ERROR]');
  });
});
