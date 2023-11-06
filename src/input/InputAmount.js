import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constant/Log.js";
import { validateAmount } from "../validator/ValidateAmount.js";

async function InputAmount() {
  const amountStr = await MissionUtils.Console.readLineAsync(
    INPUT_MESSAGE.amount
  );
  const amount = Number(amountStr);
  validateAmount(amount);
  return amount;
}

export default InputAmount;
