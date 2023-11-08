// 파일명 : Messages.js
// 역할 : 메시지를 객체로 관리

import Constants from './Constants.js';

class Messages {
  // 메시지는 정적인 값이므로 클래스 필드에 선언
  #constants = new Constants();

  #inputMsg = {
    money: `로또 구입 금액을 입력해 주세요(${this.#constants
      .getLottoPriceUnit()
      .toLocaleString()}원 단위) : `,
    lotto: '당첨 번호를 입력해 주세요(쉼표로 구분) : ',
    bonus: '보너스 번호를 입력해 주세요 : ',
  };

  #inputErrorMsg = {
    divide: `[ERROR]입력값이 ${this.#constants
      .getLottoPriceUnit()
      .toLocaleString()}원 단위가 아닙니다.`,
    outOfindex: `[ERROR] 로또 번호는 ${this.#constants.getLottoNumberMin()} 부터 ${this.#constants.getLottoNumberMax()} 사이의 숫자여야 합니다.`,
    overlap: '[ERROR] 로또 번호는 중복될 수 없습니다.',
    notNumber: '[ERROR] 로또 번호는 숫자여야 합니다.',
    notLength: `[ERROR] 로또 번호는 ${this.#constants.getLottoNumberCount()}개여야 합니다.`,
    notNumberMoney: '[ERROR] 로또 구입 금액은 숫자여야 합니다.',
    negative: '[ERROR] 로또 구입 금액은 음수 또는 0이 될 수 없습니다.',
    max: `[ERROR] 로또 구입 금액은 최대 ${this.#constants
      .getLottoPriceMax()
      .toLocaleString()}원까지 가능합니다.`,
  };

  #outputMsg = {
    check: '개를 구매했습니다.',
    match: '개 일치',
    rateOfreturn: '수익률은 ',
    rateOfreturnEnd: '% 입니다.',
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

  getResultMsg(result) {
    return (
      '당첨 통계\n' +
      '---\n' +
      `3개 일치 (${this.#constants.getPrize()[3].toLocaleString()}원) - ` +
      result[5] +
      '개\n' +
      `4개 일치 (${this.#constants.getPrize()[4].toLocaleString()}원) - ` +
      result[4] +
      '개\n' +
      `5개 일치 (${this.#constants.getPrize()[5].toLocaleString()}원) - ` +
      result[3] +
      '개\n' +
      `5개 일치, 보너스 볼 일치 (${this.#constants
        .getPrize()
        ['b'].toLocaleString()}원) - ` +
      result[2] +
      '개\n' +
      `6개 일치 (${this.#constants.getPrize()[6].toLocaleString()}원) - ` +
      result[1] +
      '개\n'
    );
  }

  getRateOfReturnMsg(rateOfReturn) {
    return `총 수익률은 ${rateOfReturn}%입니다.`;
  }

  getCountMsg(count) {
    return count + this.#outputMsg.check;
  }
}

// const messages = new Messages();
// const result = {
//   1: 1,
//   2: 2,
//   3: 3,
//   4: 4,
//   5: 5,
// };
// console.log(messages.getResultMsg(result));

export default Messages;
