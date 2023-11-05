import WinningNumber from '../src/models/WinningNumber';

describe('당첨 번호 모델 테스트', () => {
  test('당첨번호 get/set 테스트', () => {
    const winningNumber = new WinningNumber();
    winningNumber.setWinningNumber([1, 2, 3, 4, 5, 6]);
    expect(winningNumber.getWinningNumber()).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
  test('보너스 번호 get/set 테스트', () => {
    const winningNumber = new WinningNumber();
    winningNumber.setBonusNumber(45);
    expect(winningNumber.getBonusNumber()).toBe(45);
  });
});
