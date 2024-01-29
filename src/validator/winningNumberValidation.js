export const winningNumberLength = (winningNumber) => {
  if (winningNumber.split(',').length !== 6) {
    throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
}

export const duplicate = (winningNumber) => {
  const winningNumberArray = winningNumber.split(',')
if(winningNumberArray.length !== new Set(winningNumberArray).size) {
  throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
}
}
