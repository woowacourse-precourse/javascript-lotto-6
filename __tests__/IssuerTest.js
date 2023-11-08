import Issuer from '../src/Issuer';

describe('Issuer 클래스 테스트', () => {
  const { tickets } = new Issuer(3000);
  test('구매한 로또 개수와 발행된 로또 개수가 같은지 확인한다.', () => {
    expect(tickets).toHaveLength(3);
  });
  test('발행된 각 티켓이 6개의 요소를 가지고 있는지 확인한다.', () => {
    tickets.forEach((ticket) => {
      expect(ticket).toHaveLength(6);
    });
  });
  test('발행된 각 티켓의 요소가 전부 숫자인지 확인한다.', () => {
    tickets.forEach((ticket) => {
      ticket.forEach((value) => {
        expect(typeof value).toEqual('number');
      });
    });
  });
  test('발행된 각 티켓의 요소가 전부 숫자 1 ~ 45 범위인지 확인한다.', () => {
    tickets.forEach((ticket) => {
      ticket.forEach((value) => {
        expect(value).toBeGreaterThanOrEqual(1);
        expect(value).toBeLessThanOrEqual(45);
      });
    });
  });
  test('발행된 각 티켓이 오름차순으로 정렬되었는지 확인한다.', () => {
    tickets.forEach((ticket) => {
      const sortedTicket = [...ticket].sort((a, b) => a - b);
      expect(ticket).toEqual(sortedTicket);
    });
  });
});
