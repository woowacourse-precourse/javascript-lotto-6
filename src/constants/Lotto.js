export const MESSAGE = Object.freeze({});

export const OPTION = Object.freeze({
  /** 로또 1 게임 가격 */
  LOTTO_PRICE: 1000,
  /** 로또 1 게임에 선택하는 공의 수 */
  BALL_COUNT: 6,
  /** 로또 공의 숫자 범위 */
  BALL_NUMBER_RANGE: [1, 45],
  /** 추첨할 등수 */
  WINNING_RANKING: 5,
  /** 높은 등수부터 시작하는 로또 당첨금 */
  LOTTO_PRIZE: [2_000_000_000, 30_000_000, 1_500_000, 50_000, 5_000],
});

export default { MESSAGE, OPTION };
