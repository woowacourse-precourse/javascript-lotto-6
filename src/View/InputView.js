import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/message.js";

const InputView = {
  async readLottoPurchaseAmount() {
    const lottoPurchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.lottoPurchaseAmount);
    return Number(lottoPurchaseAmount);
  },

  async readLottoWinningNumbers() {
    const lottoWinningNumbers = await Console.readLineAsync(INPUT_MESSAGE.lottoWinningNumbers);
    return lottoWinningNumbers.split(",").reduce((numbers, number) => {
      const trimmedNumber = number.trim();
      if (trimmedNumber !== "") numbers.push(Number(trimmedNumber));
      return numbers;
    }, []);
  },

  async readBonousNumber() {
    const bonousNumber = await Console.readLineAsync(INPUT_MESSAGE.lottoBonousNumber);
    return Number(bonousNumber);
  },
};

export default InputView;
