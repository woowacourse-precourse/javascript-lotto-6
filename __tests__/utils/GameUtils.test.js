import LOTTO_NUMBER from "../../src/constants/LottoNumber.js";
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

  test('1부터 45까지의 랜덤한 수 6개를 생성받습니다.', () => {
    // given
    const randomNumberCount = LOTTO_NUMBER.COUNT;

    // when
    const randomNumber = GameUtils.createRandomUniqueSixNumberFromOneToForthFive();

    // then
    expect(randomNumber.length).toEqual(randomNumberCount);
  });
});
