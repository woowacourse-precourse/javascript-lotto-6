import { Console } from "@woowacourse/mission-utils";
import Messages from "../common/messages.js";
import validateWinningLotto from "../util/validateWinningLotto.js";
import ErrorMessages from "../common/errorMessages.js";

const printWinningLotto = async () => {
  while (true) {
    try {
      const winningLotto = await Console.readLineAsync(
        Messages.GET_WINNING_LOTTO_MESSAGE
      );
      const lottoNumbers = winningLotto.split(",").map(Number);

      if (validateWinningLotto(lottoNumbers)) return lottoNumbers;
      throw new Error(ErrorMessages.WINNING_LOTTO_ERROR_MESSAGE);
    } catch (error) {
      Console.print(ErrorMessages.WINNING_LOTTO_ERROR_MESSAGE);
    }
  }
};

export default printWinningLotto;
