import Lotto from '../src/Lotto.js';

describe('Lotto 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR] 로또 번호는 6개로 입력해주세요.');
  });

  test('로또 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['english', '한글', '!', true, false, null]);
    }).toThrow('[ERROR] 로또 번호는 숫자로 입력해주세요.');
  });

  test('로또 번호가 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([13.5, 24.6, 39.7, 40.1, 9.9, 10.0]);
    }).toThrow('[ERROR] 로또 번호는 정수로 입력해주세요.');
  });

  test('로또 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 46, 1000, -23, -765, 267]);
    }).toThrow('[ERROR] 로또 번호는 1부터 45 사이의 숫자로 입력해주세요.');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR] 로또 번호는 중복된 숫자 없이 입력해주세요.');
  });

  test('로또 번호를 오름차순으로 정렬한다.', () => {
    const numbers = [4, 12, 40, 23, 11, 9];
    expect(numbers.sort((a, b) => a - b)).toStrictEqual([4, 9, 11, 12, 23, 40]);
  });
});
