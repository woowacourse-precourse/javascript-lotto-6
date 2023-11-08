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

export const MESSAGE = Object.freeze({
  ERROR_PREFIX: '[ERROR] ',
  INVALID_NUMBER_TYPE: '로또 번호는 1 이상의 정수만 입력해 주세요.',
  INVALID_NUMBER_RANGE: `${OPTION.BALL_NUMBER_RANGE[0]} 이상, ${OPTION.BALL_NUMBER_RANGE[1]} 이하의 로또 번호를 입력해 주세요.`,
  INVALID_NUMBER_COUNT: `로또 번호는 ${OPTION.BALL_COUNT}개입니다.`,
  DUPLICATE_NUMBER: `로또 번호는 ${OPTION.BALL_COUNT}개입니다.`,
  INVALID_MONEY: '올바른 구입금액을 입력해 주세요.',
  INPUT_MONEY: '구입금액을 입력해 주세요.\n',
  INPUT_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS: '\n보너스 번호를 입력해 주세요.\n',
  WINNING_RESULT: '\n당첨 통계\n---',
});

export default { MESSAGE, OPTION };
