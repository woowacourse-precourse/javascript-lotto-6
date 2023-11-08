import Lotto from "../Lotto.js";
import CONDITION from "../constants/condition.js";
import MESSAGE from "../constants/message.js";

const validationUtils = {
  // 구입 금액 예외 처리
  inputPriceValidate(price) {
    // 숫자가 아닌 경우
    if (isNaN(price)) {
      throw new Error(MESSAGE.error.notNumber);
    }
    // 구입 금액이 1,000원으로 나누어 떨어지지 않는 경우
    if (price % CONDITION.unit.price !== 0) {
      throw new Error(MESSAGE.error.priceUnit);
    }
    return Number(price);
  },

  // 로또 번호 중복 예외 처리
  checkRepeat(lottoNums) {
    if (new Set(lottoNums).size !== 6) {
      throw new Error(MESSAGE.error.repeatNum);
    }
  },

  // 당첨 번호 예외 처리
  inputWinningNumValidate(winningNum) {
    // 쉼표로 구분하지 않은 경우
    if (!winningNum.includes(",")) {
      throw new Error(MESSAGE.error.notComma);
    }

    // 쉼표로 구분한 경우
    const winningNums = winningNum.split(",").map((num) => Number(num.trim()));
    // 6개가 아닌 경우
    if (winningNums.length !== 6) {
      throw new Error(MESSAGE.error.notLength);
    }
    // 범위가 1~45가 아닌 경우
    winningNums.map((num) => {
      if (num < 1 || num > 45) {
        throw new Error(MESSAGE.error.notRange);
      }
    });
    // 중복되지 않는 숫자가 아닌 경우
    this.checkRepeat(winningNums);
    return new Lotto(winningNums);
  },

  inputBonusNumValidate(bonusNum, winningNums) {
    bonusNum = Number(bonusNum);
    // 범위가 범위가 1~45가 아닌 경우
    if (bonusNum < 1 || bonusNum > 45) {
      throw new Error(MESSAGE.error.notBonusRange);
    }
    // 당첨 번호와 중복되지 않는 숫자가 아닌 경우
    if (winningNums.includes(bonusNum)) {
      throw new Error(MESSAGE.error.repeatBonusNum);
    }
    return bonusNum;
  },
};

export default validationUtils;
