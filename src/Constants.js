//여기저기에서 사용
export const MIN = 1;
export const MAX = 45;
export const PICK_NUMBER = 6;
export const INPUT_RANGE_ERROR_MESSAGE =
  "[ERROR] " + MIN + "~" + MAX + "사이의 정수를 입력해야 합니다.";
export const THREE = 3;
export const FOUR = 4;
export const FIVE = 5;
export const SIX = 6;

//User.js
export const LOTTO_PRICE = 1000;
export const INPUT_MONEY_MESSAGE = "구입금액을 입력해 주세요: ";
export const INPUT_MONEY_ERROR_MESSAGE =
  "[ERROR] 천 원 단위의 올바른 값을 입력해주세요.";
export const CREATE_LOTTO_MESSAGE = "개를 구매했습니다.";

//Lotto.js
export const INPUT_NUMBER_ERROR_MESSAGE =
  "[ERROR] 로또 번호는 " + PICK_NUMBER + "개여야 합니다.";
export const INPUT_DUPLICATE_ERROR_MESSAGE =
  "[ERROR] 중복된 숫자가 포함되어있습니다.";

// 기타
export const THREE_MATCH_MESSAGE = " (5,000원)";
export const FOUR_MATCH_MESSAGE = " (50,000원)";
export const FIVE_MATCH_MESSAGE = " (1,500,000원)";
export const BONUS_MATCH_MESSAGE = ", 보너스 볼 일치 (30,000,000원)";
export const ALL_MATCH_MESSAGE = " (2,000,000,000원)";

//App.js
export const INPUT_NUMBER_MESSAGE = "당첨 번호를 입력해 주세요.";
export const INPUT_BONUS_MESSAGE = "보너스 번호를 입력해 주세요.";
export const INCLUDE_BONUS_ERROR_MESSAGE =
  "[ERROR] 당첨 번호에 보너스 번호가 포함되어 있습니다.";
export const NUMS = [THREE, FOUR, FIVE, FIVE, SIX];
export const MONEYS = [
  THREE_MATCH_MESSAGE,
  FOUR_MATCH_MESSAGE,
  FIVE_MATCH_MESSAGE,
  BONUS_MATCH_MESSAGE,
  ALL_MATCH_MESSAGE,
];
export const THREE_MATCH_MONEY = 5000;
export const FOUR_MATCH_MONEY = 50000;
export const FIVE_MATCH_MONEY = 1500000;
export const BONUS_MATCH_MONEY = 30000000;
export const ALL_MATCH_MONEY = 2000000000;
export const CORRECTS = "개 일치";
export const CORRECT_COUNT = "개";
export const YIELD_HEAD = "\n총 수익률은 ";
export const YIELD_TAIL = "%입니다.";

//Function.js
export const FAIL = false;
export const SUCCESS = true;
