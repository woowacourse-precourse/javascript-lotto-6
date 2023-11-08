import { MAGIC_NUM } from "./magicNum.js";

export const WINNINGS = {
  PLACE_1ST: 2000000000,
  PLACE_2ND: 30000000,
  PLACE_3RD: 1500000,
  PLACE_4TH: 50000,
  PLACE_5TH: 5000,
};

export const RANK_NUM = {
  PLACE_1ST_IN_THE_LOTTERY: `6개 일치 (${WINNINGS.PLACE_1ST.toLocaleString(
    "en-US"
  )}원)`,
  PLACE_2ND_IN_THE_LOTTERY: `5개 일치, 보너스 볼 일치 (${WINNINGS.PLACE_2ND.toLocaleString(
    "en-US"
  )}원)`,
  PLACE_3RD_IN_THE_LOTTERY: `5개 일치 (${WINNINGS.PLACE_3RD.toLocaleString(
    "en-US"
  )}원)`,
  PLACE_4TH_IN_THE_LOTTERY: `4개 일치 (${WINNINGS.PLACE_4TH.toLocaleString(
    "en-US"
  )}원)`,
  PLACE_5TH_IN_THE_LOTTERY: `3개 일치 (${WINNINGS.PLACE_5TH.toLocaleString(
    "en-US"
  )}원)`,
};

export const ERROR_MESSAGES = {
  MONEY_NOT_NUMERIC: "[ERROR] 금액은 숫자로 입력해야 합니다.",
  NOT_IN_1000_UNIT: `[ERROR] 구입금액이 ${MAGIC_NUM.LOTTERY_PRICE}원으로 나누어 떨어지지 않습니다.`,
  ONLY_NUMBER_ONE: "[ERROR] 보너스 번호는 숫자 하나를 입력해야 합니다.",
  SIX_NUMBER: "[ERROR] 로또 번호는 6개여야 합니다.",
  SIX_ONLY_NUMBER: "[ERROR] 로또 번호는 숫자 6개여야 합니다.",
  UNIQUE_SIX_NUMBER: "[ERROR] 로또 번호는 서로 다른 6자리 숫자여야 합니다.",
  VALID_RANGE_NUMBER: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  NOT_UNIQUE_BONUS_NUMBER: "[ERROR] 보너스 번호가 담첨번호와 중복됩니다.",
};
