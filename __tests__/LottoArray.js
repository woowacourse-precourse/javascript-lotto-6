import LottoArray from '../src/LottoArray.js';
import Rank from '../src/Rank.js';
import { LOTTO } from '../src/constants/lottoGame.js';

describe('LottoArray 클래스 테스트', () => {
  test('구매 금액에 맞는 개수만큼 로또를 발행한다', () => {
    // given
    const MONEY = 10000;

    // when
    const lottoArray = new LottoArray();
    lottoArray.set(MONEY);

    // then
    expect(lottoArray.get().length).toBe(MONEY / LOTTO.PRICE);
  });

  test('당첨 금액과 구매 금액에 알맞는 수익률을 가진다.', () => {
    // given
    const FOURTH_RANK = {
      NUMBERS: 4,
      BONUS: false,
      PRIZE: 50000,
    };

    const MONEY = 8000;
    const WINNINGS_RATE = 625;

    // when
    const rank = new Rank();
    rank.choose(FOURTH_RANK.NUMBERS, FOURTH_RANK.BONUS);

    const lottoArray = new LottoArray();
    lottoArray.set(MONEY);

    // then
    expect(lottoArray.calculateWinnings(rank)).toBe(WINNINGS_RATE);
  });
});
