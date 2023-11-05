function isEmptyInput(value) {
  return Number(value) === 0;
}

function isInteger(num) {
  return Number.isInteger(Number(num));
}

class Validator {
  isValidValue(value) {
    if (isEmptyInput(value) || !isInteger(value)) throw new Error('[ERROR] : 공백을 포함하지 않는 숫자를 입력해주세요.');
    return true;
  }
}

export default Validator;
