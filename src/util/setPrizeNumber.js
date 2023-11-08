import enterValue from "./enterValue.js";
import { printMessage } from "./printMessage.js";

function lengthCheck(prizeNumber) {
  if (prizeNumber.length !== 6) {
    throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
  }
}
function sameNumCheck(prizeNumber) {
  if (new Set(prizeNumber).size !== prizeNumber.length) {
    throw new Error("[ERROR] 중복된 당첨번호가 존재합니다.");
  }
}
function isNumCheck(prizeNumber) {
  for (let i = 0; i < prizeNumber.length; i++) {
    if (isNaN(prizeNumber[i])) {
      throw new Error("[ERROR] 숫자로 입력해 주세요");
    }
  }
}
function inRangeNumCheck(prizeNumber) {
  for (let i = 0; i < prizeNumber.length; i++) {
    if (Number(prizeNumber[i]) > 45 || Number(prizeNumber[i]) < 1) {
      throw new Error("[ERROR] 1~45 값으로 입력해주세요");
    }
  }
}

function validatePrizeNumber(prizeNumber) {
  isNumCheck(prizeNumber);
  lengthCheck(prizeNumber);
  sameNumCheck(prizeNumber);
  inRangeNumCheck(prizeNumber);
}

async function setPrizeNumber() {
  while (true) {
    try {
      let prizeNumber = //"1,2,3,4,5,6";
        await enterValue("당첨 번호를 입력해 주세요.", "string");
      prizeNumber = prizeNumber.split(",");
      validatePrizeNumber(prizeNumber);
      return prizeNumber;
    } catch (error) {
      printMessage(error.message);
    }
  }
}
export default setPrizeNumber;
