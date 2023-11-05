import { MissionUtils } from "@woowacourse/mission-utils";
import { ReadMessage } from "./message.js";
import { LOTTO } from "../constants/lotto.js";
import { LottoValidate } from "./validate.js";
import { Print } from "./print.js";

const readLineAsync = async (msg) => await MissionUtils.Console.readLineAsync(msg);

// 에러 발생시 에러 메시지 출력 후 다시 진행
const errorHandlerAsync = async (callback) => {
  try {
    return await callback();
  } catch (e) {
    Print.error(e);
    return await errorHandlerAsync(callback);
  }
};

const Read = Object.freeze({
  purchaseAmount: () =>
    errorHandlerAsync(async () => {
      const purchaseAmount = Number(await readLineAsync(ReadMessage.purchaseAmount()));

      // 로또 구매 가격 유효성 체크
      LottoValidate.checkAllPurchaseAmount(purchaseAmount);
      return purchaseAmount;
    }),

  answerNumbers: () =>
    errorHandlerAsync(async () => {
      const inputs = (await readLineAsync(ReadMessage.answerNumbers())).split(",");
      const numbers = inputs.map((input) => Number(input));

      // 로또 번호 유효성 체크
      LottoValidate.checkAllLottoNumbers(numbers);
      return numbers;
    }),

  bonusNumbers: (answerNumbers) =>
    errorHandlerAsync(async () => {
      const inputs = (await readLineAsync(ReadMessage.bonusNumber())).split(",");
      const numbers = inputs.map((input) => Number(input));

      // 보너스 번호 유효성 체크
      LottoValidate.checkAllLottoNumbers(numbers, {
        count: LOTTO.BONUS_NUMBER_COUNT,
        answerNumbers,
      });
      return numbers;
    }),
});

export { Read };
