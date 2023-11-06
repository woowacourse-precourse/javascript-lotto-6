import { MissionUtils } from "@woowacourse/mission-utils";
import { Counter } from "./Counter.js";
import { Bonus } from "./Bonus.js";
import { Winning } from "./Winning.js";
import { model } from "./Model.js";
import { Results } from "./Results.js";

class App {
  constructor() {
    this.counter = null;
    this.winning = null;
    this.bonus = null;
    this.results = null;
  }

  async play() {
    await this.inputMoney();
  }

  async inputMoney() {
    let comment = PURCASE_COMMENT;
    MissionUtils.Console.print(comment);

    const totalMoney = await MissionUtils.Console.readLineAsync('');
    this.callCounter(totalMoney);

    this.inputWinningNumber();
  }

  callCounter(money) {
    this.counter = new Counter(money);
    const lottoCounts = this.counter.lottoCounter();
    model.counts = lottoCounts;

    this.counter.lottoCountPrinter(lottoCounts);
    this.counter.lottosPrinter();
  }

  async inputWinningNumber() {
    this.winningNumberComment();

    const winningNumber = await MissionUtils.Console.readLineAsync('');
    const winningSplitNumber = winningNumberSpliter(winningNumber);
    this.winning = new Winning(winningSplitNumber);
    const winning = this.winning.winningNumbers();
    model.winningNumber = winning;

    this.inputBonusNumber(winning, model.counts);
  }

  async inputBonusNumber(winning, counts) {
    this.bonusNumberComment();

    const bonusNumber = await MissionUtils.Console.readLineAsync('');
    this.bonus = new Bonus(bonusNumber, winning);
    const bonus = this.bonus.bonusNumber();
    model.bonus = bonus;

    this.callResults(winning, bonus, counts)
  }

  callResults(winning, bonus, counts) {
    MissionUtils.Console.print("");
    this.results = new Results(model.lottoNumbers, winning, bonus, counts)
  }

  winningNumberComment() {
    let comment = WINNING_NUMBER_COMMENT;
    MissionUtils.Console.print("");
    MissionUtils.Console.print(comment);
  }

  bonusNumberComment() {
    let comment = BONUS_NUMBER_COMMENT;
    MissionUtils.Console.print("");
    MissionUtils.Console.print(comment);
  }
}

export default App;

const PURCASE_COMMENT = "구입금액을 입력해 주세요."
const WINNING_NUMBER_COMMENT = "당첨 번호를 입력해 주세요.";
const BONUS_NUMBER_COMMENT = "보너스 번호를 입력해 주세요.";

const winningDetails = {
  same : [3, 4, 5, 5, 6],
  sameAndBounus : [3, 4, [5,0], [5,1], 6],
  prize : [5000, 50000, 1500000, 30000000, 2000000000],
  winning : [0,0,0,0,0],
  totalPrize : 0,
  counts : 0
}

var winningResults = [];

var lottoNumbers = [];

export function winningNumberSpliter(input) {
  const winningNumberSplit = input.split(',');
  return winningNumberSplit;
}

export function lottoPrinter(counts) {
  for (let i = 0; i < counts; i++) {
    MissionUtils.Console.print(randomNumberCreater());
  }
}

function lottosReader(lotto, winning, bonus, count) {
  for (let i = 0; i < count; i++) {
    const result = lottoReader(lotto[i], winning, bonus)
    winningResults.push(result);
  }
}

export function lottoReader(lotto, winning, bonus) {
  const sameNumbers = winning.filter(number => lotto.includes(number))
  const sameBonus = lotto.includes(bonus);
  if (sameBonus === false) {
    return [sameNumbers.length, 0];
  }
  return [sameNumbers.length, 1];
}

export function lottoResultsPrinter(results) {
  for (let i = 0; i < results.length; i++) {
    const prize = winningDetails.prize[i]
    const currencyPrize = formatCurrency(prize);
    if (i === 3) {
      MissionUtils.Console.print(
        `${winningDetails.same[i]}개 일치, 보너스 볼 일치 (${currencyPrize}원) - ${results[i]}개`
      );
    } else {
      MissionUtils.Console.print(
        `${winningDetails.same[i]}개 일치 (${currencyPrize}원) - ${results[i]}개`
      );
    }
  }
  totalRate(winningDetails.counts*1000, winningDetails.totalPrize);
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