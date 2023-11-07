import { MissionUtils } from "@woowacourse/mission-utils";
import lottoAmountSentence from "./utils/LottoAmountSentence.js";
import lottoAmountCount from "./utils/lottoAmountCount.js";
import purchaseAmountSave from "./utils/purchaseAmountSave.js";
import winningNumbers from "./utils/winningNumbers.js";
import bonusNumber from "./utils/bonusNumber.js";
import winningResult from "./utils/winningResult.js";

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

export default App;
