import BonusNumber from '../src/repository/BonusNumber.js';

describe('보너스 번호 클래스 테스트', () => {
  test('보너스 번호의 타입이 Number가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      new BonusNumber('1k');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호의 범위가 1~45사이의 값이 아니라면 예외가 발생한다.', () => {
    expect(() => {
      new BonusNumber('46');
    }).toThrow('[ERROR]');
  });
});
