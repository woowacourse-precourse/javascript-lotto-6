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
    lottoResultPrinter([5,0], 2)
  }
}

export default App;

const PURCASE_COMMENT = "구입금액을 입력해 주세요."
const WINNING_NUMBER_COMMENT = "당첨 번호를 입력해 주세요.";
const BONUS_NUMBER_COMMENT = "보너스 번호를 입력해 주세요.";
//const LOTTO_PRICE = 1000;
const winningDetails = {
   same : [3, 4, [5,0], [5,1], 6],
   prize : [5000, 50000, 1500000, 30000000, 2000000000]
}

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
  const sortLotto = numberSort(lotto);
  return sortLotto;
}

export function numberSort(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers;
}

export function lottoReader(lotto, winning, bonus) {
  const sameNumbers = winning.filter(number => lotto.includes(number))
  const sameBonus = lotto.includes(bonus);
  if (sameBonus === false) {
    return [sameNumbers.length, 0];
  }
  return [sameNumbers.length, sameBonus.length];
}

export function lottoResultPrinter(results, count) {
  const indexNumber = findIndexBySameValue(results)
  const prize = winningDetails.prize[indexNumber];
  const currencyPrize = formatCurrency(prize);
  if (indexNumber !== 3) {
    MissionUtils.Console.print(`${results[0]}개 일치 (${currencyPrize}원) - ${count}개`);
  }
  if (indexNumber === 3) {
    MissionUtils.Console.print(`${results[0]}개 일치, 보너스 볼 일치 (${currencyPrize}원) - ${count}개`);
  }
}

function findIndexBySameValue(valueToFind) {
  const sameValues = winningDetails.same;
  if (valueToFind[0] === 5) {
    const index = findIndexByBonus(valueToFind);
    return index;
  }
  for (let i = 0; i < sameValues.length; i++) {
    if (sameValues[i] === valueToFind[0]) {
      return i;
    }
  }
}

function findIndexByBonus(valueToFind) {
  const sameValues = winningDetails.same;
  if (sameValues[2][1] === valueToFind[1]) {
    //console.log(valueToFind);
    return 2;
  }
  if (sameValues[3][1] === valueToFind[1]) {
    return 3;
  }
}

function formatCurrency(number) {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  minimumFractionDigits: 0,  // 소수점 이하 자릿수 설정
  }).format(number).replace(/₩/g, '');
}

export function totalRate(money, prize) {
  const roundedRate = calculateRate(money, prize);
  MissionUtils.Console.print(`총 수익률은 ${roundedRate}%입니다.`);
}

function calculateRate(money, prize) {
  const rate = (prize / money) * 100;
  const roundedRate = rate.toFixed(2);
  return Number(roundedRate);
}