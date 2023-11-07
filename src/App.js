import { MissionUtils } from "@woowacourse/mission-utils";
import lottoAmountSentence from "./utils/LottoAmountSentence.js";
import lottoAmountCount from "./utils/lottoAmountCount.js";
import purchaseAmountSave from "./utils/purchaseAmountSave.js";
import winningNumbers from "./utils/winningNumbers.js";
import bonusNumber from "./utils/bonusNumber.js";
import winningResult from "./utils/winningResult.js";
import mathcedCount from "./utils/matchedCount.js";
import winningStatisticsFinalSentence from "./utils/winningStaticsFinalSentnece.js";
class App {
  async play() {
    const PURCHASE_AMOUNT = await purchaseAmountSave();
    await lottoAmountSentence(PURCHASE_AMOUNT);
    const PURCHASE_LOTTOS = await purchaseLottosNumber(PURCHASE_AMOUNT);
    const WINNING_NUMBERS = await winningNumbers();
    const BONUSNUMBER = await bonusNumber();
    const WINNING_MACHEDRESULT = await LottosNumbersMatchWinningNumbers(
      PURCHASE_LOTTOS,
      WINNING_NUMBERS
    );
    const BONUS_MATCHEDRESULT = await LottosNumberMatchBonusNumber(
      PURCHASE_LOTTOS,
      BONUSNUMBER
    );
    winningResult(WINNING_MACHEDRESULT, BONUS_MATCHEDRESULT);
    winningStatistics(
      PURCHASE_AMOUNT,
      WINNING_MACHEDRESULT,
      BONUS_MATCHEDRESULT
    );
  }
}

async function purchaseLottosNumber(purchaseAmount) {
  const LOTTOS_AMOUNT = await lottoAmountCount(purchaseAmount);
  const LOTTOS_NUMBER = {};
  for (let i = 0; i < LOTTOS_AMOUNT; i++) {
    LOTTOS_NUMBER[`lottos${i}`] = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      45,
      6
    ).sort((a, b) => a - b);

    MissionUtils.Console.print(LOTTOS_NUMBER[`lottos${i}`]);
  }
  return LOTTOS_NUMBER;
}

async function LottosNumbersMatchWinningNumbers(lottosNumber, winningNumbers) {
  const WINNING_RESULT = {};
  for (const key of Object.keys(lottosNumber)) {
    const lottoNumber = lottosNumber[key];
    WINNING_RESULT[key] = matchWinningProcess(lottoNumber, winningNumbers);
  }
  return WINNING_RESULT;
}

function matchWinningProcess(arrayOne, arrayTwo) {
  let count = 0;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayTwo.includes(arrayOne[i])) {
      count++;
    }
  }
  return count;
}

async function LottosNumberMatchBonusNumber(lottosNumber, bonusNumber) {
  const BONUS_RESULT = {};
  for (const key of Object.keys(lottosNumber)) {
    const lottoNumber = lottosNumber[key];
    BONUS_RESULT[key] = matchBonusProcess(lottoNumber, bonusNumber);
  }
  return BONUS_RESULT;
}

function matchBonusProcess(arrayOne, number) {
  return arrayOne.includes(number);
}

async function winningStatistics(
  purchaseAmout,
  winningMatchedResult,
  bonusMatchedResult
) {
  const totalMoney = winningMoney(winningMatchedResult, bonusMatchedResult);
  const rateOfReturn = Math.round(totalMoney / purchaseAmout) * 100;
  winningStatisticsFinalSentence(rateOfReturn);
  return rateOfReturn;
}

function winningMoney(winningMatchedResult, bonusMatchedResult) {
  let result = {
    three: 0,
    four: 0,
    five: 0,
    fiveAndBonus: 0,
    six: 0,
  };

  for (const key in winningMatchedResult) {
    mathcedCount(winningMatchedResult[key], bonusMatchedResult[key], result);
  }

  const TOTAL_GETMONEY =
    result.three * 5000 +
    result.four * 50000 +
    result.five * 1500000 +
    result.fiveAndBonus * 30000000 +
    result.six * 2000000000;

  console.log(TOTAL_GETMONEY);

  return TOTAL_GETMONEY;
}

export default App;
