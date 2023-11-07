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

  // 아래에 추가 테스트 작성 가능
  test.each([['0,1,2,3,4,5'], ['46,45,44,43,42,41']])(
    '로또 번호에 1보다 작고 45보다 큰 숫자가 있으면 예외가 발생한다.',
    (inputs) => {
      inputs = inputs.split(',');

      expect(() => {
        new Lotto(inputs);
      }).toThrow('[ERROR]');
    }
  );

  test.each([['11,22,33,44,45'], [''], ['1,2,3,4,5,6,7']])(
    '로또 번호의 개수가 6개가 아니라면 예외가 발생한다.',
    (inputs) => {
      inputs = inputs.split(',');

      expect(() => {
        new Lotto(inputs);
      }).toThrow('[ERROR]');
    }
  );

  test('로또 번호는 오름차순 정렬로 저장된다.', () => {
    const lotto = new Lotto([40, 33, 22, 21, 27, 1]);

    expect(lotto.getNumbers()).toStrictEqual([1, 21, 22, 27, 33, 40]);
  });

  test('로또 번호에 특정 숫자 포함 여부를 알려준다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.includes(1)).toBe(true);
    expect(lotto.includes(7)).toBe(false);
  });

  test('두 개의 로또 번호가 동일하게 가지는 숫자의 개수를 알려준다.', () => {
    const lotto1 = new Lotto([1, 2, 3, 4, 5, 6]);
    const lotto2 = new Lotto([1, 2, 3, 11, 12, 13]);

    expect(lotto1.countSameNumber(lotto2)).toBe(3);
  });

  test('임의의 숫자 배열과 로또 번호가 동일하게 가지는 숫자의 개수를 알려준다.', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto([1, 2, 3, 4, 5, 7]);

    expect(lotto.filterSameNumber(numbers)).toBe(5);
  });
});
