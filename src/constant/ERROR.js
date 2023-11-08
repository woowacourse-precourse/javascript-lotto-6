import { PRICE, RANGE } from "./NUMBER.js";

export const ERROR = "[ERROR]";

export const PURCHASE_PRICE_ERROR = {
  isDivideThousand: `${ERROR} 구입 금액은 ${PRICE}원 단위로 입력해야 합니다.`,
  isBiggerThanThousand: `${ERROR} 구입 금액은 ${PRICE}원 이상 입력해야 합니다.`,
  isNumber: `${ERROR} 구입 금액은 숫자만 입력하셔야 합니다.`,
};

export const LOTTO_ERROR = {
  isSixSize: `${ERROR} 로또 번호는 ${RANGE.SIZE}개여야 합니다.`,
  isOneToFourtyFive: `${ERROR} 로또 번호는 ${RANGE.MIN}부터 ${RANGE.MAX}까지 입력 가능합니다.`,
  isDuplicate: `${ERROR} 로또 번호는 서로 중복될 수 없습니다.`,
  isNumber: `${ERROR} 로또 번호는 1 이상의 숫자만 입력하셔야 합니다.`,
};

export const BONUS_NUMBER_ERROR = {
  isOneToFourtyFive: `${ERROR} 보너스 번호는 ${RANGE.MIN}부터 ${RANGE.MAX}까지 입력 가능합니다.`,
  isNumber: `${ERROR} 보너스 번호는 숫자만 입력하셔야 합니다.`,
};
