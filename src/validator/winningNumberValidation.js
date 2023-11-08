export const winningNumberLength = (winningNumber) => {
  if (winningNumber.split(',').length !== 6) {
    throw new Error('[ERROR] 6개의 숫자를 입력해 주세요.');
  }
};

export const duplicate = (winningNumber) => {
  if(winningNumber.split(',').length !== new Set(winningNumber.split(',')).size) {
    throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
  }
};