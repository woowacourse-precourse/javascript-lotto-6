import enterValue from "./enterValue.js";
import { printMessage } from "./printMessage.js";

function numCheck(bonusNumber) {
  if (isNaN(bonusNumber)) {
    throw new Error("[ERROR] 숫자로 입력해 주세요.");
  }
}

function duplicateCheck(bonusNumber, prizeNumberArr) {
  if (prizeNumberArr.includes(String(bonusNumber))) {
    throw new Error("[ERROR] 중복되지 않은 번호로 입력해 주세요.");
  }
}
function inRangeNumCheck(bonusNumber) {
  if (bonusNumber > 45 || bonusNumber < 1) {
    throw new Error("[ERROR] 1~45 값으로 입력해주세요.");
  }
}
function validateCheck(bonusNumber, prizeNumberArr) {
  numCheck(bonusNumber);
  duplicateCheck(bonusNumber, prizeNumberArr);
  inRangeNumCheck(bonusNumber);
}

async function setBonusNumber(prizeNumberArr) {
  while (true) {
    try {
      const bonusNumber = // 7;
        await enterValue("보너스 번호를 입력해 주세요", "number");
      validateCheck(bonusNumber, prizeNumberArr);
      return bonusNumber;
    } catch (error) {
      printMessage(error.message);
    }
  }
}
export default setBonusNumber;
