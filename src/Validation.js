//TODO 당첨번호 유효성 검사, 보너스 중복 여부

export const checkInputNumberType = (input) => {
  if (!typeof input === "string" || isNaN(input)) throw new Error("[ERROR]숫자가 아닙니다.");
};

export const checkWinNumbersType = (input) => {
  //TODO switch문으로 변경
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
  if (inputMoney % 1000 !== 0) throw new Error("[ERROR]1000원 단위가 아닙니다. ");
  //TODO 상수 처리
};

export const checkBonusNumber = (number) => {
  checkInputNumberType(number);
  if (1 > number || 45 < number) throw newError("[ERROR]1~45 범위의 숫자를 입력하세요");
};
