function isNumber(value) {
  return Number.isInteger(Number(value));
}

function isDividedByThousand(value) {
  return value % 1000 === 0;
}

function isEmptyInput(value) {
  return Number(value) !== 0;
}

class BuyValidator {
  evaluate(value) {
    if (!isNumber(value) || !isDividedByThousand(value) || !isEmptyInput(value)) {
      throw new Error('[ERROR] 올바른 구입 금액을 입력하세요.');
    }
    return Number(value);
  }
}

export default BuyValidator;
