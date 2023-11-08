import { Random } from '@woowacourse/mission-utils';
import Lotto from '../src/Lotto.js';
import Vendor from '../src/Vendor.js';

const mockRandoms = (numbers) => {
  const mockPickUniqueNumbersInRange = jest.spyOn(Random, 'pickUniqueNumbersInRange');
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, mockPickUniqueNumbersInRange);

  mockPickUniqueNumbersInRange.mockClear();
};

describe('벤더 클래스 테스트', () => {
  const PURCHASE_AMOUNT = 50000;
  const MATCHES = {
    three: 3,
    four: 0,
    five: 0,
    fivePlusBonus: 0,
    six: 0,
  };

  test('구매 금액에 해당하는 갯수의 로또 생성', () => {
    const TICKET_COUNT = 50;

    const vendor = new Vendor(PURCHASE_AMOUNT);
    const tickets = vendor.getTickets();

    expect(tickets.length).toBe(TICKET_COUNT);
  });

  test('당첨 번호 일치 여부 확인', () => {
    const AMOUNT = 3000;
    const WINNING_NUMBERS = new Lotto([1, 2, 3, 4, 5, 6]);
    const BONUS_NUMBER = 7;

    mockRandoms([
      [1, 2, 3, 10, 20, 30],
      [4, 5, 6, 11, 25, 40],
      [1, 2, 5, 8, 9, 45],
    ]);

    const vendor = new Vendor(AMOUNT);

    expect(vendor.findMatches(WINNING_NUMBERS, BONUS_NUMBER)).toEqual(MATCHES);
  });

  test('당첨 금액 계산', () => {
    const TOTAL_EARNED = 15000;

    const vendor = new Vendor(PURCHASE_AMOUNT);

    expect(vendor.calculateEarnings(MATCHES)).toBe(TOTAL_EARNED);
  });

  test('수익률 계산', () => {
    const PERCENTAGE_PROFIT = '30.0';

    const vendor = new Vendor(PURCHASE_AMOUNT);

    expect(vendor.getProfit(MATCHES)).toBe(PERCENTAGE_PROFIT);
  });
});
