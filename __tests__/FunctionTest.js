import { Random } from '@woowacourse/mission-utils';
import Game from '../src/Game.js';

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickUniqueNumbersInRange);
};

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
