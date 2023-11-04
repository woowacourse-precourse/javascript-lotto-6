import { Console } from "@woowacourse/mission-utils";
import { inputMessage } from "../constants/messages.js";
import Lotto from "../Lotto.js";

export const getLottoNumber = async () => {
  const input = await Console.readLineAsync(inputMessage.LOTTO_MESSAGE);
  const lottoArray = input.split(",").map(Number);

  const lotto = new Lotto(lottoArray);
  return lotto;
};
