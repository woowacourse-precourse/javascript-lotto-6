import GameUtils from "../../src/utils/GameUtils.js";

describe('게임 유틸 테스트', () => {
  test('10000원 금액으로 살 수 있는 로또는 10개로 나옵니다.', () => {
    // given
    const amount = 10000;
    const answer = 10;

    // when
    const lottoTickets = GameUtils.dividedByThousand(amount);

    // then
    expect(lottoTickets).toEqual(answer);
  });
});
