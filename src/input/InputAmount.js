import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constant/printConstant.js";
async function InputAmount() {
  let amount = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.amount);
  return amount;
}
export default InputAmount;
