import { LottoGame } from '../src/Domain/LottoGame.js';

describe('LottoGame', () => {
  let lottoGame;

  //각각 독립적 케이스
  beforeEach(() => {
    lottoGame = new LottoGame();
  });

  test('buyLottos -> 입력 받은 문자열 처리', () => {
    const cash = '3000';
    lottoGame.buyLottos(cash);
    expect(lottoGame.playerLottos).toBeDefined();
    expect(lottoGame.playerLottos.length).toBe(3);
  });

  test('winLottos -> 입력 받은 문자열 처리', () => {
    const winningNumber = '1,2,3,4,5,6';
    lottoGame.winLottos(winningNumber);
    expect(lottoGame.winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
