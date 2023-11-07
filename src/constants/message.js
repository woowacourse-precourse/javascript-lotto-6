import { UNIT, SEPARATOR, LOTTO, RANK, PRIZE, LOCALE } from "./rule";
import Utils from "../Utils";

export const MESSAGE = {
  GET_PURCHASE_SUM: "구입금액을 입력해 주세요.\n",
  SHOW_LOTTO_AMOUNT(amount) {
    return `\n${amount}개를 구매했습니다.`;
  },
  SHOW_LOTTO_NUMBER(lotto) {
    return `[${lotto.join(SEPARATOR.PURCHASED_LOTTO)}]`;
  },
  GET_USER_LOTTO: "\n당첨 번호를 입력해 주세요.\n",
  GET_USER_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
  SHOW_RESULT_PHRASE: "\n당첨 통계\n---",
  SHOW_EARNING_RATE(rate) {
    return `총 수익률은 ${rate}%입니다.`;
  },
};

export const RESULT = [
  function FIFITH_RANK_RESULT(count) {
    return `${RANK.FIFTH}개 일치 (${Utils.convertToLocaleUnit(
      PRIZE.FIFTH,
      LOCALE
    )}원) - ${count}개`;
  },
  function FOURTH_RANK_RESULT(count) {
    return `${RANK.FOURTH}개 일치 (${Utils.convertToLocaleUnit(
      PRIZE.FOURTH,
      LOCALE
    )}원) - ${count}개`;
  },
  function THIRD_RANK_RESULT(count) {
    return `${RANK.THIRD}개 일치 (${Utils.convertToLocaleUnit(
      PRIZE.THIRD,
      LOCALE
    )}원) - ${count}개`;
  },
  function SECOND_RANK_RESULT(count) {
    return `${RANK.SECOND}개 일치, 보너스 볼 일치 (${Utils.convertToLocaleUnit(
      PRIZE.SECOND,
      LOCALE
    )}원) - ${count}개`;
  },
  function FIRST_RANK_RESULT(count) {
    return `${RANK.FIRST}개 일치 (${Utils.convertToLocaleUnit(
      PRIZE.FIRST,
      LOCALE
    )}원) - ${count}개`;
  },
];

export const STATISTICS = (count, rankIndex) => RESULT[rankIndex](count);

export const ERROR = {
  NOT_ONLY_NUMBER: "[ERROR] 숫자만 입력 가능합니다.",
  LOWER_THAN_ZERO: "[ERROR] 양의 정수를 입력해주세요.",
  INVALID_UNIT: `[ERROR] ${UNIT.PURCHASE} 단위로 입력 가능합니다.`,
  INVALID_LOTTO_LENGTH: `[ERROR] 로또 번호는 ${LOTTO.LENGTH}개여야 합니다.`,
  NOT_ONLY_NUMBER_AND_COMMA: `[ERROR] 숫자와 ${SEPARATOR.NAME}만 입력 가능합니다.`,
  INVALID_FORMAT: `[ERROR] 올바르지 않은 형식입니다.`,
  INVALID_RANGE: `[ERROR] 로또 번호는 ${LOTTO.MIN_RANGE}부터 ${LOTTO.MAX_RANGE} 사이의 숫자여야 합니다.`,
  DUPLICATE_EXIST: "[ERROR] 중복되는 번호는 입력할 수 없습니다.",
  ALREADY_EXIST: "[ERROR] 보너스 번호와 당첨 번호는 중복될 수 없습니다.",
};
