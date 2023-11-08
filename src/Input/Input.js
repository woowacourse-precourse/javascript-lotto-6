import { Console } from "@woowacourse/mission-utils";
import Validator from "../utils/Validator";
import PRINT_MESSAGE from "../constant/PrintMessage";

const Input = {
  async lottoPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      PRINT_MESSAGE.REQUEST_PURCHASE_AMOUNT
    );
    Validator.InputPurchaseAmount(purchaseAmount);
    return purchaseAmount;
  },

  async lottoWinningNumber() {
    const winningNumber = await Console.readLineAsync(
      PRINT_MESSAGE.REQUEST_WINNING_NUMBERS
    );
    Validator.InputWinningNumber(winningNumber);
    return winningNumber;
  },

  async lottoBonusNumber(winningNumber) {
    const bonusNumber = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    return bonusNumber;
  },
};

export default Input;
