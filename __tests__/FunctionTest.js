import { Random } from '@woowacourse/mission-utils';
import Game from '../src/Game.js';

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickUniqueNumbersInRange);
};

describe('로또 구입 기능 테스트', () => {
  test('구입 금액이 1,000원일 때, 하나의 로또를 구입한다.', () => {
    const money = 1000;
    expect(new Game().purchaseLottoTickets(money)).toHaveLength(1);
  });

  test('구입 금액이 8,000원일 때, 8장의 로또를 구입한다.', () => {
    const money = 8000;
    expect(new Game().purchaseLottoTickets(money)).toHaveLength(8);
  });
});

describe('로또 생성 기능 테스트', () => {
  test('로또는 중복되지 않은 번호로 생성된다.', () => {
    const ticket = new Game().createSingleLottoTicket();
    expect(
      new Set(ticket.getNumbers()).size === ticket.getNumbers().length
    ).toBeTruthy();
  });

  test('로또는 6개의 번호로 생성된다.', () => {
    const ticket = new Game().createSingleLottoTicket();
    expect(ticket.getNumbers()).toHaveLength(6);
  });

  test('로또는 오름차순으로 정렬된 번호로 생성된다.', () => {
    const numbers = [6, 5, 4, 3, 2, 1];
    mockRandoms([numbers]);

    const ticket = new Game().createSingleLottoTicket();

    expect(ticket.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
