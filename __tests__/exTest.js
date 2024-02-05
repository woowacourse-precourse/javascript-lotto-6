import LottoTicketGenerator from '../src/DongHangLottery/LottoTicketGenerator';
import LottoPlayer from '../src/DongHangLottery/LottoPlayer.js';

describe('로또 생성 테스트', () => {
  test('생성된 로또 개별 번호가 1 ~ 45 사이인 숫자인지 테스트한다.', () => {
    const Lotto = new LottoTicketGenerator().makeLotto().getLottoNumber();
    Lotto.forEach(num => {
      expect(!isNaN(num)).toBeTruthy();
      expect(num).toBeGreaterThan(0);
      expect(num).toBeLessThan(46);
    });
  });

  test('생성된 로또 개별 번호가 1 ~ 45 사이인지 테스트한다.', () => {
    const Lotto = new LottoTicketGenerator().makeLotto();
    expect(Lotto.getLottoNumber().length).toEqual(6);
  });

  test('사용자가 구매한 로또 번호들 생성 체크', () => {
    const mokPlayer = new LottoPlayer(2000);
    expect(mokPlayer.getUserLottoList().length).toEqual(2)
  })
});
