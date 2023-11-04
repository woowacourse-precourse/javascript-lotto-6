const validation = {
  inputType: (input) => {
    if (isNaN(input)) {
      throw new Error("[ERROR] 숫자를 입력해야합니다.");
    }

    if (!Number.isInteger(Number(input))) {
      throw new Error("[ERROR] 숫자는 정수이여야 합니다.");
    }
  },
  lottoNumberRange: (input) => {
    if (Number(input) < 1 || Number(input) > 45) {
      throw new Error("[ERROR] 숫자는 1부터 45 사이 입니다.");
    }
  },
  winNumEqualValue: (index, input, winNums) => {
    if (index !== winNums.indexOf(input)) {
      throw new Error("[ERROR] 중복된 숫자를 입력하면 안됩니다.");
    }
  },
  bonusNumEqualValue: (input, winNums) => {
    if (winNums.includes(input)) {
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
    if (Number(priceInput) % 1000) {
      throw new Error("[ERROR] 로또 가격은 하나당 1000원 입니다.");
    }
  },
};

function validatePriceInput(priceInput) {
  validation.inputType(priceInput);
  validation.priceRange(priceInput);
  validation.price(priceInput);

  const price = Number(priceInput) / 1000;

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
  winNums.forEach((winNum, index) => {
    validation.inputType(winNum);
    validation.lottoNumberRange(winNum);
    validation.winNumEqualValue(index, winNum, winNums);
  });
  validation.lottoNumsLength(winNums);
}

export { validatePriceInput, validateWinLottoInput };
