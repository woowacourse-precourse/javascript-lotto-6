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

  test(`로또번호와 당첨번호, 보너스번호를 비교하여
   올바른 등수를 리턴하는지 확인.`, () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getRank([1, 2, 3, 4, 5, 6], 7)).toEqual('rank1');
    expect(lotto.getRank([1, 2, 3, 4, 5, 7], 6)).toEqual('rank2');
    expect(lotto.getRank([1, 2, 3, 4, 5, 7], 8)).toEqual('rank3');
    expect(lotto.getRank([1, 2, 3, 4, 9, 7], 8)).toEqual('rank4');
    expect(lotto.getRank([1, 2, 3, 10, 9, 7], 8)).toEqual('rank5');
    expect(lotto.getRank([1, 2, 11, 10, 9, 7], 8)).toBeFalsy();
  });
});
