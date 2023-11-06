//여기저기에서 사용
export const MIN = 1;
export const MAX = 45;
export const PICK_NUMBER = 6;
export const INPUT_RANGE_ERROR_MESSAGE =
  "[ERROR]" + MIN + "~" + MAX + "사이의 정수를 입력해야 합니다.";

//User.js
export const LOTTO_PRICE = 1000;
export const INPUT_MONEY_MESSAGE = "구입금액을 입력해 주세요: ";
export const INPUT_MONEY_ERROR_MESSAGE =
  "[ERROR] 천 원 단위의 올바른 값을 입력해주세요.";
export const CREATE_LOTTO_MESSAGE = "개를 구매했습니다.";

//App.js
export const INPUT_NUMBER_MESSAGE = "당첨 번호를 입력해 주세요.";
export const INPUT_BONUS_MESSAGE = "보너스 번호를 입력해 주세요.";

//Lotto.js
export const INPUT_NUMBER_ERROR_MESSAGE =
  "[ERROR] 로또 번호는 " + PICK_NUMBER + "개여야 합니다.";
export const INPUT_DUPLICATE_ERROR_MESSAGE =
  "[ERROR] 중복된 숫자가 포함되어있습니다.";
