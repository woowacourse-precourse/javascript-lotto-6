import { UNIT, SEPARATOR } from "./rule.js";

export const MESSAGE = {
  GET_PURCHASE_SUM: "구입금액을 입력해 주세요.\n",
  SHOW_LOTTO_AMOUNT(amount) {
    return `\n${amount}개를 구매했습니다.\n`;
  },
  SHOW_LOTTO_NUMBER(lotto) {
    return `[${lotto.join(SEPARATOR.PURCHASED_LOTTO)}]`;
  },
  GET_USER_LOTTO: "\n당첨 번호를 입력해 주세요.\n",
};

export const ERROR = {
  NOT_ONLY_NUMBER: "[ERROR] 숫자만 입력 가능합니다.",
  INVALID_UNIT: `[ERROR] ${UNIT.PURCHASE} 단위로 입력 가능합니다.`,
};
