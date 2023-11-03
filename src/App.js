import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    await inputMoney();
  }
}

export default App;

const PURCASE_COMMENT = "구입금액을 입력해 주세요."
const LOTTO_PRICE = 1000;

async function inputMoney() {
  let comment = PURCASE_COMMENT;
  MissionUtils.Console.print(comment);
  const totalMoney = await MissionUtils.Console.readLineAsync('');
  return totalMoney;
}

export function lottoCounter(money) {
  let price = LOTTO_PRICE;
  const lottocounts = money/price;
  return lottocounts
}
    
export async function inputMoneyValidater(input) {
  if (/^[+]?[1-9]\d*$/.test(input)) {
    return Number(input);
  } 
  throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
}

export async function inputMoneyDivideValidater(input) {
  let price = LOTTO_PRICE;
  if (input%price !== 0) {
    throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력 가능합니다.");
  }
}

export function winningNumberSpliter(input) {
  const winningNumberSplit = input.split(',');
  return winningNumberSplit;
}