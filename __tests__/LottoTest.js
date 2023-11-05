import Lotto from '../src/Lotto.js';
import { Message } from '../src/Message.js';

describe('Lotto 테스트', () => {
  test('정상적인 로또 번호 배열로 Lotto 생성', () => {
    const validNumbers = [1, 2, 12, 21, 44, 35];
    const lotto = new Lotto(validNumbers);
    expect(lotto.numbers).toEqual(validNumbers);
  });

  test('1~45범위가 아닐때', () => {
    const invalidNumbers = [0, 12, 21, 23, 41, 46];
    expect(() => new Lotto(invalidNumbers)).toThrowError(
      new Error(Message.error.NOT_RANGE)
    );
  });

  test('로또 번호 개수가 6보다 작을때', () => {
    const invalidNumbers = [15, 17, 33];
    expect(() => new Lotto(invalidNumbers)).toThrowError(
      new Error(Message.error.NOT_SIX_LENGTH)
    );
  });

  test('로또 번호의 개수가 6보다 클때', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(Message.error.NOT_SIX_LENGTH);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });
});
