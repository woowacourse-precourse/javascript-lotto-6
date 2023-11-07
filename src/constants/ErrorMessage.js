import { LOTTO_PRICE, LOTTO_LENGTH } from "./LottoConstants.js";

export const ERRMSG_MONEY_NOT_MONEY = "구입금액이 숫자가 아닙니다.\n";
export const ERRMSG_MONEY_NOT_DIVIDED_BY_LOTTO_PRICE = `구입금액이 ${LOTTO_PRICE}원 단위가 아닙니다.\n`;
export const ERRMSG_LOTTO_NOT_VALID_LOTTO_LENGTH = `로또의 길이가 ${LOTTO_LENGTH}가 아닙니다.\n`;
export const ERRMSG_LOTTO_NOT_MADE_WITH_UNIQUE_NUMBER = `로또에 중복된 숫자를 포함합니다.\n`;