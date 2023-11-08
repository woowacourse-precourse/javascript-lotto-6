const isMoneyValid = (input) => {
  const numberInput = Number(input);
  if (Number.isNaN(numberInput)) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  if (input !== input.trim()) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  if (numberInput < 0) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  if (numberInput % 1000 !== 0) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
};

const isBonusValid = (input) => {
  const numberInput = Number(input);
  if (Number.isNaN(numberInput)) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  if (input !== input.trim()) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  if (numberInput < 0) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  if (numberInput < 1 || numberInput > 45) {
    throw new Error("[ERROR] 보너스 번호는 1부터 45사이의 정수이어야 합니다.");
  }
};

export { isMoneyValid, isBonusValid };
