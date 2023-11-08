import PrizeResult from "./../type/prizeResult.js";
import counting from "./counting.js";

async function calculateResult(lottos, prizeNumberArr, bonusNumber) {
  let result = new PrizeResult();
  for (let i = 0; i < lottos.length; i++) {
    const count = counting(lottos[i], prizeNumberArr);
    if (count === 1 || count === 2 || count === 0) {
      continue;
    }
    if (count === 5 && lottos[i].returnNumber().includes(bonusNumber)) {
      result.result[count - 1] += 1;
      continue;
    }
    result.result[count - 3] += 1;
  }
  return result;
}

export default calculateResult;
