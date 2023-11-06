import {
  lineBreakMessage,
  purchaseResultMessage,
  randomNumberMessage,
  returnRateMessage,
  winningResultMessage,
} from "../Constant/Message";

/**
 * 결과를 출력할때 보이는 뷰
 */
class OutputView {
  /**
   * 구매 결과 출력 뷰
   * @param {Number} purchaseNumber 구매 갯수
   * @param {Array} randomNumbers 랜덤 생성된 로또 번호
   */
  purchaseResultView(purchaseNumber, randomNumbers) {
    purchaseResultMessage(purchaseNumber);
    randomNumbers.forEach((randomNumber) => {
      randomNumberMessage(randomNumber);
    });
    lineBreakMessage();
  }

  /**
   * 당첨 결과 출력 뷰
   * @param {Object} winningResult 당첨 결과 객체
   * @param {Number} rate 수익률
   */
  winningResultView(winningResult, rate) {
    winningResultMessage(winningResult);
    returnRateMessage(rate);
  }
}

export default OutputView;
