import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { Counter } from "./Counter.js";
import { Bonus } from "./Bonus.js";
import { Winning } from "./Winning.js";

class App {
  async play() {
    const lottoCounts = await inputMoney();
    lottoCountPrinter(lottoCounts);
    lottoPrinter(lottoCounts);
    const winningNumbers = await inputWinningNumber();
    MissionUtils.Console.print("");
    const bonusNumber = await inputBonusNumber(winningNumbers);
    MissionUtils.Console.print("");
  }
}

export default App;

const PURCASE_COMMENT = "구입금액을 입력해 주세요."
const WINNING_NUMBER_COMMENT = "당첨 번호를 입력해 주세요.";
const BONUS_NUMBER_COMMENT = "보너스 번호를 입력해 주세요.";
//const LOTTO_PRICE = 1000;

async function inputMoney() {
  let comment = PURCASE_COMMENT;
  MissionUtils.Console.print(comment);
  const totalMoney = await MissionUtils.Console.readLineAsync('');
  const counter = new Counter(totalMoney);
  const lottoCounts = counter.lottoCounter();
  return lottoCounts;
}

async function inputWinningNumber() {
  let comment = WINNING_NUMBER_COMMENT;
  MissionUtils.Console.print("");
  MissionUtils.Console.print(comment);
  const winningNumber = await MissionUtils.Console.readLineAsync('');
  const winningSplitNumber = winningNumberSpliter(winningNumber);
  const winning = new Winning(winningSplitNumber);
  return winning.winningNumbers();
}

async function inputBonusNumber(winningNumbers) {
  let comment = BONUS_NUMBER_COMMENT;
  MissionUtils.Console.print(comment);
  const bonusNumber = await MissionUtils.Console.readLineAsync('');
  const bonus = new Bonus(bonusNumber,winningNumbers);
  return bonus.bonusNumber();
}

function lottoCountPrinter(counts) {
  MissionUtils.Console.print("");
  MissionUtils.Console.print(`${counts}개를 구매했습니다.`);
}

export function winningNumberSpliter(input) {
  const winningNumberSplit = input.split(',');
  return winningNumberSplit;
}

function lottoPrinter(counts) {
  for (let i = 0; i < counts; i++) {
    MissionUtils.Console.print(randomNumberCreater());
  }
}

function randomNumberCreater() {
  const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  return lottoCreater(randomNumber);
}

function lottoCreater(numbers) {
  const lotto = new Lotto(numbers);
  return lotto;
}