import BonusNumber from "../../src/domain/BounsNumber";

describe('보너스번호 입력 테스트', () => {
  test('숫자가 아닌 입력이 들어올 때 에러 메시지가 출력된다.', () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const invalidBonusNumber = '공습경보';

    expect(() => new BonusNumber(invalidBonusNumber, winningNumbers)).toThrow('[ERROR]');
  });

  test('빈 입력이 들어올 때 에러 메시지가 출력된다.', () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const invalidBonusNumber = '';

    expect(() => new BonusNumber(invalidBonusNumber, winningNumbers)).toThrow('[ERROR]');
  });

  test('로또 범위에 맞지 않는 숫자가 들어올 때 에러 메시지가 출력된다.', () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const invalidBonusNumber = 46;

    // when & then
    expect(() => new BonusNumber(invalidBonusNumber, winningNumbers)).toThrow('[ERROR]');
  });

  test('보너스 번호가 이미 위닝 넘버에 들어가있을 때 에러 메시지가 출력된다.', () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const invalidBonusNumber = 6;

    // when & then
    expect(() => new BonusNumber(invalidBonusNumber, winningNumbers)).toThrow('[ERROR]');
  });
});
