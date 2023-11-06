import { MissionUtils } from "@woowacourse/mission-utils";

async function purchaseAmountSave() {
  try {
    const purchaseAmount = await MissionUtils.Console.readLineAsync("");
  } catch (error) {}
}

export default purchaseAmountSave;
