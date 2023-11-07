const { mockQuestions } = require('../__testUtils__/utils');
const { ERROR_SYMBOL } = require('../constants/message');
const { default: GameController } = require('../src/Models/GameController');

describe('GameController 객체 테스트', () => {
  let gameController = new GameController();
  beforeEach(() => {
    gameController = new GameController();
  });

  test('1000원 단위로만 로또를 구매할 수 있다.', async () => {
    // given
    mockQuestions(['8200']);

    // when
    const promiseLottos = gameController.purchaseLotto();

    // then
    expect(promiseLottos).rejects.toThrow(ERROR_SYMBOL);
  });
});
