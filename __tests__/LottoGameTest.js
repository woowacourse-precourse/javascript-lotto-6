import LottoGame from '../src/domain/LottoGame';

describe('LottoGame', () => {
  let lottoGame;

  beforeEach(() => {
    lottoGame = new LottoGame(2);
  });

  test('해당 메서드가 수량에 맞는 길이를 생성하는지 테스트한다.', () => {
    const generatedTickets = lottoGame.generateLottoTickets(5);

    expect(generatedTickets).toHaveLength(5);
  });

  test('해당 메서드가 수량에 맞는 6자리의 배열을 반환하는지 테스트한다.', () => {
    const purchasedLotto = lottoGame.getPurchasedLotto();

    expect(purchasedLotto).toHaveLength(2);

    purchasedLotto.forEach((lottoNumbers) => {
      expect(lottoNumbers).toBeInstanceOf(Array);
      expect(lottoNumbers).toHaveLength(6);
    });
  });
});
