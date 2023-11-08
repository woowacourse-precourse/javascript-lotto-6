import LottoGenerator from '../src/domain/LottoGenerator.js';

describe('LottoGenerator 클래스 테스트', () => {
  it.each([1, 3, 10])(
    '지정된 수만큼 로또티켓을 발급해야 한다.',
    (ticketCount) => {
      const lottoGenerator = new LottoGenerator(ticketCount);
      const lottoTickets = lottoGenerator.getLottoTickets();

      expect(lottoTickets).toHaveLength(ticketCount);
    },
  );

  it('중복없는 6자리번호를 가진 티켓이 발행되야아 한다.', () => {
    const ticketCount = 5;
    const lottoGenerator = new LottoGenerator(ticketCount);
    const lottoTickets = lottoGenerator.getLottoTickets();

    for (const ticket of lottoTickets) {
      expect(new Set(ticket).size).toEqual(6);
    }
  });
  it('랜덤하게 뽑은 로또티켓의 번호가 1에서 45사이의 중복없는 6자리 숫자여야 한다.', () => {
    const lottoGenerator = new LottoGenerator(1);
    const randomNumbers = lottoGenerator.pickRandomLottoNumbers();

    expect(randomNumbers).toHaveLength(6);

    for (const number of randomNumbers) {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(45);
    }

    expect(new Set(randomNumbers).size).toEqual(6);
  });
});
