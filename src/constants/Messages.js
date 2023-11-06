import { LOTTO } from "./Standard.js";

const MESSAGES = Object.freeze({
  GET_PRICE: "구입금액을 입력해 주세요.\n",
  SHOW_PURCHASE_HISTORY: (number) => `${number}개를 구매했습니다.`,
  GET_WINNING_NUMBER: "당첨 번호를 입력해 주세요.\n",
  GET_BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
  SHOW_RESULTS: ({
    three,
    four,
    five,
    fiveWithBonus,
    six,
  }) => `당첨 통계\n---\n3개 일치 (5,000원) - ${three}개\n4개 일치 (50,000원) - ${four}개\n5개 일치 (1,500,000원) - ${five}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${fiveWithBonus}개\n6개 일치 (2,000,000,000원) - ${six}개
  `,
  SHOW_PROFIT: (profit) => `총 수익률은 ${profit}%입니다.`,
  ERROR: Object.freeze({
    INVALID_PRICE: `[ERROR] 구입 금액은 ${LOTTO.PRICE} 단위 숫자로 입력해주세요.`,
    EXCEED_PRICE: `[ERROR] 구입 금액은 ${LOTTO.MAX_PRICE}까지만 입력 가능합니다.`,
    PLEASE_ONLY_NUMBER: "[ERROR] 숫자만 입력 가능합니다.",
    INVAILD_LOTTO_NUMBER: `[ERROR] 번호는 ${LOTTO.MIN_NUMBER}~${LOTTO.MAX_NUMBER} 사이로 입력해주세요.`,
    INVAILD_LOTTO_LENGTH: `[ERROR] 로또 번호는 ${LOTTO.LENGTH}개여야 합니다.`,
    DUPLICATE_LOTTO_NUMBER: "[ERROR] 로또 번호가 중복되지 않게 입력해주세요.",
    DUPLICATE_BONUS_NUMBER:
      "[ERROR] 보너스 번호가 로또 번호와 중복되지 않게 입력해주세요.",
  }),
});

export default MESSAGES;
