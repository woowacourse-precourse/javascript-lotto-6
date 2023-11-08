import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

export async function getMoney() {
  let moneyInput = 0;

  while (true) {
    moneyInput = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    try {
      validateGetMoney(moneyInput);
      break;
    } catch (error) {
      Console.print(error.message);
    }
  }
  return Number(moneyInput);
}

export function makeLottos(count) {
  const lottos = [];
  Console.print(`\n${count}개를 구매했습니다.`);
  for (let i = 0; i < count; i++) {
    const makeLottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    makeLottoNumbers.sort((a, b) => a - b);
    const lotto = new Lotto(makeLottoNumbers);
    lottos.push(lotto);
  }
  return lottos;
}

export async function getWinLottoInput() {
  let winLottoNumbers = [];
  while (true) {
    const winLottoInput = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    winLottoNumbers = winLottoInput.split(",");
    try {
      validateWinLottoInput(winLottoNumbers);
      break;
    } catch (error) {
      Console.print(error.message);
    }
  }
  return winLottoNumbers.map(Number);
}
export async function getWinLottoBonusInput(winLottoInput) {
  let winLottoBonusNum;
  while (true) {
    winLottoBonusNum = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );
    try {
      validateWinBonusInput(winLottoInput, winLottoBonusNum);
      break;
    } catch (error) {
      Console.print(error.message);
    }
  }
  return Number(winLottoBonusNum);
}

export function validateGetMoney(money) {
  if (isNaN(Number(money))) {
    throw new Error("[ERROR] 숫자를 입력하세요");
  }

  if (Number(money) % 1000 !== 0) {
    throw new Error("[ERROR] 1000원 단위로 입력하세요");
  }
}

export function validateWinLottoInput(numbers) {
  if (numbers.length !== 6) {
    throw new Error("[ERROR] 로또 번호는 6개여야 합니다");
  }
  if (new Set(numbers).size !== 6) {
    throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다");
  }
  for (let number of numbers) {
    if (isNaN(number) || number < 1 || number > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }
}

export function validateWinBonusInput(numbers, bonusNum) {
  const parsedNumber = Number(bonusNum); // 문자열을 숫자로 변환
  if (String(parsedNumber) !== bonusNum) {
    // 입력된 값이 숫자로 제대로 변환되었는지 확인
    throw new Error("[ERROR] 숫자를 입력해 주세요.");
  }
  if (parsedNumber < 1 || parsedNumber > 45) {
    throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
  }
  if (numbers.includes(parsedNumber)) {
    throw new Error("[ERROR] 보너스 번호는 로또 번호와 중복되면 안 됩니다.");
  }
}

export function getResult(lottos, numbers, bonusNumber) {
  const totalStatistics = [0, 0, 0, 0, 0];

  const lottoCnt = lottos.length;
  for (let i = 0; i < lottoCnt; i++) {
    const lottoResult = lottos[i].getCorrectNumberCount(numbers, bonusNumber);
    countStatistics(lottoResult, totalStatistics);
  }
  return totalStatistics;
}

export function countStatistics(totalResult, totalStatistics) {
  if (totalResult[0] === 6) {
    totalStatistics[0]++;
    return;
  }
  if (totalResult[0] === 5 && totalResult[1] === 1) {
    totalStatistics[1]++;
    return;
  }
  if (totalResult[0] === 5) {
    totalStatistics[2]++;
    return;
  }
  if (totalResult[0] === 4) {
    totalStatistics[3]++;
    return;
  }
  if (totalResult[0] === 3) {
    totalStatistics[4]++;
    return;
  }
}

export function getStatistics(money, totalStatistics) {
  const result = totalStatistics;
  const earningRate = getEarningRate(money, totalStatistics);
  Console.print("\n당첨 통계");
  Console.print("---");
  Console.print(`3개 일치 (5,000원) - ${result[4]}개`);
  Console.print(`4개 일치 (50,000원) - ${result[3]}개`);
  Console.print(`5개 일치 (1,500,000원) - ${result[2]}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[1]}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${result[0]}개`);
  Console.print(`총 수익률은 ${earningRate}%입니다.`);
}

export function getEarningRate(money, totalStatistics) {
  const result = totalStatistics;
  const earningRate = (
    ((5_000 * result[4] +
      50_000 * result[3] +
      1_500_000 * result[2] +
      30_000_000 * result[1] +
      2_000_000_000 * result[0]) /
      money) *
    100
  ).toFixed(1);
  return earningRate;
}
