export const winningNumberLength = (winningNumber) => {
  const winningNumberArray = winningNumber.split(',');
  if (winningNumberArray.length !== 6) {
    throw new Error('6개의 숫자를 입력해 주세요.');
  }
};

export const duplicate = (winningNumber) => {
  const duplicateArray = winningNumber.split(',');
  const setDuplicateArray = new Set(duplicateArray);
  if(duplicateArray.length !== setDuplicateArray.size) {
    throw new Error('로또 번호에 중복된 숫자가 있습니다.');
  }
};