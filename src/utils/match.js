/**
 * 일치 개수를 반환하는 함수
 * @param {number[]} numbers 로또 번호
 * @param {number[]} winningNumbers 당첨 번호
 * @returns {number} 당첨 번호와 일치하는 로또 번호의 개수
 */
function getMatchCount(numbers, winningNumbers) {
  return numbers.filter(number => winningNumbers.includes(number)).length;
}

/**
 * 로또 번호에 보너스 번호가 포함되어있는지를 반환하는 함수
 * @param {number[]} numbers 로또 번호
 * @param {number} bonusNumber 보너스 번호
 * @returns {Boolean} 보너스 번호 포함 유무
 */
function includeBonusNumber(numbers, bonusNumber) {
  return numbers.includes(bonusNumber);
}

export { getMatchCount, includeBonusNumber };
