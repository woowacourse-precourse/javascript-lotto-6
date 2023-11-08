export const GAME = Object.freeze({
  INPUT_CAR_NAMES:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ",
  INPUT_NUMBER_OF_ATTEMPTS: "시도 횟수: ",
  RUN_RESULT: "실행결과",
  WINNER: "최종 우승자: ",
  FINISH_THRESHOLD: 0,
  ATTEMPT_DECREASE_AMOUNT: 1,
  MAX_NAME_LENGTH: 5,
});

export const MOVE = Object.freeze({
  FORWARD: 1,
  MOVABLE_THRESHOLD: 4,
  DASH: "-",
});

export const ERROR = Object.freeze({
  INVALID_PURCAHSE_AMOUNT: "[ERROR] 유효한 구매 금액을 입력하세요.",
  INVALID_DUPLICATION: "[ERROR] 중복이 없어야 합니다.",
  INVALID_SIX_NUMBERS: "[ERROR] 로또 번호는 6개여야 합니다.",
  INVALID_INTEGER: "[ERROR] 정수를 입력해 주세요.",
  INVALID_NUMBER: "[ERROR] 유효한 번호를 입력해 주세요.",
});
