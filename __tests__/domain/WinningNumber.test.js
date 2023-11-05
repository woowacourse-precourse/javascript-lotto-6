import WinningNumber from "../../src/domain/WinningNumber";

describe('당첨번호 입력 테스트', () => {
  test('숫자가 아닌 입력이 들어올 때 에러 메시지가 출력된다.', () => {
    // given
    const invalidInput = [1, 2, 3, 4, 5, '공습경보'];

    // when & then
    expect(() => new WinningNumber(invalidInput)).toThrow('[ERROR]');
  });

  test('로또 범위가 아닌 숫자가 들어오면 에러 메시지가 출력된다.', () => {
    // given
    const invalidInput = [1, 2, 3, 4, 5, 46];

    // when & then
    expect(() => new WinningNumber(invalidInput)).toThrow('[ERROR]');
  });

  test('중복인 숫자가 들어오면 에러 메시지가 출력된다.', () => {
    // given
    const invalidInput = [1, 2, 3, 4, 5, 5];

    // when & then
    expect(() => new WinningNumber(invalidInput)).toThrow('[ERROR]');
  });

  test('정상적인 입력이 들어오면 에러가 발생하지 않는다.', () => {
    // given
    const validInput = [1, 2, 3, 4, 5, 6];

    // when & then
    expect(() => new WinningNumber(validInput)).not.toThrow('[ERROR]');
  });
});
