import { Console } from '@woowacourse/mission-utils';
import { countLottoTickets, generateLottoTickets } from '../src/utils/countLottoTickets';

describe('checkGenerateLotto', () => {
  test('금액이 1000단위로 나눠지는지 확인, 미통과시 예외 발생', () => {
    //given
    const money = 3000;

    //when & then
    const result = countLottoTickets(money);
    expect(result.length).toBe(3);
  });

  test('티켓이 원하는 개수만큼 생성되는지 확인, 미통과시 예외 발생', () => {
    //given
    const count = 3;

    //when & then
    const result = generateLottoTickets(count);
    expect(result.length).toBe(3);
  });
});
