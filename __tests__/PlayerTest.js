import Player from '../src/model/Player';

describe('로또 플레이어 클래스 테스트', () => {
  test.each([[600], [1500], [0]])(
    '1000원 단위가 아닌 금액이 예산으로 들어올 때 예외가 발생한다.',
    (budget) => {
      expect(() => {
        new Player(budget);
      }).toThrow('[ERROR]');
    }
  );
});
