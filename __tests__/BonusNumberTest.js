import BonusNumber from '../src/BonusNumber';

describe('보너스 번호 클래스 테스트', () => {
  test('정상 동작', () => {
    function happyPath() {
      const bonusNumber = new BonusNumber('1', [2, 3, 4, 5, 6, 7]);

      return bonusNumber.getValue();
    }

    expect(happyPath()).toEqual(1);
  });

  test('의미없는 공백이 있을 경우 예외가 발생한다.', () => {
    expect(() => {
      new BonusNumber('7 ', [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('숫자로 변환할 수 없는 값이면 예외가 발생한다.', () => {
    expect(() => {
      new BonusNumber('invalidValue', [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 숫자의 최댓값보다 큰 값이면 예외가 발생한다.', () => {
    expect(() => {
      new BonusNumber('46', [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 숫자의 최솟값보다 작은 값이면 예외가 발생한다.', () => {
    expect(() => {
      new BonusNumber('0', [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호와 중복되는 값이면 예외가 발생한다.', () => {
    expect(() => {
      new BonusNumber('1', [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
