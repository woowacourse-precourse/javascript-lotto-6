import Game from '../src/Game.js';

describe('Game 클래스 테스트', () => {
  test('로또 구입 금액이 1,000으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new Game(1004);
    }).toThrow('[ERROR]');
  });

  test('숫자가 아닌 값이 입력되면 예외가 발생한다.', () => {
    expect(() => {
      new Game('a');
    }).toThrow('[ERROR]');
  });

  test('구입 금액에 해당하는 만큼 로또를 발행한다.', () => {
    const game = new Game(2000);
    const lottos = game.getLottos();

    expect(lottos.length).toBe(2);
  });
});
