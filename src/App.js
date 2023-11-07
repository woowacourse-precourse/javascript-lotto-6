import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import InputPrice from "./InputPrice.js";
import InputBonus from "./InputBonus.js";

class App {
  async play() {
    const budgetInput = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    const budgetPrice = new InputPrice(budgetInput);
    budgetPrice.validate(budgetInput)
    const numLotto = budgetPrice.calculateLottoCount(budgetInput);
    Console.print("");

    const randomLottoArr = printLotto(numLotto);

    const lottoInput = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const lottoNumber = lottoInput.split(",");
    const lotto = new Lotto(lottoNumber);
    lotto.getValidate();

    Console.print("");
    const bonusInput = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    const bonus = new InputBonus(bonusInput, lottoNumber);
    bonus.validate(bonusInput, lottoNumber);
    Console.print("");

    const matchList = matchLotto(randomLottoArr, lottoNumber, bonusInput);
    const resultList = matchResult(matchList);
    printResult(resultList, budgetInput);
  }
}

// 랜덤 로또 번호 생성
function makeLotto() {
  const randomLotto = Random.pickUniqueNumbersInRange(1, 45, 6);
  randomLotto.sort((a, b) => a - b);
  return randomLotto;
}

// 랜덤 로또 번호 출력과 저장
function printLotto(numLotto) {
  Console.print(String(numLotto) + "개를 구매했습니다.")
  const randomLottoArr = []
  for (let i = 0; i < numLotto; i++) {
    const lottoNumbers = makeLotto();
    Console.print("[" + lottoNumbers.join(", ") + "]");
    randomLottoArr.push(lottoNumbers);
  }
  Console.print("");
  return randomLottoArr;
}

function matchLotto(randomLottoArr, lotto, bonus) {
  const matchList = []
  for (let i = 0; i < randomLottoArr.length; i++) {
    matchList.push(matchLottoNumber(randomLottoArr[i], lotto, bonus))
  }
  return matchList;
}

function matchLottoNumber(randomLottoArr, lotto, bonus) {
  const match = { lottoMatch: 0, bonusMatch: 0 }
  for (let i = 0; i < 6; i++) {
    if (randomLottoArr.includes(parseInt(lotto[i]))) {
      match["lottoMatch"]++;
    }
  }
  if (match["lottoMatch"] === 5) {
    if (randomLottoArr.includes(parseInt(bonus))) {
      match["bonusMatch"] = 1;
    }
  }
  return match;
}

const getLottoMatch = (arr, el) => arr.filter(value => value["lottoMatch"] === el).length;
const getBonusMatch = (arr, el) => arr.filter(value => value["bonusMatch"] === el).length;

function matchResult(matchList) {
  const matchFifth = getLottoMatch(matchList, 3);
  const matchFourth = getLottoMatch(matchList, 4);
  const matchSecond = getBonusMatch(matchList, 1);
  const matchThird = getLottoMatch(matchList, 5) - matchSecond;
  const matchFirst = getLottoMatch(matchList, 6);

  return [matchFifth, matchFourth, matchThird, matchSecond, matchFirst];
}

function printResult(resultList, budget) {
  Console.print("당첨 통계");
  Console.print("---");
  Console.print("3개 일치 (5,000원) - " + resultList[0] + "개");
  Console.print("4개 일치 (50,000원) - " + resultList[1] + "개");
  Console.print("5개 일치 (1,500,000원) - " + resultList[2] + "개");
  Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - " + resultList[3] + "개");
  Console.print("6개 일치 (2,000,000,000원) - " + resultList[4] + "개");

  const profit = 5000 * resultList[0] + 50000 * resultList[1] + 1500000 * resultList[2] + 30000000 * resultList[3] + 2000000000 * resultList[4];
  const profitRate = profit / budget * 100;
  Console.print("총 수익률은 " + profitRate + "%입니다.");
}

export default App;
