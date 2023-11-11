import { MissionUtils } from "@woowacourse/mission-utils";
import {
  Message,
  FIFTH_PRIZE,
  FOURTH_PRIZE,
  THIRD_PRIZE,
  SECOND_PRIZE,
  FIRST_PRIZE,
  PRIZE,
} from "./constants/Message";
import { checkMoney, checkLottoNumbers, checkBonusNumber } from "./Validation";
import Lotto from "./Lotto";

class App {
  async play() {
    const money = await askMoney();
    MissionUtils.Console.print(`${money / 1000}개를 구매했습니다.\n`);
    const lottos = buyLotto(money);
    const userLottos = await askUserLotto();
    const bonusLotto = await askUserBonusLotto(userLottos);
    const lottoResults = calculateLottoResults(lottos, userLottos, bonusLotto);
    const prizeResults = getPrizeResult(lottoResults);
    showPrizeResult(prizeResults.prizeResult);
    showTotalPrize(money, prizeResults.totalPrize);
  }
}

const askMoney = async () => {
  let isPass = false;
  let inputMoney;
  while (!isPass) {
    try {
      inputMoney = await MissionUtils.Console.readLineAsync(Message.INIT);
      checkMoney(inputMoney);
      isPass = true;
    } catch (error) {
      MissionUtils.Console.print(error.message); //소문자이다....
    }
    return inputMoney;
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
      MissionUtils.Console.print(error.message);
    }
  }
  return lottoNumbers.split(",");
};

const askUserBonusLotto = async (userLottos) => {
  let isPass = false;
  let bonusLotto = "";
  while (!isPass) {
    try {
      bonusLotto = await MissionUtils.Console.readLineAsync(Message.BONUSINPUT);
      checkBonusNumber(bonusLotto, userLottos);
      isPass = true;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
  return bonusLotto;
};

const calculateLottoResults = (lottos, userLottos, bonusLotto) => {
  const lottoResults = [];
  for (let lotto of lottos) {
    const result = lotto.getLottoResult(userLottos, bonusLotto);
    lottoResults.push(result);
  }
  return lottoResults;
};

const getPrizeResult = (lottoResults) => {
  const result = [0, 0, 0, 0, 0];
  let totalPrize = 0;
  for (let lottoResult of lottoResults) {
    switch (lottoResult.winLottoNum) {
      case 3:
        totalPrize += FIFTH_PRIZE;
        result[0] += 1;
        break;
      case 4:
        totalPrize += FOURTH_PRIZE;
        result[1] += 1;
        break;
      case 5:
        totalPrize += lottoResult.winBonus ? SECOND_PRIZE : THIRD_PRIZE;
        lottoResult.winBonus ? (result[3] += 1) : (result[2] += 1);
        break;
      case 6:
        totalPrize += FIRST_PRIZE;
        result[4] += 1;
        break;
      default:
    }
  }
  return { prizeResult: result, totalPrize: totalPrize };
};

const showPrizeResult = (prizeResult) => {
  MissionUtils.Console.print(Message.END);
  for (let i; i < prizeResult.length; i++) {
    const comment = PRIZE[i] + `${prizeResult[i]}개\n`;
    MissionUtils.Console.print(comment);
  }
};

const showTotalPrize = (money, totalPrize) => {
  const rate = (totalPrize / money) * 100;
  MissionUtils.Console.print(`총 수익률은 ${rate.toFixed(1)}%입니다.`);
};
export default App;
