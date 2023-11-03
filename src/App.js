import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    await inputMoney();
  }
}

export default App;

PURCASE_COMMENT = "구입금액을 입력해 주세요."
LOTTO_PRICE = 1000;

async function inputMoney() {
  MissionUtils.Console.print(PURCASE_COMMENT);
  const totalMoney = await MissionUtils.Console.readLineAsync('');
  return totalMoney;
}

export function lottoCounter(money) {
  const lottocounts = money/LOTTO_PRICE;
  return lottocounts
}