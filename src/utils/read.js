import { MissionUtils } from "@woowacourse/mission-utils";
import { ReadMessage } from "./message";
import { LOTTO } from "../constants/lotto";
import { LottoValidate, Validate } from "./validate";

const readLineAsync = async (msg) => await MissionUtils.Console.readLineAsync(msg);

const Read = Object.freeze({
  purchaseAmount: async () => Number(await readLineAsync(ReadMessage.purchaseAmount())),

  answerNumbers: async () => {
    const inputs = await readLineAsync(ReadMessage.answerNumbers()).split(",");
    const numbers = inputs.map((input) => Number(input));

    // 로또 번호 유효성 체크
    LottoValidate.checkAll(numbers);

    return numbers;
  },

  bonusNumbers: async () => {
    const inputs = await readLineAsync(ReadMessage.bonusNumber()).split(",");
    const numbers = inputs.map((input) => Number(input));

    // 보너스 번호 유효성 체크
    LottoValidate.checkAll(numbers, { count: LOTTO.BONUS_NUMBER_COUNT });

    return numbers;
  },
});

export { Read };
