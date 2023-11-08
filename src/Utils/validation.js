const validateInput = (input) => {
  if (Number.isNaN(Number(input))) {
    throw new Error('[ERROR] 잘못된 입력 형식입니다.');
  }
};

const validateMinNumber = (input) => {
  if (Number(input) <= 0) {
    throw new Error('[ERROR] 1 이상의 값을 입력해주세요.');
  }
};

const validateNumberLength = (input) => {
  if (input.length > 6) {
    throw new Error('[ERROR] 6자리 이상 입력할 수 없습니다.');
  }
  if (input.length < 6) {
    throw new Error('[ERROR] 6자리를 입력하세요.');
  }
};

const validateMaxNumber = (input) => {
  if (Number(input) > 45) {
    throw new Error('[ERROR] 45이상의 값은 입력할 수 없습니다.');
  }
};

const checkValidateNumbers = (el) => {
  validateInput(el);
  validateMinNumber(el);
  validateMaxNumber(el);
};

export {
  validateInput,
  validateNumberLength,
  validateMinNumber,
  validateMaxNumber,
  checkValidateNumbers,
};
