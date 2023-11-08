import WinngingLotto from '../src/domain/WinningLotto';

describe('WinningLotto 클래스 테스트', () => {
  test('보너스 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new WinngingLotto('1,2,3,4,5,6', 'one');
    }).toThrow('[ERROR]');
  });

  test('로또 번호와 보너스 번호가 같을 경우 예외가 발생한다.', () => {
    expect(() => {
      new WinngingLotto('1,2,3,4,5,6', '1');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      new WinngingLotto('1,2,3,4,5,6', '46');
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 입력조건과 다르게 들어온다면 예외가 발생한다.', () => {
    expect(() => {
      new WinngingLotto('1.2.3.4.5.6', '6');
    }).toThrow('[ERROR]');
  });
});
