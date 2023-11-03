// 파일명 : Messages.js
// 역할 : 메시지를 객체로 관리
import { MissionUtils } from "@woowacourse/mission-utils";
import Constants from "../constants/Constants.js";

class Messages {
  // 메시지는 정적인 값이므로 클래스 필드에 선언
  #constants = new Constants();

  #inputMsg = {
    money: `로또 구입 금액을 입력해 주세요(${
      this.#constants.getLottoPriceUnit
    }원 단위) : `,
    amount: "당첨 번호를 입력해 주세요(쉼표로 구분) : ",
    bonus: "보너스 번호를 입력해 주세요 : ",
  };

  #inputErrorMsg = {
    divide: `[ERROR]입력값이 ${this.#constants.getLottoPriceUnit()}원 단위가 아닙니다.`,
    outOfindex: `[ERROR] 로또 번호는 ${this.#constants.getLottoNumberMin()} 부터 ${this.#constants.getLottoNumberMax()} 사이의 숫자여야 합니다.`,
    overlap: "[ERROR] 로또 번호는 중복될 수 없습니다.",
    notNumber: "[ERROR] 로또 번호는 숫자여야 합니다.",
    notSix: `[ERROR] 로또 번호는 ${this.#constants.getLottoNumberCount()}개여야 합니다.`,
  };

  #outputMsg = {
    check: "개를 구매했습니다.",
    match: "개 일치",
    rateOfreturn: "수익률은 ",
    rateOfreturnEnd: "% 입니다.",
  };

  getInputMsg(inputMsg) {
    return this.#inputMsg[inputMsg];
  }

  getErrorMsg(inputErrorMsg) {
    return this.#inputErrorMsg[inputErrorMsg];
  }

  getOutputMsg(outputMsg) {
    return this.#outputMsg[outputMsg];
  }
}

export default Messages;
