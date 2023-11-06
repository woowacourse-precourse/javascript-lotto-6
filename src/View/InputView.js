import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/message.js";

const InputView = {
  async readLottoPurchaseAmount() {
    const lottoPurchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.lottoPurchaseAmount);
    return Number(lottoPurchaseAmount);
  },

  async readLottoWinningNumbers() {
    const lottoWinningNumbers = await Console.readLineAsync(INPUT_MESSAGE.lottoWinningNumbers);
    return lottoWinningNumbers;
  },

  async readBonousNumber() {
    const bonousNumber = await Console.readLineAsync(INPUT_MESSAGE.lottoBonousNumber);
    return bonousNumber;
  },
};

export default InputView;
