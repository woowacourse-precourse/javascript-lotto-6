/**
 *
 * @param {number[]} lottoNumbers
 * @param {number[]} winningNumbers
 * @returns {number}
 */
export const getMatchCount = (lottoNumbers, winningNumbers) => {
  return lottoNumbers.filter((number) => winningNumbers.includes(number)).length
}

/**
 *
 * @param {number[]} lottoNumbers
 * @param {number} number
 * @returns {boolean}
 */
export const hasLottoNumber = (lottoNumbers, number) => {
  return lottoNumbers.includes(number)
}
