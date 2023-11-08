import { MissionUtils } from "@woowacourse/mission-utils";

async function getLottoPriceInput() {
  try {
    MissionUtils.Console.print("구입금액을 입력해 주세요.");
    const inputPrice = await MissionUtils.Console.readLineAsync("");
    checkPriceInput(inputPrice);
    MissionUtils.Console.print("");
    return Number(inputPrice) / 1000;
  } catch (error) {
    MissionUtils.Console.print(`${error}`);
    return await getLottoPriceInput();
  }
}

export function checkPriceInput(inputPrice) {
  if (inputPrice < 1000) {
    throw new Error("[ERROR] 1000원 이상 입력하세요.");
  }
  if (isNaN(inputPrice)) {
    throw new Error("[ERROR] 숫자 형식이 아닙니다.");
  }
  if (inputPrice % 1000) {
    throw new Error("[ERROR] 구입 금액 단위는 1000원 입니다.");
  }
}

export default getLottoPriceInput;
