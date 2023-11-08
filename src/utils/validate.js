import { GAME, ERROR } from "../constant/GameConfig.js";

function validPurchaseAmountMinimun(amount) {
  if (amount < GAME.settings.unit) {
    throw new Error(ERROR.purchase.minimunAmount);
  }
}

function validPurchaseAmountNumeric(amount) {
  if (isNaN(amount)) {
    throw new Error(ERROR.purchase.numeric);
  }
}

function validAmountUnit(amount) {
  if (amount % GAME.settings.unit !== 0) {
    throw new Error(ERROR.purchase.amountUnit);
  }
}

function validLottoLength(numbers) {
  if (numbers.length !== GAME.settings.numberLength) {
    throw new Error(ERROR.lotto.length);
  }
}

function validLottoRange(numbers) {
  for (const number of numbers) {
    if (!(GAME.settings.minNumber <= number && number <= GAME.settings.maxNumber)) {
      throw new Error(ERROR.lotto.numberRange);
    }
  }
}

function validLottoNumeric(numbers) {
  for (const number of numbers) {
    if (typeof number !== "number" || Number.isNaN(number)) {
      throw new Error(ERROR.lotto.numeric);
    }
  }
}

function validLottoDuplicates(numbers) {
  if (new Set(numbers).size !== numbers.length) {
    throw new Error(ERROR.lotto.duplicate);
  }
}

function validBonusNumberDuplicates(lotto, bonusNumber) {
  if (lotto.includesNumber(bonusNumber)) {
    throw new Error(ERROR.bonus.duplicate);
  }
}

function validBonusNumberType(bonusNumber) {
  if (typeof bonusNumber !== "number" || Number.isNaN(bonusNumber)) {
    throw new Error(ERROR.bonus.numeric);
  }
}

function validBonusNumberRange(bonusNumber) {
  if (!(GAME.settings.minNumber <= bonusNumber && bonusNumber <= GAME.settings.maxNumber)) {
    throw new Error(ERROR.lotto.numberRange);
  }
}

function validatePurchaseAmount(amount) {
  validPurchaseAmountMinimun(amount);
  validPurchaseAmountNumeric(amount);
  validAmountUnit(amount);

  return amount;
}

function validateLotto(numbers) {
  validLottoLength(numbers);
  validLottoRange(numbers);
  validLottoNumeric(numbers);
  validLottoDuplicates(numbers);
}

function validateBonusNumber(lotto, bonusNumber) {
  validBonusNumberDuplicates(lotto, bonusNumber);
  validBonusNumberType(bonusNumber);
  validBonusNumberRange(bonusNumber);
}

export { validatePurchaseAmount, validateLotto, validateBonusNumber };
