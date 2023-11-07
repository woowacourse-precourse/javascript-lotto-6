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

  test('숫자가 아닌 요소를 포함한 경우 예외처리', () => {
    expect(() => {
      new Lotto([1, 2, 'abc', 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('범위를 벗어난 숫자를 포함한 경우 예외처리', () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('중복된 숫자를 포함한 경우 예외처리', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 4, 5]);
    }).toThrow('[ERROR]');
  });
});

describe('Lotto 메서드 테스트', () => {
  const otherLotto = [1, 2, 3, 8, 11, 15];
  let lotto;

  beforeEach(() => {
    lotto = new Lotto([1, 2, 3, 4, 5, 6]);
  });

  it('countMatchedNumbers 메서드가 일치하는 숫자의 수를 반환', () => {
    expect(lotto.countMatchedNumbers(otherLotto)).toBe(3);
  });

  it('isBonusNumberMatch 메서드가 보너스 숫자와 일치하는 경우 true를 반환', () => {
    const bonusNumber = 1;
    expect(lotto.isBonusNumberMatch(otherLotto, bonusNumber)).toBe(true);
  });

  it('isBonusNumberMatch 메서드가 보너스 숫자와 일치하지 않는 경우 false를 반환', () => {
    const bonusNumber = 12;
    expect(lotto.isBonusNumberMatch(otherLotto, bonusNumber)).toBe(false);
  });
});
