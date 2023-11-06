import { lineBreakMessage, userInputMessage } from "../Constant/Message";
import { Console } from "@woowacourse/mission-utils";

/**
 * 유저에게 입력받을 때 보이는 뷰
 */
class InputView {
  /**
   * 구매 금액 입력 뷰
   * @returns {String} purchaseAmount 구매금액
   */
  async inputPurchase() {
    userInputMessage.purchase();
    const purchaseAmount = await Console.readLineAsync();
    lineBreakMessage();
    return purchaseAmount;
  }

  /**
   * 당첨 번호 입력 뷰
   * @returns {Array} winningNumber 당첨 번호
   */
  async inputWinningNumber() {
    userInputMessage.winningNumber();
    const winningNumber = await Console.readLineAsync().then((input) =>
      input.split(",")
    );
    lineBreakMessage();
    return winningNumber;
  }

  /**
   * 보너스 번호 입력 뷰
   * @returns {String} bonusNumber 보너스 번호
   */
  async inputBonusNumber() {
    userInputMessage.bonusNumber();
    const bonusNumber = await Console.readLineAsync();
    lineBreakMessage();
    return bonusNumber;
  }
}

export default InputView;
