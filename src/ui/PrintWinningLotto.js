import { Console } from "@woowacourse/mission-utils";

import Messages from "../common/messages.js";

const printWinningLotto = async () => {
  let winningLotto = await Console.readLineAsync(
    Messages.GET_WINNING_LOTTO_MESSAGE
  );
  const lottoNumbers = winningLotto.split(",").map(Number);

  return lottoNumbers;
};

export default printWinningLotto;
