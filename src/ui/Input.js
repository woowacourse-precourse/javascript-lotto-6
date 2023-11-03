import { Console } from "@woowacourse/mission-utils";
import { REGEX, LOTTO_RULE } from "../constants/BusinessNumber.js";
import Lotto from "../Lotto.js";
//문자열을 다루는 곳
class Input {
  luckyArray;

  static async lottoAmount() {
    const amount = await Console.readLineAsync("구입 금액 ㄱ : ");
    this.validateAmount(amount);
    
    return Number(amount);
  }

  static async luckyNumber() {
    const lucky = await Console.readLineAsync("로또번호 기입 고고 쉼표로 구분 ㄱㄱ");
    this.validateLuckyNumber(lucky);
    
    const lotto = new Lotto(lucky.split(','));
    this.luckyArray = lotto.getLuckyArray();
 
    return lotto.getLuckyArray();
  }

  static async bonusNumber() {
    const bonusNumber = await Console.readLineAsync("뽀너스뽀너스 : ");
    this.validateBonusNumber(bonusNumber);

    return this.luckyArray.concat(Number(bonusNumber)); // 최종 리턴 : [..행운배열,보스너번호] 
  }

  static validateAmount(amount) {
    if (REGEX.number.test(amount)) {
      throw new Error("[ERROR]숫자만써 공백도 허용안해");
    }
    if (Number(amount) > LOTTO_RULE.buyMax) {
      throw new Error("[ERROR]10만원이상 못사용");
    }
    if (Number(amount) < LOTTO_RULE.buyUnit) {
      throw new Error("금액이 부족해용");
    }
    if (Number(amount) % LOTTO_RULE.buyUnit !== 0) {
      throw new Error("1000원 단위만 구입 가능해연");
    }
  }

  static validateLuckyNumber(luckyNumber) {
    if (REGEX.commaNumber.test(luckyNumber)) {
      throw new Error("올바른 형식이 아닙니다. 공백도 허용 안해여");
    }
  }

  static validateBonusNumber(bonusNumber) {
    if (REGEX.number.test(bonusNumber)) {
      throw new Error("올바른 형식이 아닙니다. 공백도 허용 안해영");
    }

    if (Number(bonusNumber) > LOTTO_RULE.maxNumber || Number(bonusNumber) < LOTTO_RULE.minNumber) {
      throw new Error("1부터 45 사이의 숫자를 입력해주세요");
    }
    
    this.luckyArray.forEach((number) => {
      if (number === Number(bonusNumber)) {
        throw new Error("행운의 숫자와 중복이 되면 아니되용");
      }
    })
  }
}

/*
const test = async () => {
  await Input.lottoAmount()
  await Input.luckyNumber()
  const confidentialArray = await Input.bonusNumber();
  console.log(confidentialArray);
}

test();*/

