import LottoCalculator from '../src/model/LottoCalculator.js';

describe('로또 계산기 클래스 테스트', () => {
  test('money의 매개변수에 문자열이 들어가면 예외가 발생한다.', () => {
    expect(() => {
      new LottoCalculator('5000', [1, 2, 3, 4, 5, 6], 7);
    }).toThrow('[ERROR]');
  });

  test('win 매개변수에 문자열이 들어가면 예외가 발생한다.', () => {
    expect(() => {
      new LottoCalculator(5000, '1,2,3,4,5,6', 7);
    }).toThrow('[ERROR]');
  });

  test('win 매개변수의 요소에 문자열이 들어가면 예외가 발생한다.', () => {
    expect(() => {
      new LottoCalculator(5000, ['1', '2', '3', '4', '5', '6'], 7);
    }).toThrow('[ERROR]');
  });

  test('bonus의 매개변수에 문자열이 들어가면 예외가 발생한다.', () => {
    expect(() => {
      new LottoCalculator(5000, [1, 2, 3, 4, 5, 6], '7');
    }).toThrow('[ERROR]');
  });
});
