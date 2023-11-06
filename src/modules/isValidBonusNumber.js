const checkList = [
  {
    check: (string) => {
      const isNumber = /^[0-9]+$/.test(string);
      const isInRange = Number(string) >= 1 && Number(string) <= 45;
      const isValid = isNumber && isInRange;

      return isValid;
    },
    errorMessage: '[ERROR] 숫자 범위는 1~45사이입니다.',
  },
  {
    check: (string, array) => {
      const number = Number(string);
      const isValid = !array.includes(number);

      return isValid;
    },
    errorMessage: '[ERROR] 당첨 번호에 이미 존재하는 번호입니다.',
  },
];

const isValidBonusNumber = (numberString, winnerNumbers) => {
  const inValidObject = checkList.find((elem) => !elem.check(numberString, winnerNumbers));
  const isValid = inValidObject === undefined;

  if (!isValid) {
    throw new Error(inValidObject.errorMessage);
  }

  return isValid;
};

export default isValidBonusNumber;
