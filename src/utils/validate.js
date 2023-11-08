import { GAME, ERROR } from "../constant/GameConfig.js";

function validatePurchaseAmountMinimun(amount) {
  if (amount < GAME.settings.unit) {
    throw new Error(ERROR.purchase.minimunAmount);
  }
}

function validatePurchaseAmountNumeric(amount) {
  if (isNaN(amount)) {
    throw new Error(ERROR.purchase.numeric);
  }
}

function validateAmountUnit(amount) {
  if (amount % GAME.settings.unit !== 0) {
    throw new Error(ERROR.purchase.amountUnit);
  }
}

function validLength(numbers) {
  if (numbers.length !== GAME.settings.numberLength) {
    throw new Error(ERROR.lotto.length);
  }
}

function validNumberRange(numbers) {
  for (const number of numbers) {
    if (!(GAME.settings.minNumber <= number && number <= GAME.settings.maxNumber)) {
      throw new Error(ERROR.lotto.numberRange);
    }
  }
}

function validNumeric(numbers) {
  for (const number of numbers) {
    if (typeof number !== "number" || Number.isNaN(number)) {
      throw new Error(ERROR.lotto.numeric);
    }
  }
}

function validDuplicates(numbers) {
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
  validatePurchaseAmountMinimun(amount);
  validatePurchaseAmountNumeric(amount);
  validateAmountUnit(amount);

  return amount;
}

function validateLotto(numbers) {
  validLength(numbers);
  validNumberRange(numbers);
  validNumeric(numbers);
  validDuplicates(numbers);
}

function validateBonusNumber(lotto, bonusNumber) {
  validBonusNumberDuplicates(lotto, bonusNumber);
  validBonusNumberType(bonusNumber);
  validBonusNumberRange(bonusNumber);
}

export { validatePurchaseAmount, validateLotto, validateBonusNumber };
