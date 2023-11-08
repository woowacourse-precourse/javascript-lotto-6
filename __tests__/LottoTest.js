import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 문자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'a']);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 정수가 아닌 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6.2]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 1~45 범위를 벗어나는 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 개수가 6개 미만이면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4]);
    }).toThrow('[ERROR]');
  });
});

describe('로또 클래스 보너스 번호 테스트', () => {
  let lotto;

  beforeEach(() => {
    lotto = new Lotto([1, 2, 3, 4, 5, 6]);
  });

  test('보너스 번호가 숫자가 아니면 예외가 발생한다', () => {
    expect(() => lotto.validateBonusNumber('a')).toThrow('[ERROR]');
  });

  test('보너스 번호가 이미 로또 번호에 존재하면 예외가 발생한다', () => {
    expect(() => lotto.validateBonusNumber(1)).toThrow('[ERROR]');
  });

  test('보너스 번호가 1~45 범위를 벗어나면 예외가 발생한다', () => {
    expect(() => lotto.validateBonusNumber(46)).toThrow('[ERROR]');
  });
});
