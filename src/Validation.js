export const numberType = (value) => {
  if (typeof value === "number") {
    throw new Error("[ERROR] 숫자 형식으로 입력해 주세요.");
  }
};

export const amountType = (value) => {
  if (value % 1000 !== 0) {
    throw new Error("[ERROR] 1000원 단위로 입력해 주세요.");
  }
};

export const numberCounter = (numbers) => {
  if (numbers.length !== 6) {
    throw new Error("[ERROR] 로또 번호는 6개입니다.");
  }
};

export const numberRange = (value) => {
  if (value < 1 || value > 45) {
    throw new Error("[ERROR] 로또 번호는 1~45 사이의 숫자입니다.");
  }
};

export const duplicateNum = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.findIndex((v) => v === number[i]) !== i) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
  }
};

export const amountValidate = (value) => {
  numberType(Number(value));
  amountType(value);
};

export const bonusNumValidate = (bonusNum) => {
  numberType(Number(bonusNum));
  numberRange(bonusNum);
};
