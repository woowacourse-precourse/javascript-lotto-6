import LottoGenerator from '../src/LottoGenerator.js';
import { Random } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils');

describe('로또 생성 클래스 테스트', () => {
  test('구입 금액에 맞는 로또 생성 테스트', () => {
    Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);
    const generator = new LottoGenerator(5);
    const tickets = generator.getLottoTickets();
    expect(tickets.length).toBe(5);
  });
});
