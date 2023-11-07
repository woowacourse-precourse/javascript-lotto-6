import { makeNumbers, validateMoney } from '../src/App.js';
import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });
});

describe('로또 발급 테스트', () => {
  test('1000원 단위가 아닐 시 예외가 발생한다.', () => {
    expect(() => {
      validateMoney(5200);
    }).toThrow('[ERROR]');
  });

  test('숫자가 아닐 시 예외가 발생한다.', () => {
    expect(() => {
      validateMoney('500j');
    }).toThrow('[ERROR]');
  });
});
