function isEmptyInput(value) {
  return Number(value) === 0;
}

function isInteger(num) {
  return Number.isInteger(Number(num));
}

class Validator {
  isValidValue(value) {
    if (isEmptyInput(value) || !isInteger(value)) return false;
    return true;
  }
}

export default Validator;
