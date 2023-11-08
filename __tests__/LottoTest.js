import Lotto from '../src/model/Lotto';

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

  // 아래에 추가 테스트 작성 가능
  test('로또 번호에 정수가 아닌 값이 들어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 't', 4, 5, 5]);
    }).toThrow('[ERROR]');

    expect(() => {
      new Lotto([1, 2, 4.2, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 1이상 45이하가 아닌 정수가 들어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');

    expect(() => {
      new Lotto([0, 2, -3, 4, 5, 40]);
    }).toThrow('[ERROR]');
  });

  test('올바른 로또 번호가 들어가, 로또 번호를 반환한다.', () => {
    const numbers = [1, 4, 5, 10, 20, 44];
    const lotto = new Lotto([...numbers]);

    expect(lotto.getNumbers()).toEqual(numbers);
  });
});
