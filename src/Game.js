import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

export async function getMoney() {
  let validateGetMoney = false;
  let moneyInput = 0;

  while (!validateGetMoney) {
    try {
      moneyInput = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      if (isNaN(Number(moneyInput))) {
        throw new Error("[ERROR]");
      }

      if (Number(moneyInput) % 1000 !== 0) {
        throw new Error("[ERROR]");
      }
      validateGetMoney = true;
    } catch (error) {
      Console.print("[ERROR]");
    }
  }
  return Number(moneyInput) / 1000;
}

export function makeLottos(count) {
  Console.print(`\n${count}개를 구매했습니다.`);
  for (let i = 0; i < count; i++) {
    const makeLottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    makeLottoNumbers.sort((a, b) => a - b);
    const lotto = new Lotto(makeLottoNumbers);
  }
}

export async function getUserLottoInput() {
  let userLottoNumbers = [];
  while (true) {
    const userLottoInput = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    const userLottoNumbers = userLottoInput.split(",");
    try {
      validateUserLottoInput(userLottoNumbers);
      break;
    } catch (error) {
      Console.print(error.message);
    }
  }
  let userLottoBonusNum;
  while (true) {
    const userLottoBonusNum = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );
    try {
      validateUserBonusInput(userLottoBonusNum);
      break;
    } catch (error) {
      Console.print(error.message);
    }
  }
  return {
    numbers: userLottoNumbers.map(Number),
    bonusNumber: Number(userLottoBonusNum),
  };
}

export function validateUserLottoInput(numbers) {
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

export function validateUserBonusInput(number) {
  const parsedNumber = Number(number); // 문자열을 숫자로 변환
  if (String(parsedNumber) !== number) {
    // 입력된 값이 숫자로 제대로 변환되었는지 확인
    throw new Error("[ERROR] 숫자를 입력해 주세요.");
  }
  if (number.length !== 1) {
    throw new Error("[ERROR] 보너스 번호는 1개여야 합니다.");
  }
  if (parsedNumber < 1 || parsedNumber > 45) {
    throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
  }
}
