import LOTTO from "./lotto.js";

const lotto = Object.freeze({
  numberDuplicate: "로또 번호는 중복되지 않아야 합니다.",
  noRemaining: `구입 금액은 ${LOTTO.price}원 단위로만 입력 가능합니다.`,
});

const input = Object.freeze({
  onlyNumber: "숫자만 입력 가능합니다.",
  onlyNumberAndComma: "숫자와 콤마(,)만 입력 가능합니다.",
});

const ERROR = Object.freeze({
  lotto,
  input,
});

export default ERROR;
