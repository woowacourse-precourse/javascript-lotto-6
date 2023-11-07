import * as constants from "./constants.js";

export const checkInputNumberType = (input) => {
  if (!typeof input === "string" || isNaN(input)) throw new Error("[ERROR]숫자가 아닙니다.");
};

export const checkWinNumbersType = (input) => {
  if (typeof input !== "string") throw new Error("[ERROR]입려된 값이 잘못되었습니다.");
  const inputArray = input.split(",");
  if (inputArray.length !== 6) throw new Error("[ERROR]6개만 입력");
  for (let a of inputArray) {
    if (isNaN(a) || 1 > Number(a) || 45 < Number(a)) throw new Error("[ERROR]잘못된 값 입력");
  }
  if ([...new Set(inputArray)].length !== inputArray.length) throw new Error("[ERROR]잘못된 값 읿력 ");
};

export const checkWonUnit = (inputMoney) => {
  checkInputNumberType(inputMoney);
  if (inputMoney % constants.validPer !== 0) throw new Error("[ERROR]1000원 단위가 아닙니다. ");
};

export const checkBonusNumber = (number) => {
  checkInputNumberType(number);
  if (1 > number || 45 < number) throw newError("[ERROR]1~45 범위의 숫자를 입력하세요");
};
