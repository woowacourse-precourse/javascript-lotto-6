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
    if (winNums.length !== 6) {
      throw new Error("[ERROR] 숫자는 6개여야 합니다.");
    }
  },
};

function validatePriceInput(priceInput) {
  validation.inputType(priceInput);

  if (Number(priceInput) <= 0) {
    throw new Error("[ERROR] 올바른 숫자 형식이 아닙니다.");
  }

  if (Number(priceInput) % 1000) {
    throw new Error("[ERROR] 로또 가격은 하나당 1000원 입니다.");
  }

  const price = Number(priceInput) / 1000;

  return price;
}

function validateWinLottoInput(winNumsInput, bonusNum) {
  let winNums = winNumsInput.replace(/\s/g, "").split(",");

  checkWinNums(winNums);
  checkBonusNum(bonusNum, winNums);

  winNums.push(bonusNum);

  winNums = winNums.map((num) => Number(num));

  return winNums;
}

function checkWinNums(winNums) {
  winNums.forEach((winNum, index) => {
    checkNumber(winNum, winNums);
    validation.winNumEqualValue(index, winNum, winNums);
  });
  validation.lottoNumsLength(winNums);
}

function checkBonusNum(bonusNum, winNums) {
  checkNumber(bonusNum);
  validation.bonusNumEqualValue(bonusNum, winNums);
}

function checkNumber(num) {
  validation.inputType(num);
  validation.lottoNumberRange(num);
}
export { validatePriceInput, validateWinLottoInput };
