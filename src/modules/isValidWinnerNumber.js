const checkList = [
  {
    check: (array) => array.length === 6,
    errorMessage: '[ERROR] 당첨 번호는 6개입니다.',
  },
  {
    check: (array) => {
      const set = new Set(array);
      return array.length === set.size;
    },
    errorMessage: '[ERROR] 당첨 번호에 중복되는 숫자가 있습니다.',
  },
  {
    check: (array) => {
      array.every((elem) => {
        const isNumber = /^[0-9]+$/.test(elem);
        const isInRange = Number(elem) >= 1 && Number(elem) <= 45;
        const isValid = isNumber && isInRange;

        return isValid;
      });
    },
    errorMessage: '[ERROR] 숫자 범위는 1~45사이입니다.',
  },
];

const isValidWinnerNumber = (winnerString) => {
  const numberArray = winnerString.split(',');
  const inValidObject = checkList.find((elem) => !elem.check(numberArray));
  const isValid = inValidObject === undefined;

  if (!isValid) {
    throw new Error(inValidObject.errorMessage);
  }

  return isValid;
};

export default isValidWinnerNumber;
