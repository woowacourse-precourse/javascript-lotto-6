import Lotto from '../src/domain/Lotto';

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
});

describe('로또 클래스 메소드 테스트', () => {
  test('클래스 내의 로또 번호를 쉼표롤 기준으로 문자열로 변환.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const result = '1, 2, 3, 4, 5, 6';
    expect(lotto.convert_toString()).toEqual(result);
  });

  test('주어진 로또 번호와 클래스 로또 번호가 일치하는 만큼 카운트', () => {
    const lotto = new Lotto([1, 3, 5, 7, 9, 11]);
    const input = [6, 7, 8, 9, 11, 45];
    const result = 3;
    expect(lotto.matchCounter(input)).toEqual(result);
  });

  test('클래스 내 숫자가 보너스 번호 포함 하고 있으면 true를 반환', () => {
    const lotto = new Lotto([6, 14, 20, 21, 35, 43]);
    const input = 21;
    const result = true;
    expect(lotto.matchBonus(input)).toEqual(result);
  });
});
