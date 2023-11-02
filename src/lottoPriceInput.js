import { MissionUtils } from "@woowacourse/mission-utils";

const lottoPriceInput = async (answer) => {
  const price = await MissionUtils.Console.readLineAsync(answer);
  return price;
};

export default lottoPriceInput;
