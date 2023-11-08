import LottoGame from "../src/Model/lottoGame";

describe('로또 게임 클래스 테스트', () => {
  test('로또 번호에 따른 등수 구하는 함수 테스트', () => {
    const lottoGame = new LottoGamegit c();
    lottoGame.setWinningNumber('1, 2, 3, 11, 22, 33');
    lottoGame.setBonusNumber('4');
    expect(lottoGame.matchWinningNumber([1, 2, 3, 4, 11, 22])).toBe(2);
  });

  test('결과에 따라 수익 계산하는 함수 테스트', () => {
    const lottoGame = new LottoGame();
    const result = [0, 1, 0, 2, 0, 3];
    expect(lottoGame.calculateEarning(result)).toBe(2003015000);
  });

  test('투자 금액과 수익에 따라 수익률 계산하는 함수 테스트', () => {
    const lottoGame = new LottoGame();
    const amount = 9000;
    const earning = 5000;
    expect(lottoGame.calculateEarningRate(amount, earning)).toBe('55.6');
  });
});