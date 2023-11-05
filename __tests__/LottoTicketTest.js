import RandomGenerator from '../src/utils/RandomGenerator.js';

describe('LottoTicket', () => {
  test('구입금액을 입력하면, 개수만큼 로또를 발행한다.', () => {
    const purchaseMoney = 3000;
    const issueCount = purchaseMoney / 1000;

    const tickets = Array.from({ length: issueCount }, () => {
      return RandomGenerator.generate();
    });

    // tickets의 요소가 undifined가 아닌지 확인
    tickets.forEach(ticket => {
      expect(ticket).not.toBeUndefined();
    });

    // 구입금액에 맞게 발행되었는지 확인
    expect(tickets.length).toBe(3);
  });
});
