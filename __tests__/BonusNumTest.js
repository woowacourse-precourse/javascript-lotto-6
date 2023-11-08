import BonusNum from '../src/BonusNum';

describe('보너스 번호 클래스 테스트', () => {
  const winningNum = [1, 2, 3, 4, 5, 6];
  test('보너스 번호가 당첨번호와 중복되는 경우 예외처리한다.', () => {
    const bonusNum = 1;
    expect(() => {
      BonusNum.validate(bonusNum, winningNum).toThrow('[ERROR]');
    });
  });
  test('보너스 번호의 범위가 1~45가 아니라면 예외처리한다.', () => {
    const bonusNum = 100;
    expect(() => {
      BonusNum.validate(bonusNum, winningNum).toThrow('[ERROR]');
    });
  });
});
