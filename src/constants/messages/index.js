import { formatKoreaWon } from "../../utils";
import { LOTTO_RULE } from "../lotto";

const LOTTO_ERROR_PREFIX = "로또 번호는";
const COMMON_ERROR_PREFIX = "입력값은";
const BUY_ERROR_PREFIX = "구매 금액은";

export const MESSAGES = Object.freeze({
  ERROR: {
    PREFIX: "[ERROR]",
    COMMON: {
      NOT_NUMBER: `${COMMON_ERROR_PREFIX} 숫자여야 합니다.`,
      NOT_POSITIVE: `${COMMON_ERROR_PREFIX} 양수여야 합니다.`,
      NOT_INTEGER: `${COMMON_ERROR_PREFIX} 정수여야 합니다.`,
    },
    LOTTO: {
      NOT_NUMBER: `${LOTTO_ERROR_PREFIX} 숫자여야 합니다.`,
      NOT_INTEGER: `${LOTTO_ERROR_PREFIX} 정수여야 합니다.`,
      NOT_UNIQUE: `${LOTTO_ERROR_PREFIX} 중복되지 않아야 합니다.`,
      NOT_LENGTH: (length) => `${LOTTO_ERROR_PREFIX} ${length}개여야 합니다.`,
      NOT_ON_RANGE: (min, max) =>
        `${LOTTO_ERROR_PREFIX} ${min} ~ ${max} 사이의 숫자여야 합니다.`,
    },
    BUY: {
      NOT_NUMBER: `${BUY_ERROR_PREFIX} 숫자여야 합니다.`,
      NOT_POSITIVE: `${BUY_ERROR_PREFIX} 양수여야 합니다.`,
      NOT_MULTIPLE_OF: (multiple) =>
        `${BUY_ERROR_PREFIX} ${multiple}의 배수여야 합니다.`,
    },
  },
  BUY: {
    PLACE_HOLDER: "구입금액을 입력해 주세요.",
    RESULT: (count) => `${count}개를 구매했습니다.`,
  },
  WINNING_NUMBER: {
    PLACE_HOLDER: "당첨 번호를 입력해 주세요.",
  },
  BONUS_NUMBER: {
    PLACE_HOLDER: "보너스 번호를 입력해 주세요.",
  },

  WINNING_STATISTICS: {
    PREFIX: "당첨 통계\n---",
    5: (count) =>
      `3개 일치 (${formatKoreaWon(LOTTO_RULE.WINNING_AMOUNT[5])}) - ${count}개`,
    4: (count) =>
      `4개 일치 (${formatKoreaWon(LOTTO_RULE.WINNING_AMOUNT[4])}) - ${count}개`,
    3: (count) =>
      `5개 일치 (${formatKoreaWon(LOTTO_RULE.WINNING_AMOUNT[3])}) - ${count}개`,
    2: (count) =>
      `5개 일치, 보너스 볼 일치 (${formatKoreaWon(
        LOTTO_RULE.WINNING_AMOUNT[2]
      )}) - ${count}개`,
    1: (count) =>
      `6개 일치 (${formatKoreaWon(LOTTO_RULE.WINNING_AMOUNT[1])}) - ${count}개`,
    SUFFIX: (rateOfReturn) => `총 수익률은 ${rateOfReturn}%입니다.`,
  },
});
