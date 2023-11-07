import Bonus from '../../src/model/Bonus.js';

describe('Bonus 클래스 테스트', () => {
  let winningNumbers;

  beforeEach(() => {
    winningNumbers = [1, 2, 3, 4, 5, 6];
  });

  test('Bonus 인스턴스 생성을 테스트한다.', () => {
    const bonusInstance = new Bonus('7', winningNumbers);

    expect(bonusInstance).toBeInstanceOf(Bonus);
  });

  test('유효한 보너스 번호 입력에 대해 테스트한다.', () => {
    const bonusNumber = new Bonus('7', winningNumbers).getBonusNumber();

    expect(bonusNumber).toEqual(7);
  });

  test('유효하지 않은 공백이 입력되면 예외가 발생한다', () => {
    expect(() => new Bonus('3 3', winningNumbers)).toThrow('[ERROR]');
  });

  test('입력한 보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.', () => {
    expect(() => new Bonus('6', winningNumbers)).toThrow('[ERROR]');
  });

  test('1~45 이외의 유효하지 않은 보너스 번호 입력 시 예외가 발생한다.', () => {
    expect(() => new Bonus('1000', winningNumbers)).toThrow('[ERROR]');
  });
});
