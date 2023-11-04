import Lottery from '../src/lib/classes/Lottery';

describe('추첨기 클래스 테스트', () => {
  test.each(Array(3).fill())('로또 번호를 생성한다', () => {
    const lottoNumbers = Lottery.createLottoNumbers();

    expect(Array.isArray(lottoNumbers)).toBe(true);
    expect(lottoNumbers.length).toBe(6);

    console.log('로또 번호 배열:', lottoNumbers);

    for (const number of lottoNumbers) {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(45);
    }

    const uniqueNumbers = [...new Set(lottoNumbers)];
    expect(uniqueNumbers.length).toBe(6);

    const sortedNumbers = [...lottoNumbers];
    sortedNumbers.sort((a, b) => a - b);
    expect(sortedNumbers).toEqual(lottoNumbers);
  });

  const ticketCount = [5, 100, 1000, 10000];
  test.each(ticketCount)(
    '구매 수량만큼 로또를 발행한다. 수량 : %i',
    (ticketCount) => {
      const lottoTickets = Lottery.getLottoTickets(ticketCount);

      console.log('로또 티켓 배열:', lottoTickets);

      expect(Array.isArray(lottoTickets)).toBe(true);
      expect(lottoTickets.length).toBe(ticketCount);
    },
  );
});
