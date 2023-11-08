import LottoManager from '../src/LottoManager.js';

describe('로또매니저 클래스 테스트', () => {
  const manager = new LottoManager();

  test('1000원 단위로 계산하여 로또 티켓을 발행해주는가', () => {
    const prices = [1000, 30000, 50000];
    const ticket = [1, 30, 50];

    prices.map((price, index) => {
      expect(manager.lottoTicketExchange(price)).toEqual(ticket[index]);
    });
  });

  test('로또 번호를 내부에 저장했다가 올바르게 반환해주는가', () => {
    const lottos = [[1, 2, 3, 4, 5, 6], [11, 12, 13, 14, 15, 16]];

    manager.issueLotto(lottos);

    expect(manager.getLottos()).toEqual([[1, 2, 3, 4, 5, 6], [11, 12, 13, 14, 15, 16]]);
  });

  test('당첨번호와 보너스번호를 받아 추첨하고 그에따른 결과를 올바르게 반환해주는가', () => {
    const winningNumbers = [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 7], [1, 2, 3, 4, 5, 7]];
    const bonusNumber = [31, 6, 32];
    const result = [[0, 0, 0, 0, 1], [0, 0, 0, 1, 1], [0, 0, 1, 1, 1]];

    winningNumbers.map((winningNumber, index) =>{
      manager.drawingLotto(winningNumber, bonusNumber[index])

      expect(manager.getRanks()).toEqual(result[index]);
    });
  });
});
