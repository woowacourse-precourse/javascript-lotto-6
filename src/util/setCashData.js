import { printMessage } from "./printMessage.js";
import enterValue from "./enterValue.js";

function unitCheck(cash) {
  if (cash % 1000 !== 0) {
    throw new Error("[ERROR] 구매 금액은 1000원 단위어야 합니다.");
  }
}

function numCheck(cash) {
  if (isNaN(cash)) {
    throw new Error("[ERROR] 숫자로 입력해 주세요.");
  }
}

function inRangeNumCheck(cash) {
  if (cash <= 0) {
    throw new Error("[ERROR] 양수값으로 입력해주세요");
  }
}

function validateCheck(cash) {
  numCheck(cash);
  unitCheck(cash);
  inRangeNumCheck(cash);
  return;
}

async function setCashData() {
  while (true) {
    try {
      const temp = await enterValue("구입금액을 입력해 주세요.", "number");
      validateCheck(temp);
      printMessage(temp / 1000 + "개를 구매했습니다.");
      return temp;
    } catch (error) {
      printMessage(error.message);
    }
  }
}
export default setCashData;
