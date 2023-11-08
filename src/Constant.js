const inputMessage = Object.freeze({
  GET_USER_MONEY: "구입 금액을 입력해주세요.",
  GET_WINNER_NUMBERS: "당첨 번호를 입력해 주세요.",
  GET_BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
  PURCHASENUMBER: "개를 구매했습니다.",
});

const errorMessage = Object.freeze({
  NUMBER_LENGTH: "[ERROR] 번호는 6개여야 합니다.",
  NUMBER_OVERLAP: "[ERROR] 로또 번호가 중복되었습니다.",
  NUMBER_EMPTY_OR_STRING: "[ERROR] 숫자를 입력해주세요.",
  NUMBER_SMALL: "[ERROR] 1000원 이상 입금해주세요.",
  NUMBER_REST: "[ERROR] 1000원 단위로 입금해주세요.",
  NUMBER_NOT_INRANGE: "[ERROR] 1~45 내의 숫자를 입력해주세요.",
  BONUSNUMBER_OVERLAP_WINNINGNUMBER:
    "[ERROR] 당첨 번호와 다른 번호를 입력하세요.",
});

const resultMessage = Object.freeze({
  FIRST: "6개 일치 (2,000,000,000원) - ",
  SECOND: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  THIRD: "5개 일치 (1,500,000원) - ",
  FOURTH: "4개 일치 (50,000원) - ",
  FIFTH: "3개 일치 (5,000원) - ",
  END: "개",
});

const rateMessage = Object.freeze({
  START: "총 수익률은 ",
  END: "%입니다.",
});

const prize = Object.freeze({
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
});

const gameConstant = Object.freeze({
  LOTTO_PRICE: 1000,
  LOTTO_MIN: 1,
  LOTTO_MAX: 45,
  LOTTO_LENGTH: 6,
  WHILE_PARAMETER: true,
});

export {
  inputMessage,
  errorMessage,
  resultMessage,
  rateMessage,
  prize,
  gameConstant,
};
