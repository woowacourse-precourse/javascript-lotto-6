import { MissionUtils } from "@woowacourse/mission-utils";
import { Message } from "./constants/Message";
import { checkMoney, checkLottoNumbers, checkBonusNumber } from "./Validation";
import Lotto from "./Lotto";

class App {
  async play() {
    const money = await askMoney(money);
    MissionUtils.Console.print(`${money / 1000}개를 구매했습니다.\n`);
    const lottos = buyLotto(money);
    const userLottos = await askUserLotto();
  }
}

const askMoney = async () => {
  let isPass = false;
  let money = 0;
  while (!isPass) {
    try {
      money = await MissionUtils.Console.readLineAsync(Message.INIT);
      checkMoney(money);
      isPass = true;
    } catch (error) {
      MissionUtils.Console.print(error.Message);
    }
    return money;
  }
};

const buyLotto = (money) => {
  const lottos = [];
  const buyLottoNum = money / 1000;
  for (let i = 0; i < buyLottoNum; i++) {
    const randomNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const lotto = new Lotto(randomNum);
    lottos.push(lotto);
    MissionUtils.Console.print(
      `[${lotto.getNumbers().toString().replaceAll(",", ", ")}]\n`
    );
  }
  return lottos;
};
const askUserLotto = async () => {
  let isPass = false;
  let lottoNumbers = "";
  while (!isPass) {
    try {
      lottoNumbers = await MissionUtils.Console.readLineAsync(
        Message.LOTTOINPUT
      );
      checkLottoNumbers(lottoNumbers);
      isPass = true;
    } catch (error) {
      MissionUtils.Console.print(error.Message);
    }
  }
  return lottoNumbers.split(",");
};

export default App;
