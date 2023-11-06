import WinningNumbers from '../src/WinningNumbers';

describe('당첨 번호 클래스 테스트', () => {
  test('정상 동작', () => {
    function happyPath() {
      const winningNumbers = new WinningNumbers('1,2,3,4,5,6');

      return winningNumbers.getValues();
    }

    expect(happyPath()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('의미없는 공백이 있을 경우 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumbers('1, 2 , 3,4,5, 6');
    }).toThrow('[ERROR]');
  });

  test('숫자로 변환할 수 없는 값이면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumbers('invalid,value');
    }).toThrow('[ERROR]');
  });

  test('로또 숫자의 최댓값보다 큰 수가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumbers('41,42,43,44,45,46');
    }).toThrow('[ERROR]');
  });

  test('로또 숫자의 최솟값보다 작은 수가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumbers('0,1,2,3,4,5');
    }).toThrow('[ERROR]');
  });

  test('중복된 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumbers('1,1,2,3,4,5');
    }).toThrow('[ERROR]');
  });
});
