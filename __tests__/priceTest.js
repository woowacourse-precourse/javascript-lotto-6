import Player from '../src/Player';

describe('Player 클래스 테스트', () => {
  const player = new Player();
  test('구입 금액이 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      player.validate('abc');
    }).toThrow('[ERROR] 구입 금액은 숫자로 입력해주세요.');
  });

  test('구입 금액이 1000원 단위가 아니면 예외가 발생한다.', () => {
    expect(() => {
      player.validate(15500);
    }).toThrow('[ERROR] 구입 금액은 1000원 단위로 입력해주세요.');
  });
});
