import Person from '../src/models/Person.js';

describe('사람 클래스 테스트', () => {
  test('사람이 가지고 있는 돈이 음수이면 예외가 발생한다.', () => {
    expect(() => {
      new Person('-1000');
    }).toThrow('[ERROR]');
  });

  test('사람이 가지고 있는 돈에 공백이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Person('-10 00');
    }).toThrow('[ERROR]');
  });

  test('사람이 가지고 있는 돈이 0으로 시작하면 예외가 발생한다.', () => {
    expect(() => {
      new Person('0100');
    }).toThrow('[ERROR]');
  });

  test('사람이 가지고 있는 돈에 문자가 들어있으면 예외가 발생한다.', () => {
    expect(() => {
      new Person('10a00');
    }).toThrow('[ERROR]');
  });

  test('사람이 가지고 있는 돈으로 로또를 한장도 사지 못하면 예외가 발생한다.', () => {
    expect(() => {
      new Person('999');
    }).toThrow('[ERROR]');
  });
});
