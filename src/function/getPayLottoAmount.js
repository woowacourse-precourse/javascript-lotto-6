import { Console } from "@woowacourse/mission-utils";

export const getPayLottoAmount = async () => {
  const lottoPurchaseAmount = await Console.readLineAsync(
    "구입금액을 입력해 주세요."
  );

  return lottoPurchaseAmount
};
