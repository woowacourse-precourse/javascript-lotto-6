const DIVISOR = 1000;
const ZERO = 0;

const checkList = [
  {
    check: (costString) => {
      const isNumber = /^[0-9]+$/.test(costString);
      return isNumber;
    },
    errorMessage: '[ERROR] 구입 금액은 숫자로 입력해야 합니다.',
  },
  {
    check: (costString) => {
      const isDividedUp = Number(costString) % DIVISOR === ZERO;
      return isDividedUp;
    },
    errorMessage: `[ERROR] 구입 금액은 ${DIVISOR}단위로 입력해야 합니다.`,
  },
];

const isValidCost = (costString) => {
  const inValidObject = checkList.find((elem) => !elem.check(costString));
  const isValid = inValidObject === undefined;

  if (!isValid) {
    throw new Error(inValidObject.errorMessage);
  }

  return isValid;
};

export default isValidCost;
