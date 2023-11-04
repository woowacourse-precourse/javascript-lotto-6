import { Random } from '@woowacourse/mission-utils';

import Game from '../src/Game.js';
import { ERROR_MESSAGE } from '../src/constants/messages.js';

describe('Game 클래스 테스트', () => {
  test('로또 구입 금액이 1,000으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    const game = new Game();
    expect(() => {
      game.validate(1001);
    }).toThrow(ERROR_MESSAGE.invalidUnit);
  });

  test('구입 금액에 숫자가 아닌 값이 입력되면 예외가 발생한다.', () => {
    const game = new Game();
    expect(() => {
      game.validate('a');
    }).toThrow(ERROR_MESSAGE.invalidType);
  });

  test('구입 금액이 1,000원 미만이면 예외가 발생한다.', () => {
    const game = new Game();
    expect(() => {
      game.validate(0);
    }).toThrow(ERROR_MESSAGE.invalidAmount);
  });

  test('구입 금액에 해당하는 만큼 로또를 발행한다.', () => {
    const game = new Game();
    game.purchaseLotto(2000);
    const lottos = game.getLottos();

    expect(lottos.length).toBe(2);
  });

  test('로또 번호를 오름차순으로 정렬한다.', () => {
    Random.pickUniqueNumbersInRange = jest.fn();
    Random.pickUniqueNumbersInRange.mockReturnValue([35, 1, 4, 25, 44, 12]);

    const game = new Game();
    game.purchaseLotto(1000);
    const lottos = game.getLottos();

    expect(lottos).toEqual([[1, 4, 12, 25, 35, 44]]);
  });
});
