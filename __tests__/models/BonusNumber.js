import BonusNumber from '../../src/models/BonusNumber';

describe('BonusNumber 테스트', () => {
  test('보너스 번호가 로또 번호와 중복되면 예외가 발생한다.', () => {
    const input = [1, 2, 3, 4, 5, 6];
    expect(() => {
      new BonusNumber(1, input);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 범위 밖이면 예외가 발생한다.', () => {
    const input = [1, 2, 3, 4, 5, 6];

    expect(() => {
      new BonusNumber(46, input);
    }).toThrow('[ERROR]');
  });
});
