import { Console } from "@woowacourse/mission-utils";

const inputValidators = {
  validatePayment(payment) {
    if (!/^\d+$/.test(payment)) {
      throw new Error("[ERROR] 유효한 입력 형식이 아닙니다.");
    }

    if (payment % 1000 !== 0){
      throw new Error("[ERROR] 1,000원 단위로 입력해주세요.");
    }
    
    if (/^0/.test(payment)) {
      throw new Error("[ERROR] 유효한 숫자 형식이 아닙니다.");
    }
  },

  validateWinningNumbers(winnigNumbers) {
    if (winnigNumbers.length !== 6) {
      throw new Error("[ERROR] 6개의 번호를 쉼표(,)를 기준으로 구분해주세요.");
    }

    if (!winnigNumbers.every((number) => this.isInRange(number))) {
      throw new Error("[ERROR] 1~45 자리의 정수로 입력해주세요.");
    }

    if (this.isDuplicated(winnigNumbers)) {
      throw new Error("[ERROR] 중복된 번호가 있습니다.");
    }
  },

  validateBonusNumber(bonusNumber, winnigNumbers) {
    if (!this.isInRange(bonusNumber)) {
      throw new Error("[ERROR] 1~45 자리의 정수로 입력해주세요.");
    }

    const totalNumbers = [...winnigNumbers, bonusNumber];
    if (this.isDuplicated(totalNumbers)) {
      throw new Error("[ERROR] 당첨 번호와 중복된 번호가 있습니다.");
    }
  },

  isInRange(number) {
    return number === parseInt(number) && number >= 1 && number <= 45;
  },

  isDuplicated(numberlist) {
    return new Set(numberlist).size !== numberlist.length;
  }
};

export default inputValidators;