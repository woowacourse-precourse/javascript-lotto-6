import BonusLottoNumber from '../src/model/BonusLottoNumber.js';

describe('보너스 로또 넘버 클래스 테스트', () => {
  test('공백이면 예외가 발생한다.', () => {
    expect(() => {
      BonusLottoNumber.validate('');
    }).toThrow('[ERROR]');
  });

  test('숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      BonusLottoNumber.validate('일이삼');
    }).toThrow('[ERROR]');
  });

  test('1~45 사이의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      BonusLottoNumber.validate(50);
    }).toThrow('[ERROR]');
  });

  test('기존 로또 번호와 중복되면 예외가 발생한다.', () => {
    expect(() => {
      BonusLottoNumber.validate(6, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
