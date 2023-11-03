import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    await inputMoney();
  }
}

export default App;

async function inputMoney() {
  const PURCASE_COMMENT = "구입금액을 입력해 주세요."
  MissionUtils.Console.print(PURCASE_COMMENT);
  const totalMoney = await MissionUtils.Console.readLineAsync('');
  return totalMoney;
}

export function lottoCounter(money) {
  const LOTTO_PRICE = 1000;
  const lottocounts = money/LOTTO_PRICE;
  return lottocounts
}