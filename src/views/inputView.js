import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../lib/constants/message.js";
import WORD from "../lib/constants/word.js";

const InputView = {
  async inputPayment() {
    return Number(await Console.readLineAsync(GAME_MESSAGE.PAYMENT_INPUT));
  },

  async inputLotto() {
    const lottoStringNumber = await Console.readLineAsync(
      GAME_MESSAGE.LOTTO_INPUT
    );
    return lottoStringNumber
      .split(WORD.DELIMITER)
      .map((value) => Number(value));
  },

  async inputLottoBonus() {
    const bonuStringNumber = await Console.readLineAsync(
      GAME_MESSAGE.LOTTO_BONUS_INPUT
    );
    return Number(bonuStringNumber);
  },
};

export default InputView;
