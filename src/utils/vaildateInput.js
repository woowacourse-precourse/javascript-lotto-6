import { LOTTO } from "./Constant.js";

const validation = Object.freeze({
  inputType: (input) => {
    if (isNaN(input)) {
      throw new Error("[ERROR] 숫자를 입력해야합니다.");
    }

    if (!Number.isInteger(Number(input))) {
      throw new Error("[ERROR] 숫자는 정수이여야 합니다.");
    }

    if (input.length === 0) {
      throw new Error("[ERROR] 값을 입력해 주세요");
    }
  },
  lottoNumberRange: (input) => {
    if (Number(input) < LOTTO.startNum || Number(input) > LOTTO.endNum) {
      throw new Error("[ERROR] 숫자는 1부터 45 사이 입니다.");
    }
  },
  winNumEqualValue: (winNums) => {
    if (winNums.size !== 7) {
      throw new Error("[ERROR] 중복된 숫자를 입력하면 안됩니다.");
    }
  },

  lottoNumsLength: (winNums) => {
    if (winNums.length !== 7) {
      throw new Error("[ERROR] 보너스 숫자까지 합해 갯수는 7개여야 합니다.");
    }
  },

  priceRange: (priceInput) => {
    if (Number(priceInput) <= 0) {
      throw new Error("[ERROR] 올바른 숫자 형식이 아닙니다.");
    }
  },

  price: (priceInput) => {
    if (Number(priceInput) % LOTTO.price) {
      throw new Error("[ERROR] 로또 가격은 하나당 1000원 입니다.");
    }
  },
});

function validatePriceInput(priceInput) {
  validation.inputType(priceInput);
  validation.priceRange(priceInput);
  validation.price(priceInput);

  const price = Number(priceInput) / LOTTO.price;

  return price;
}

function validateWinLottoInput(winNumsInput, bonusNum) {
  let winNums = winNumsInput.replace(/\s/g, "").split(",");
  winNums.push(bonusNum);

  checkWinNums(winNums);

  winNums = winNums.map((num) => Number(num));

  return winNums;
}

function checkWinNums(winNums) {
  winNums.forEach((winNum) => {
    validation.inputType(winNum);
    validation.lottoNumberRange(winNum);
  });

  validation.lottoNumsLength(winNums);
  validation.winNumEqualValue(new Set(winNums));
}

export { validatePriceInput, validateWinLottoInput };
