import LottoTicketGenerator from '../src/DongHangLottery/LottoTicketGenerator';

describe('로또 생성 테스트', () => {
  test('생성된 로또 개별 번호가 1 ~ 45 사이인 숫자인지 테스트한다.', () => {
    const Lotto = new LottoTicketGenerator().makeLotto();
    Lotto.forEach(num => {
      expect(!isNaN(num)).toBeTruthy();
      expect(num).toBeGreaterThan(0);
      expect(num).toBeLessThan(46);
    });
  });

  test('생성된 로또 개별 번호가 1 ~ 45 사이인지 테스트한다.', () => {
    const Lotto = new LottoTicketGenerator().makeLotto();
    expect(Lotto.length).toEqual(6);
  });
});
